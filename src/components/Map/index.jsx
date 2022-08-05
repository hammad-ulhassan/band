import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";
import constants from "./constants";
import style from "./style";


const Map = ({ apiKey, markers }) => {
  mapboxgl.accessToken = apiKey;

  const mapContainerRef = useRef(null);
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: constants.mapStyle,
      center: [-87.65, 41.84],
      zoom: 10,
    });

    map.addControl(new mapboxgl.NavigationControl(), constants.navControlPosition.bottomRight);

    markers &&
      markers.length &&
      markers.map((marker) =>
        new mapboxgl.Marker().setLngLat(marker).addTo(map)
      );

    return () => map.remove();
  }, [markers]);

  return <style.MapContainer className="map-container" ref={mapContainerRef} />;
};

export default Map;
