import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NotFound from '../Components/NotFound';

import { baseUrl } from '../shared';
export default function Artist() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [artist, setArtist] = useState();
    const [tempArtist, setTempArtist] = useState();
    const [notFound, setNotFound] = useState();
    const [changed, setChanged] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        if (!artist) return;
        if (!artist) return;
        let equal = true;
        if (artist.name !== tempArtist.name) equal = false;
        if (artist.country !== tempArtist.country) equal = false;
        if (artist.formed !== tempArtist.formed) equal = false;
        if (equal) setChanged(false);
    });
    useEffect(() => {
        const url = baseUrl + 'api/artistComponent/' + id;
        fetch(url)
            .then((response) => {
                if (response.status === 404) {
                    //render a 404 component in this page
                    setNotFound(true);
                }
                if (!response.ok) {
                    throw new Error('Something went wrong, try again later');
                }
                return response.json();
            })
            .then((data) => {
                setArtist(data.artist);
                setTempArtist(data.artist);
                setError(undefined);
            })
            .catch((e) => {
                setError(e.message);
            });
    }, []);
    function updateArtist() {
        const url = baseUrl + 'api/artistComponent/' + id;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tempArtist),
        })
            .then((response) => {
                if (!response.ok) throw new Error('something went wrong');
                return response.json();
            })
            .then((data) => {
                setArtist(data.artist);
                setChanged(false);
                setError(undefined);
            })
            .catch((e) => {
                setError(e.message);
            });
    }
    return (
        <>
            {notFound ? <p>The artist with id {id} was not found</p> : null}
            {artist ? (
                <div>
                    <input
                        class="m-2 block px-2"
                        type="text"
                        value={tempArtist.name}
                        onChange={(e) => {
                            setChanged(true);
                            setTempArtist({
                                ...tempArtist,
                                name: e.target.value,
                            });
                        }}
                    />
                    <input
                        class="m-2 block px-2"
                        type="text"
                        value={tempArtist.country}
                        onChange={(e) => {
                            setChanged(true);
                            setTempArtist({
                                ...tempArtist,
                                country: e.target.value,
                            });
                        }}
                    />
                    {changed ? (
                        <>
                            <button
                                className="m-2"
                                onClick={(e) => {
                                    setTempArtist({ ...artist });
                                    setChanged(false);
                                }}
                            >
                                Cancel
                            </button>
                            <button className="m-2" onClick={updateArtist}>
                                Save
                            </button>
                        </>
                    ) : null}
                    <button
                        onClick={(e) => {
                            const url = baseUrl + 'api/artistComponent/' + id;
                            fetch(url, {
                                method: 'DELETE',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                            })
                                .then((response) => {
                                    if (!response.ok) {
                                        throw new Error('Something went wrong');
                                    }
                                    navigate('/artist');
                                })
                                .catch((e) => {
                                    setError(e.message);
                                });
                        }}
                    >
                        Delete
                    </button>
                </div>
            ) : null}
            {error ? <p>{error}</p> : null}
            <br />
            <Link to="/artist">Go back</Link>
        </>
    );
}