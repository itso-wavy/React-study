import { useParams, useLoaderData, json } from 'react-router-dom';
import EventItem from '../components/EventItem';

export const loader = async ({ request, params }) => {
  // loader 안에서 useParams 대체 방법
  const eventId = params.eventId;
  const response = await fetch('http://localhost:8080/events/' + eventId);
  /* loader auto props ===
  {
    request: Request {
      method: 'GET',
      url: 'http://localhost:3000/events/e1',
      headers: Headers {},
      destination: '',
      referrer: 'about:client',
      referrerPolicy: '',
      mode: 'cors',
      credentials: 'same-origin',
      cache: 'default',
      redirect: 'follow',
      integrity: '',
      keepalive: false,
      signal: AbortSignal { aborted: false, reason: undefined, onabort: null },
      isHistoryNavigation: false,
      bodyUsed: false,
      body: null
    },
    params: { eventId: 'e1' },
    context: undefined
  }
   */

  /* 
   Response {
    type: 'basic',
    url: 'http://localhost:3000/events/e1e1',
    redirected: false,
    status: 200,
    ok: true,
    statusText: 'OK',
    headers: Headers {},
    body: ReadableStream { locked: false },
    bodyUsed: false
  }
   */

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch events from server.' },
      { status: 500 }
    );
  } else {
    return response; // 61줄로
  }
};

function EventDetailPage() {
  // const { eventId } = useParams();
  const data = useLoaderData();
  return <EventItem event={data.event} />;
}

export default EventDetailPage;
