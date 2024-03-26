import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddAlbum(props) {
    const [title ,  setTitle] = useState('');
    const [genre ,  setGenre] = useState('');
    const [band ,  setBand] = useState('');
    const [img ,  setImg] = useState('');

    const [show ,  setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button
                onClick={handleShow}
                className="block mx-auto m-2 bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded">
                + Add Album
            </button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Album</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    TODO: Create fetch request to add album
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        setTitle("");
                        setGenre("");
                        setBand("");
                        setImg("");
                        console.log("Update Album from editAlbum");
                        console.log(props.id, title, genre);
                        props.newAlbum(title, genre);
                    }}
                          id="editmodal" className="w-full max-w-sm">
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                       htmlFor="inline-full-name">
                                    Album Title
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                    id="title"
                                    placeholder="Metallica"
                                    type="text"
                                    value={title}
                                    onChange={(e) => {
                                        setTitle(e.target.value)
                                    }}
                                />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                       htmlFor="title">
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
                                       htmlFor="band">
                                    Band
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                    id="band"
                                    placeholder={"26.07.1983"}
                                    type="text"
                                    onChange={(e) => {
                                        setBand(e.target.value)
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

export default AddAlbum;