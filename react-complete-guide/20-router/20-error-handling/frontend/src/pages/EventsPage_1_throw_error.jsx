// import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

export const loader = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    return { isError: true, message: 'Could not fetch events.' };
  } else {
    // const resData = await response.json();
    // return resData;
    return response;
  }
};

function EventsPage() {
  const data = useLoaderData();

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
      {data.isError ? (
        <p>{data.message}</p>
      ) : (
        <EventsList events={data.events} />
      )}
      (
      {/* <div style={{ textAlign: 'center' }}>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
    {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
    <EventsList events={data.events} />
    ) */}
    </>
  );
}

export default EventsPage;
