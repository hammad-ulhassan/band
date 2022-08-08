import React from "react";
import "./style.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faClock,
  faCalendarAlt,
  faExternalLinkSquare
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import { dateFormat, timeFormat } from "./constants";

library.add(faClock, faCalendarAlt, faExternalLinkSquare);

const Card = ({ venue, onClick, isActive }) => {
  return (
    <article
      onClick={onClick}
      className={`${
        isActive ? " bg-red-800 bg-opacity-60 shadow-lg shadow-cyan-500/50" : ""
      } text-white shrink-0 border box-border m-0 ring-gray-500 backdrop-blur-md rounded border-gray-400 h-24 w-64 p-2 max-width cursor-pointer`}
    >
      <div
        className={`${
          isActive ? "font-semibold" : ""
        } flex flex-col justify-center items-start font-medium`}
      >
        <div className="flex flex-row gap-2 align-middle items-center">
          <FontAwesomeIcon icon="calendar-alt" />
          <span>
            {
              moment(venue.startsAt).format(`${dateFormat}`)
            }
          </span>
        </div>
        <div className="flex flex-row gap-2 align-middle items-center">
          <FontAwesomeIcon icon="clock" />
          <span>
            {
              moment(venue.startsAt).format(`${timeFormat}`)
            }
          </span>
        </div>
        <span>
          {venue.location},{venue.country}
        </span>
      </div>
    </article>
  );
};

export default React.memo(Card);
