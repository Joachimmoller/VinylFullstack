import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function UpdateArtist(props) {
    const [name ,  setName] = useState(props.name);
    const [genre ,  setGenre] = useState(props.genre);

    const [show ,  setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button
                onClick={handleShow}
                className="px-4 py-1 text-sm text-white font-semibold rounded-full border hover:bg-yellow-300 hover:text-black hover:border-transparent focus:outline-none focus:ring-1 focus:ring-yellow-300 focus:ring-offset-2">
                Update Artist
            </button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header className="bg-[#181915] justify-center border-yellow-300 border-1">
                    <Modal.Title className="text-white">Update Artist</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-[#28241D] border-yellow-300 border-r border-l text-white">
                    TODO: Create fetch request to update artist
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        console.log("Update Artist from updateArtist");
                        console.log(props.id, name, genre);
                        props.updateArtist(props.id, name, genre);
                        handleClose();
                    }}
                          id="updateartistmodal" className="w-full max-w-sm">
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
                                       htmlFor="inline-full-name">
                                    Artist Name
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-[#28241D] appearance-none border-1 border-yellow-300 rounded w-full py-2 px-3 text-gray-700 leading-tight"
                                    id="name"
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
                                <label className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
                                       htmlFor="name">
                                    Genre
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-[#28241D] appearance-none border-1 border-yellow-300 rounded w-full py-2 px-3 text-gray-700 leading-tight"
                                    id="genre"
                                    type="text"
                                    value={genre}
                                    onChange={(e) => {
                                        setGenre(e.target.value)
                                    }}
                                />
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <div
                    className="bg-[#181915] justify-center border-yellow-300 border-l border-b border-r rounded-bottom">
                    <Modal.Footer>
                        <button className="bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded"
                                onClick={handleClose}
                        >
                            Close
                        </button>

                        <button className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded"
                                form="updateartistmodal"
                        >
                            Update
                        </button>

                    </Modal.Footer>
                    </div>
            </Modal>
        </>
);
}

export default UpdateArtist;