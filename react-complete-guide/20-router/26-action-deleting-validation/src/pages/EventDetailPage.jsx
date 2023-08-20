import React from 'react';
import { json, useRouteLoaderData, redirect } from 'react-router-dom';
import EventItem from '../components/EventItem';

function EventDetailPage() {
  // const { eventId } = useParams();
  // const data = useLoaderData();
  const data = useRouteLoaderData('event-detail'); // route-id 지정
  return <EventItem event={data.event} />;
}

export default EventDetailPage;

export const loader = async ({ request, params }) => {
  // loader 안에서 useParams 대체 방법
  const eventId = params.eventId;
  const response = await fetch('http://localhost:8080/events/' + eventId);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch events from server.' },
      { status: 500 }
    ); // errorPage로
  } else {
    return response; // 8줄로
  }
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
