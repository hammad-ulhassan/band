import api from "./api";
import "./App.css";
import Input from "./components/Input";
import Map from "./components/Map";

export const App = () => {
  const fetchArtist = (artist) => {
    api.getArtist(artist)
  };

  return (
    <div class="container mx-auto h-16">
      <Input onChange={fetchArtist} />
      <Map apiKey={process.env.REACT_APP_MAP_BOX_API} />
    </div>
  );
};

export default App;
