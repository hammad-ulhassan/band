import { useEffect, useState } from "react";

const useArtist = (artistObject) => {
  const [artist, setArtist] = useState(artistObject);
  const [artistName, setArtistName] = useState();
  const [facebookPageUrl, setFacebookPageUrl] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [thumbUrl, setThumbUrl] = useState();
  const [links, setLinks] = useState();

  useEffect(() => {
    setArtistName(artist?.name);
    setFacebookPageUrl(artist?.facebook_page_url);
    setImageUrl(artist?.image_url);
    setThumbUrl(artist?.thumb_url);
    setLinks(artist?.links);
  }, [artist]);

  return [ artistName, facebookPageUrl, imageUrl, thumbUrl, links, setArtist ];
};

export default useArtist;
