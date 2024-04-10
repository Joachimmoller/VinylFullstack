import React, {useEffect, useState} from "react";

const CLIENT_ID = "60188c43a077482d963c58f7ab21fd89";
const CLIENT_SECRET = "8ebeb631c0d442f0bb9cb71c0905d8e9";

function ArtistImgFetch(props) {
    const [searchInput, setSearchInput] = useState("");
    const [accessToken, setAccessToken] = useState("");
    
    useEffect(() => {
        var authParams = {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "grant_type=client_credentials&client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET
        }
        fetch("https://accounts.spotify.com/api/token", authParams)
            .then(response => response.json())
            .then(data => setAccessToken(data.access_token))
    }, [])

    // Search
    async function search(searchInput) {
        console.log("searching for " + searchInput);

        // Get request using search to get artist ID
        var artistParams = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + accessToken
            }
        }

        var artistID = await fetch("https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist", artistParams)
            .then(response => response.json())
            .then(data => { return data.artists.items[0].id });

        var artistImg = await fetch("https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist", artistParams)
            .then(response => response.json())
            .then(data => { return data.artists.items[0].images[2].url });
        
        console.log(artistID);
        console.log(artistImg);
        // Get request using Artist ID to get artist info
        
        // Display artist image

    }
}

export default ArtistImgFetch;