import React from 'react';
import EventForm from '../components/EventForm';
import { json, redirect, useActionData, useFormAction } from 'react-router-dom';

export default function NewEventPage() {
  // useFormAction;
  // useActionData;

  return <EventForm method='post' />;
}

export const action = async ({ request, params }) => {
  const data = await request.formData();
  const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description'),
  };

  const response = await fetch('http://localhost:8080/events', {
    method: 'POST',
    body: JSON.stringify(eventData),
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok)
    throw json({ message: 'could not save event!' }, { status: 500 });

  return redirect('/events');
};
