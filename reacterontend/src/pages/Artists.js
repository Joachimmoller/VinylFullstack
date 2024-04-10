import Artist from "../components/Artist";
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddArtist from "../components/AddArtist";
import ArtistImgFetch from "../components/ArtistImgFetch";

function Artists() {
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
            img: <ArtistImgFetch searchBand={name} />
        };
        setArtists([...artists, newArtist]);
    }
    return (
        <div className="">
            {
                <>
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
            }
        </div>
    );
}


export default Artists;
