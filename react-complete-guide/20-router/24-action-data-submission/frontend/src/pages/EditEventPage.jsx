import React from 'react';
import EventForm from '../components/EventForm';
import { useRouteLoaderData } from 'react-router-dom';

export default function EditEventPage() {
  const data = useRouteLoaderData('event-detail');
  /* {
    event: {
      id: 'e1',
      title: 'A dummy event',
      date: '2023-02-22',
      image: 'https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg',
      description: 'Join this amazing event and connect with fellow developers.'
    }
  } */
  return <EventForm event={data.event} />;
}
