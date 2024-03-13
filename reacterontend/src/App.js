import Artist from "./Components/Artist";
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewArtist from "./Components/NewArtist";

function App() {
  const [genre, setGenre] = useState("Rock");
  const [artists, setArtists] = useState(
      [
        {name: "Metallica", genre: "Thrash Metal", img: ""},
        {name: "Emperor", genre: "Black Metal", img: ""},
        {name: "Pantera", genre: "Groove Metal", img: ""},
        {name: "Samael", genre: "Industrial Black Metal", img: ""},
        {name: "Opeth", genre: "Progressive Metal", img: ""},
        {name: "Tool", genre: "Progressive Metal", img: ""}
      ]
  );
  const showArtist = true;
  return (
    <div className="App">
      {showArtist ? 
      <>
        <input type="text" onChange={(e) => {
            console.log(e.target.value);
            setGenre(e.target.value);
          }}
          />
          <NewArtist />
        <div className="flex flex-wrap justify-center">
            {artists.map((artist, index) => {
                return (
                <Artist key={uuidv4()} name={artist.name} genre={artist.genre} img={artist.img}
                />
                );
            })}
        </div>
      </>
          : 
          null
      }
    </div>
  );
}

export default App;
