import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddArtist(props) {
    const [name ,  setName] = useState('');
    const [genre ,  setGenre] = useState('');
    const [formed ,  setFormed] = useState('');
    const [img ,  setImg] = useState('');

    const [show ,  setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button
                onClick={handleShow}
                className="block mx-auto m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                + Add Artist
            </button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Artist</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    TODO: Create fetch request to add artist
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        setName("");
                        setGenre("");
                        setFormed("");
                        setImg("");
                        console.log("Update Artist from editArtist");
                        console.log(props.id, name, genre);
                        props.newArtist(name, genre);
                    }}
                          id="editmodal" className="w-full max-w-sm">
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                       htmlFor="inline-full-name">
                                    Artist Name
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                    id="name"
                                    placeholder="Metallica"
                                    type="text"
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value)
                                    }}
                                />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                       htmlFor="name">
                                    Genre
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                    id="genre"
                                    placeholder="Rock"
                                    type="text"
                                    value={genre}
                                    onChange={(e) => {
                                        setGenre(e.target.value)
                                    }}
                                />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                       htmlFor="formed">
                                    Year Formed
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                    id="formed"
                                    placeholder={"26.07.1983"}
                                    type="text"
                                    onChange={(e) => {
                                        setFormed(e.target.value)
                                    }}
                                />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                       htmlFor="img">
                                    Image URL
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                    id="img"
                                    placeholder={"https://google.com"}
                                    type="text"
                                    onChange={(e) => {
                                        setImg(e.target.value)
                                    }}
                                />
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button className="bg-slate-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={handleClose}
                    >
                        Close
                    </button>

                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={handleClose}
                            form="editmodal"
                            
                    >
                        Add
                    </button>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddArtist;
