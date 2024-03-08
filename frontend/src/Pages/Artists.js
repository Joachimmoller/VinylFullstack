import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {baseUrl} from "../shared";
import AddArtist from "../Components/AddArtist";

export default function Artists() {
    const [artists, setArtists] = useState();
    const [show, setShow] = useState(false);

    
    // Finds all artist in database and returns them as a list
    function toggleShow() {
        setShow(!show);
    }
    useEffect(() => {
        fetch( baseUrl + "api/artist/")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setArtists(data);
            });
    }, []);
    
    function newArtist(name, industry) {
        const data = {name : name, industry : industry}
        const url = baseUrl + "api/artistComponent/";
        fetch(url, {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(data)
        }).then((response) => {
            if (!response.ok) {
                throw new Error("Something went wrong");
            }
            return response.json();
        }).then((data) => {
            toggleShow();
            setArtists([...artists, data.artist]);
        })
            .catch((error) => {
                console.log(error.message);
            });
    }
    return (
        <>
            <h1>Here are our artists:</h1>
            <ul>

                {artists ? artists.map((artist) => {
                    return (
                        <li key={artist.id}>
                            <Link to={"/artistComponent/" + artist.id}>{artist.name}</Link>
                        </li>
                    )
                }) : null}
            </ul>
           <AddArtist newArtist={newArtist} show={show} toggleShow={toggleShow}/> 
        </>
    )
}