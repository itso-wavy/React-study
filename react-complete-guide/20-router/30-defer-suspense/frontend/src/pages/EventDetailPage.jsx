import { Suspense } from 'react';
import {
  Await,
  defer,
  json,
  useRouteLoaderData,
  redirect,
} from 'react-router-dom';
import EventItem from '../components/EventItem';
import EventsList from '../components/EventsList';

function EventDetailPage() {
  // const { eventId } = useParams();
  // const data = useLoaderData();
  const { event, events } = useRouteLoaderData('event-detail');

  // return <EventItem event={data.event} />;
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={event}>
          {loadedEvent => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={events}>
          {loadedEvents => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default EventDetailPage;

export const loadEvent = async eventId => {
  const response = await fetch('http://localhost:8080/events/' + eventId);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch events from server.' },
      { status: 500 }
    );
  } else {
    const { event } = await response.json();
    return event;
  }
};

export const loadEvents = async () => {
  const response = await fetch('http://localhost:8080/events/');

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch events from server.' },
      { status: 500 }
    ); // errorPage로
  } else {
    const { events } = await response.json();
    return events;
  }
};

export const loader = async ({ request, params }) => {
  const eventId = params.eventId;

  return defer({
    event: await loadEvent(eventId),
    events: loadEvents(),
  });
};

export const action = async ({ params, request }) => {
  const id = params.eventId;
  const response = await fetch('http://localhost:8080/events/' + id, {
    method: request.method, // method 동적 설정
  });

  if (!response.ok)
    throw json({ messege: 'could not delete event' }, { status: 500 });

  return redirect('/events');
};
