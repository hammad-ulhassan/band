import Card from "../Card";

const VenueCardList = ({venues, cardClicked, selectedVenue}) => {
  return (
    <div className="absolute bottom-1 flex flex-row flex-grow-0 overflow-auto justify-items-start align-middle gap-1 w-full">
      {venues &&
        venues.length &&
        venues.map((v, i) => (
          <Card
            key={i}
            venue={v.venue}
            startsAt={v.startsAt}
            endsAt={v.endsAt}
            onClick={() => cardClicked(v)}
            isActive={selectedVenue && v.id === selectedVenue.id}
          />
        ))}
    </div>
  );
};

export default VenueCardList;
