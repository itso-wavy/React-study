import React from 'react';
import { useParams } from 'react-router-dom';

export default function EventDetailPage() {
  const { eventId } = useParams();
  return (
    <div>
      <p>EventDetailPage</p>
      <p>Event ID: {eventId}</p>
    </div>
  );
}
