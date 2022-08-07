import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import constants from "./constants";
import style from "./style";

const Map = ({ apiKey, venues }) => {
  mapboxgl.accessToken = apiKey;

  const mapContainerRef = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: constants.mapStyle,
      center: [-87.65, 41.84],
      zoom: constants.defaultZoomLevel,
    });
    
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    venues &&
      venues.length &&
      venues.map((venue) =>
        new mapboxgl.Marker()
          .setLngLat([venue.longitude, venue.latitude])
          .addTo(map.current)
      );
  }, [venues]);

  return <style.MapContainer className="map-container" ref={mapContainerRef} />;
};

export default Map;
