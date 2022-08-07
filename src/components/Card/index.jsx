
import './style.css';

const Card = ({venue}) => {
  return (
    <div className=" shrink-0 border box-border m-0 ring-gray-500 backdrop-blur-md rounded border-gray-400 h-36 w-64 p-2 max-width">
      <div className="flex flex-col justify-center items-start">
        <span >
          {venue.name}
        </span>
        <span >
          {venue.location}
        </span>
        <span >
          {venue.city}
        </span>
        <span >
          {venue.region}
        </span>
        <span >
          {venue.country}
        </span>
      </div>
    </div>
  );
};

export default Card;
