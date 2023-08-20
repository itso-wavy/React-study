import { useRouteError } from 'react-router-dom';
import PageContent from '../components/PageContent';

export default function ErrorPage() {
  const error = useRouteError();

  let title = 'Error!';
  let message = 'Something went wrong!';
  console.log('error: ', error);

  if (error.status === 500) {
    // 서버 측에서 문제가 발생한 경우
    title = 'Error 500';
    // message = JSON.parse(error.data).message;

    message = error.data.message;
  }

  if (error.status === 404) {
    // 요청에 해당하는 페이지를 찾을 수 없는 경우
    title = 'Error 404';
    message = 'Page not found!';
  }

  return <PageContent title={title}>{message}</PageContent>;
}
