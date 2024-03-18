import Artist from "./Components/Artist";
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddArtist from "./Components/AddArtist";

function App() {
    
  const [genre, setGenre] = useState("Rock");
  const [artists, setArtists] = useState(
      [
        {id: 1, name: "Metallica", genre: "Thrash Metal", img: ""},
        {id: 2, name: "Emperor", genre: "Black Metal", img: ""},
        {id: 3, name: "Pantera", genre: "Groove Metal", img: ""},
        {id: 4, name: "Samael", genre: "Industrial Black Metal", img: ""},
        {id: 5, name: "Opeth", genre: "Progressive Metal", img: ""},
        {id: 6, name: "Tool", genre: "Progressive Metal", img: ""}
      ]
  );
  function updateArtist(id, newName, newGenre) {
      const updatedArtists = artists.map(artist => {
          if(id == artist.id) {
              return {...artist, name: newName, genre: newGenre};
          }
          return artist;
      });
          setArtists(updatedArtists);
      
  }
  
  function newArtist(name, genre) {
      newArtist = {
          id: uuidv4(),
          name: name,
          genre: genre,
          img: ""
      };
      setArtists([...artists, newArtist]);
  }
  const showArtist = true;
  return (
    <div className="App bg-red-400 min-h-[960px]">
      {showArtist ?
          <>
              <input type="text" onChange={(e) => {
                  console.log(e.target.value);
                  setGenre(e.target.value);
              }}
              />
              <p>TODO: Create Header</p>
              <p>TODO: Create Background</p>
              <AddArtist newArtist={newArtist}/>
              <div className="flex flex-wrap justify-center">
                  {artists.map((artist, index) => {
                      return (
                          <Artist key={artist.id}
                                  id={artist.id}
                                  name={artist.name}
                                  genre={artist.genre}
                                  img={artist.img}
                                  updateArtist={updateArtist}
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
