import React from "react";
import "./style.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faClock,
  faCalendarAlt,
  faExternalLinkSquare
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faClock, faCalendarAlt, faExternalLinkSquare);

const Card = ({ venue, onClick, isActive }) => {
  return (
    <div
      onClick={onClick}
      className={`${
        isActive ? " bg-red-800 bg-opacity-60 shadow-lg shadow-cyan-500/50" : ""
      } text-white shrink-0 border box-border m-0 ring-gray-500 backdrop-blur-md rounded border-gray-400 h-36 w-64 p-2 max-width `}
    >
      <div
        className={`${
          isActive ? "font-semibold" : ""
        } flex flex-col justify-center items-start font-medium`}
      >
        <span>
          <FontAwesomeIcon icon="clock" />
          {venue.name}
        </span>
        <span>
          <FontAwesomeIcon icon="calendar-alt" />
          {venue.location}
        </span>
        <span>
          <FontAwesomeIcon icon="external-link-square" />
          {venue.city}
        </span>
        <span>{venue.region}</span>
        <span>{venue.country}</span>
      </div>
    </div>
  );
};

export default React.memo(Card);
