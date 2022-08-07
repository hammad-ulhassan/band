import { useEffect } from "react";
import { getArtist, getEvents } from "./api";
import "./App.css";
import Card from "./components/Card";
import Map from "./components/Map";
import useArtist from "./utils/useArtist";
import useEvents from "./utils/useEvents";

export const App = () => {
  const [artistName, facebookPageUrl, imageUrl, thumbUrl, links, setArtist] =
    useArtist();

  const [venues, setEvents] = useEvents();

  useEffect(() => {
    getEvents("imaginedragons").then((eventsObj) => setEvents(eventsObj.data));
  }, [setEvents]);

  return (
    <section className="p-1 w-screen">
      <Map apiKey={process.env.REACT_APP_MAP_BOX_API} venues={venues}/>
      <div className="absolute bottom-1 flex flex-row flex-grow-0 overflow-auto justify-items-start align-middle gap-1 w-full">
        {venues && venues.length && venues.map((v, i) => <Card key={i} venue={v}/>)}
      </div>
    </section>
  );
};

export default App;
