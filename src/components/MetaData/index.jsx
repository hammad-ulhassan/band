import Avatar from "../Avatar";

const MetaData = ({imageUrl, artistName, links}) => {
  return (
    <div className="flex flex-row items-start justify-start text-white gap-3">
      {imageUrl && <Avatar imageLink={imageUrl} />}
      <article className="flex flex-col items-start justify-center">
        <span className="font-semibold">{artistName}</span>
        <span className="font-semibold">
          <ul className=" flex flex-row gap-2">
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
      </article>
    </div>
  );
};

export default MetaData;
