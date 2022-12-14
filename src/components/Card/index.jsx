import React from "react";
import "./style.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faClock,
  faCalendarAlt,
  faExternalLinkSquare,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import { dateFormat, timeFormat } from "./constants";

library.add(faClock, faCalendarAlt, faExternalLinkSquare, faMapMarker);

const Card = ({ venue, startsAt, endsAt, onClick, isActive }) => {
  return (
    <article
      onClick={onClick}
      className={`${
        isActive ? " bg-red-800 bg-opacity-60 shadow-lg shadow-cyan-500/50" : ""
      } text-white shrink-0 border box-border m-0 ring-gray-500 backdrop-blur-md rounded border-gray-400 h-32 w-64 p-2 max-width cursor-pointer`}
    >
      <div
        className={`${
          isActive ? "font-semibold" : ""
        } flex flex-col justify-center items-start font-medium`}
      >
        <div className="flex flex-row gap-2 align-middle items-center">
          <FontAwesomeIcon icon="calendar-alt" />
          <span>
            {startsAt ? moment(startsAt).format(`${dateFormat}`) : "-"}
          </span>
        </div>
        <div className="flex flex-row gap-2 align-middle items-center">
          <FontAwesomeIcon icon="clock" />
          <span>
            {startsAt ? moment(startsAt).format(`${timeFormat}`) : "-"}
          </span>
        </div>
        <div className="flex flex-row gap-2 align-middle items-center">
          <FontAwesomeIcon icon="map-marker" />
          <span>
            {venue.name}, {venue.location}, {venue.country}
          </span>
        </div>
      </div>
    </article>
  );
};

export default React.memo(Card);
