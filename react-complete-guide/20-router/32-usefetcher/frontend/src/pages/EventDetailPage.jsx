import React, { Suspense } from 'react';
import {
  json,
  useRouteLoaderData,
  redirect,
  defer,
  Await,
} from 'react-router-dom';
import EventItem from '../components/EventItem';
import EventsList from '../components/EventsList';

function EventDetailPage() {
  const { event, events } = useRouteLoaderData('event-detail'); // route-id 지정

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={event}>
          {loadedEvent => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
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
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch events from server.' },
      { status: 500 }
    );
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
