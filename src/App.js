import { useCallback, useEffect, useState } from "react";
import { getArtist, getEvents } from "./api";
import "./App.css";
import Input from "./components/Input";
import Map from "./components/Map";
import VenueCardList from "./components/VenueCardList";
import useArtist from "./utils/useArtist";
import useEvents from "./utils/useEvents";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClock, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import MetaData from "./components/MetaData";

library.add(faClock, faCalendarAlt);

export const App = () => {
  const [artistName, , imageUrl, , links, setArtist] = useArtist();
  const [venues, setEvents] = useEvents();
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [enteredArtist, setEnteredArtist] = useState(null);

  useEffect(() => {
    if (enteredArtist) {
      getEvents(enteredArtist).then((eventsObj) => setEvents(eventsObj.data));
    }
  }, [setEvents, enteredArtist]);

  useEffect(() => {
    if (enteredArtist) {
      getArtist(enteredArtist).then((artistObj) => setArtist(artistObj.data));
    }
  }, [setArtist, enteredArtist]);

  const cardClicked = useCallback((venue) => {
    setSelectedVenue(venue);
  }, []);

  const getArtistFromInput = (artist) => setEnteredArtist(artist);

  return (
    <section className="p-1 w-screen">
      <div className="absolute top-1 flex flex-col justify-start items-center gap-2 w-full backdrop-blur-md bg-gradient-to-b from-gray-800 to-transparent p-2">
        <Input artist={getArtistFromInput} />
        {artistName && (
          <MetaData imageUrl={imageUrl} artistName={artistName} links={links}/>
        )}
      </div>
      <Map
        venues={venues}
        selectedVenue={selectedVenue?.venue}
      />
      <VenueCardList
        venues={venues}
        cardClicked={cardClicked}
        selectedVenue={selectedVenue}
      />
    </section>
  );
};

export default App;
