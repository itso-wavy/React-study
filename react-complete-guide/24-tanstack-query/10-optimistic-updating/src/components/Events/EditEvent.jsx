import { Link, useNavigate, useParams } from 'react-router-dom';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchEvent, updateEvent, queryClient } from '../../util/http.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';

export default function EditEvent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['event', { id }],
    queryFn: ({ signal }) => fetchEvent({ signal, id }),
  });

  const { mutate } = useMutation({
    mutationFn: updateEvent,
    onMutate: async ({ id, event }) => {
      // mutate 호출 후 서버 응답 필요 없이 즉시 실행, 낙관적 업데이트시 비동기적으로 작동해야 함
      const queryKey = ['events', { id }];
      await queryClient.cancelQueries({ queryKey });

      const previousEvent = queryClient.getQueryData(queryKey);

      queryClient.setQueryData(queryKey, event);

      return { previousEvent }; // 롤백을 위한 이전 데이터(context)
    },
    onError: (error, data, context) => {
      // 뮤테이션 실패시 롤백
      queryClient.setQueryData(['events', { id }], context.previousEvent);
    },
    onSettled: () => {
      // 뮤테이션 완료시(성공, 실패 무관)
      queryClient.invalidateQueries(['events', { id }]); // 쿼리 무효화-데이터 refetching을 통해 서버 데이터로 클라이언트 동기화
    },
  });

  function handleSubmit(formData) {
    mutate({ id, event: formData });
    navigate('../');
  }

  function handleClose() {
    navigate('../');
  }

  let content;

  if (isPending) {
    content = (
      <div className='center'>
        <LoadingIndicator />
      </div>
    );
  }
  if (isError) {
    content = (
      <>
        <ErrorBlock
          title='Failed to load event.'
          message={
            error.info?.message ||
            'Failed to load event. Please check your inputs and try again later.'
          }
        />
        <div className='form-actions'>
          <Link to='../' className='button'>
            Okay
          </Link>
        </div>
      </>
    );
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to='../' className='button-text'>
          Cancel
        </Link>
        <button type='submit' className='button'>
          Update
        </button>
      </EventForm>
    );
  }

  return <Modal onClose={handleClose}>{content}</Modal>;
}
