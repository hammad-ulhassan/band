import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import constants from "./constants";
import style from "./style";

const Map = ({ venues, selectedVenue }) => {
  // mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_API;
  mapboxgl.accessToken = 'pk.eyJ1IjoiYWdoYTU1NSIsImEiOiJjanBjd3ZzMXowNTV5M3FtcmRhZmlnczhjIn0.rt9R6DfV-ceirBBcIMkBzg';

  const mapContainerRef = useRef(null);
  const map = useRef(null);

  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: constants.mapStyle.dark,
      center: [-87.65, 41.84], //chicago
      zoom: constants.defaultZoomLevel,
    });
  }, []);

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize

    if (markers?.length) {
      markers.map((marker) => marker.remove());
    }

    const currentMarkers =
      venues &&
      venues.length &&
      venues.map((venue) =>
        new mapboxgl.Marker()
          .setLngLat([venue.venue.longitude, venue.venue.latitude])
          .addTo(map.current)
      );

    setMarkers(currentMarkers);
  }, [venues]);

  useEffect(() => {
    if (!selectedVenue) return;
    map.current.setCenter({
      lat: selectedVenue.latitude,
      lng: selectedVenue.longitude,
    });
    map.current.setZoom(13);
  }, [selectedVenue]);

  return <style.MapContainer className="map-container" ref={mapContainerRef} />;
};

export default Map;
