import { useCallback, useEffect, useState } from "react";
import { getArtist, getEvents } from "./api";
import "./App.css";
import Avatar from "./components/Avatar";
import Card from "./components/Card";
import Input from "./components/Input";
import Map from "./components/Map";
import VenueCardList from "./components/VenueCardList";
import useArtist from "./utils/useArtist";
import useEvents from "./utils/useEvents";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClock, faCalendarAlt,  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


library.add(faClock, faCalendarAlt);

export const App = () => {
  const [artistName, facebookPageUrl, imageUrl, thumbUrl, links, setArtist] = useArtist();
  const [venues, setEvents] = useEvents();
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [enteredArtist, setEnteredArtist] = useState(null);

  useEffect(() => {
    if(enteredArtist){
      getEvents(enteredArtist).then((eventsObj) => setEvents(eventsObj.data));
    }
  }, [setEvents, enteredArtist]);

  useEffect(() => {
    if(enteredArtist){
    getArtist(enteredArtist).then(artistObj => setArtist(artistObj.data));
    }
  }, [setArtist, enteredArtist]);

  const cardClicked = useCallback((venue) => {
    setSelectedVenue(venue);
  }, []);

  const getArtistFromInput = (artist) => setEnteredArtist(artist)

  return (
    <section className="p-1 w-screen">
      <div className="absolute top-1 flex flex-col justify-start items-center gap-2 w-full backdrop-blur-md bg-gradient-to-b from-gray-800 to-transparent p-2">
        <Input artist={getArtistFromInput}/>
        <div className="flex flex-row items-start justify-start text-white">
          {imageUrl && <Avatar imageLink={imageUrl}/>}
          <span className="font-semibold">
            {artistName}
          </span>
          <span className="font-semibold">
            {facebookPageUrl}
            <FontAwesomeIcon icon="fa-brands fa-square-facebook" />
          </span>
        </div>
      </div>
      <Map
        apiKey={'pk.eyJ1IjoiYWdoYTU1NSIsImEiOiJjanBjd3ZzMXowNTV5M3FtcmRhZmlnczhjIn0.rt9R6DfV-ceirBBcIMkBzg'}
        venues={venues}
        selectedVenue={selectedVenue?.venue}
      />
      <VenueCardList venues={venues} cardClicked={cardClicked} selectedVenue={selectedVenue}/>
    </section>
  );
};

export default App;
