import { useCallback, useEffect, useState } from "react";

const useEvents = (eventsObj) => {
  const [events, setEvents] = useState(eventsObj);
  const [venues, setVenues] = useState();

  const extractVenues = useCallback(() => {
    const allVenues = [];
    events?.map((event) => allVenues.push(event?.venue));
    setVenues(allVenues);
  }, [events]);

  useEffect(() => {
      extractVenues();
  }, [events, extractVenues]);

  return [venues, setEvents];
};

export default useEvents;
