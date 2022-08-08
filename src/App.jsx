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
import { NO_RECORD_FOUND } from "./shared/constants";
import Alert from "./components/Alert";

library.add(faClock, faCalendarAlt);

export const App = () => {
  // useEvents and useArtists hooks extract data from api results on input change
  const [artistName, , imageUrl, , links, setArtist] = useArtist();
  const [venues, setEvents] = useEvents();
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [enteredArtist, setEnteredArtist] = useState(null);

  const [error, setError] = useState(null);

  useEffect(() => {
    if (enteredArtist) {
      //fetching data from api then putting it into event hook
      getEvents(enteredArtist)
        .then((eventsObj) => {
          setError(null);
          setEvents(eventsObj.data);
        })
        .catch((err) => {
          setEvents();
          setError(err);
        });
    }
  }, [setEvents, enteredArtist]);

  useEffect(() => {
    if (enteredArtist) {
      //fetcing data from api then putting it into artist hook
      getArtist(enteredArtist)
        .then((artistObj) => {
          setError(null);
          setArtist(artistObj.data);
        })
        .catch((err) => {
          setArtist()
          setError(err);
        });
    }
  }, [setArtist, enteredArtist]);

  //sets state of selected Venue so map is centered to selected venue location
  const cardClicked = useCallback((venue) => {
    setSelectedVenue(venue);
  }, []);

  // catch entered artist name from input and set enteredArtist state
  const getArtistFromInput = (artist) => setEnteredArtist(artist);

  return (
    <section className="p-1 w-screen">
      <div className="absolute top-1 flex flex-col justify-start items-center gap-2 w-full backdrop-blur-md bg-gradient-to-b from-gray-800 to-transparent p-2">
        <Input artist={getArtistFromInput} />
        {artistName && (
          // metadata has avatar and list of social sites' link
          <MetaData imageUrl={imageUrl} artistName={artistName} links={links} />
        )}
        {error ? <Alert type="error" message={error} /> : null}
      </div>
      {/** Map has list of venue locations to render markers and center to selected venue */}
      <Map venues={venues} selectedVenue={selectedVenue?.venue} />
      {/** Venue List renders at the bottom of the screen to display event venue, timings and date */}
      <VenueCardList
        venues={venues}
        cardClicked={cardClicked}
        selectedVenue={selectedVenue}
      />
    </section>
  );
};

export default App;
