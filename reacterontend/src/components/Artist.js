import UpdateArtist from "./UpdateArtist";
import {useEffect, useState} from "react";

const CLIENT_ID = "60188c43a077482d963c58f7ab21fd89";
const CLIENT_SECRET = "8ebeb631c0d442f0bb9cb71c0905d8e9";

function Artist(props) {
    
    const [accessToken, setAccessToken] = useState("");
    const [imgUrl, setImgUrl] = useState("");

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
        console.log("Searching for " + searchInput);

        // Get request using search to get artist ID
        var searchParams = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + accessToken
            }
        }

        let returnedArtistImg = await fetch("https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist", searchParams)
            .then(response => response.json())
            .then(data => setImgUrl(data.artists.items[0].images[2].url)
            );
    }
        search(props.name);
        return (
            <div
                className="border-1 border-yellow-300 min-w-[350px] max-w-[350px] m-2 py-8 px-8 max-w-sm bg-[#28241D] rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                <img
                    className="object-cover rounded-full border-yellow-300 h-[100px] w-[100px] border-2 block mx-auto h-24 sm:mx-0 sm:shrink-0"
                    src={imgUrl} alt={props.name}
                />
                <div className="text-center space-y-2 sm:text-left">
                    <div className="space-y-0.5">
                        <p className="text-lg text-white font-semibold">
                            {props.name}
                        </p>
                        <p className="text-slate-500 font-medium">
                            {props.genre}
                        </p>
                    </div>
                    <UpdateArtist id={props.id} name={props.name} genre={props.genre}
                                  updateArtist={props.updateArtist}/>
                </div>
            </div>
        );
    
}

export default Artist;