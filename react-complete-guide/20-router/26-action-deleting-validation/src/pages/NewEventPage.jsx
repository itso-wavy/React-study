import React from 'react';
import EventForm from '../components/EventForm';
import { json, redirect } from 'react-router-dom';

export default function NewEventPage() {
  return <EventForm method='post' />;
}

export const action = async ({ request }) => {
  // newEvent 폼 제출시 실행하는 함수, formData를 가공하여 백엔드로 전송함

  const formData = await request.formData();

  const eventData = {
    title: formData.get('title'), // input name으로 get
    image: formData.get('image'),
    date: formData.get('date'),
    description: formData.get('description'),
  };

  const response = await fetch('http://localhost:8080/events', {
    method: 'POST',
    body: JSON.stringify(eventData),
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok)
    throw json({ message: 'could not save event!' }, { status: 500 });

  // return redirect('..');
  return redirect('/events');
};
