import React from 'react';
import { Link } from 'react-router-dom';

const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'Some event',
    image: '',
  },
  {
    id: 'e2',
    title: 'Another event',
  },
];

export default function EventsPage() {
  return (
    <>
      <div>EventsPage</div>
      <ul>
        {DUMMY_EVENTS.map(e => (
          <li key={e.id}>
            <Link to={e.id}>{e.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
