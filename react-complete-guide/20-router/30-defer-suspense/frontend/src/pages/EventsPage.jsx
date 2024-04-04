// import { useEffect, useState } from 'react';
import { Suspense } from 'react';
import { Await, json, useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
  const { events } = useLoaderData();

  // const [isLoading, setIsLoading] = useState(false);
  // const [fetchedEvents, setFetchedEvents] = useState();
  // const [error, setError] = useState();

  // useEffect(() => {
  //   async function fetchEvents() {
  //     setIsLoading(true);
  //     // const response = await fetch('http://localhost:8080/events');

  //     // if (!response.ok) {
  //     //   setError('Fetching events failed.');
  //     // } else {
  //     //   const resData = await response.json();
  //     //   setFetchedEvents(resData.events);
  //     // }
  //     setIsLoading(false);
  //   }

  //   fetchEvents();
  // }, []);

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={events}>
          {loadedEvents => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
      {/* {data.isError ? (
        <p>{data.message}</p>
      ) : (
        <EventsList events={data.events} />
      )}
       <div style={{ textAlign: 'center' }}>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
    {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
    <EventsList events={data.events} />
    ) */}
    </>
  );
}

export const loadEvents = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // 1번 방법
    // return { isError: true, message: 'Could not fetch events.' };

    // 2번 방법
    // throw new Response(
    //   JSON.stringify({ message: 'Could not fetch events from server.' }),
    //   { status: 500 }
    // );

    throw json(
      { message: 'Could not fetch events from server.' },
      { status: 500 }
    );
  } else {
    // const resData = await response.json();
    // return resData;
    const { events } = await response.json();
    return events;
  }
};

export const loader = () => {
  return defer({ events: loadEvents() });
};

export default EventsPage;
