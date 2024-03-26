import Album from "../components/Album";
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddAlbum from "../components/AddAlbum";

function Albums() {

    const [genre, setGenre] = useState("Rock");
    const [albums, setAlbums] = useState(
        [
            {id: 1, name: "Kill'em All", band: "Metaliilca", genre: "Thrash Metal", img: ""},
            {id: 2, name: "In the Nightside Eclipse", band: "Emperor", genre: "Black Metal", img: ""},
            {id: 3, name: "Vulgar Display of Power", band: "Pantera", genre: "Groove Metal", img: ""},
            {id: 4, name: "Passage", band: "Samael", genre: "Industrial Black Metal", img: ""},
            {id: 5, name: "Blackwater Park", band: "Opeth", genre: "Progressive Metal", img: ""},
            {id: 6, name: "Lateralus", band: "Tool", genre: "Progressive Metal", img: ""}
        ]
    );
    function updateAlbum(id, newTitle, newBand, newGenre) {
        const updatedAlbums = albums.map(album => {
            if(id == album.id) {
                return {...album, name: newTitle, band:newBand, genre: newGenre};
            }
            return album;
        });
        setAlbums(updatedAlbums);
    }
    function newAlbum(title, band, genre) {
        newAlbum = {
            id: uuidv4(),
            title: title,
            band: band,
            genre: genre,
            img: ""
        };
        setAlbums([...albums, newAlbum]);
    }
    return (
        <div className="">
            {
                <>
                    <AddAlbum newAlbum={newAlbum}/>
                    <div className="flex flex-wrap justify-center">
                        {albums.map((album, index) => {
                            return (
                                <Album key={album.id}
                                        id={album.id}
                                        title={album.name}
                                        band={album.band}
                                        genre={album.genre}
                                        img={album.img}
                                        updateAlbum={updateAlbum}
                                />
                            );
                        })}
                    </div>
                </>
            }
        </div>
    );
}
export default Albums;