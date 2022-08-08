import Avatar from "../Avatar";

const MetaData = ({imageUrl, artistName, links}) => {
  return (
    <div className="flex flex-row items-start justify-start text-white">
      {imageUrl && <Avatar imageLink={imageUrl} />}
      <span className="font-semibold">{artistName}</span>
      <span className="font-semibold">
        <ul className="list-disc">
          {links &&
            links.length &&
            links.map((link) => (
              <li>
                <a href={link.url} className=" underline">
                  {link.type}
                </a>
              </li>
            ))}
        </ul>
      </span>
    </div>
  );
};

export default MetaData;
