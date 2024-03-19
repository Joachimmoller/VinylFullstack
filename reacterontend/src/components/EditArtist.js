import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditArtist(props) {
    const [name ,  setName] = useState(props.name);
    const [genre ,  setGenre] = useState(props.genre);

    const [show ,  setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button
                onClick={handleShow}
                className="px-4 py-1 text-sm text-black-600 font-semibold rounded-full border border-blue-700 hover:text-white hover:bg-blue-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
                Update Artist
            </button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update Artist</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    TODO: Create fetch request to update artist
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        console.log("Update Artist from editArtist");
                        console.log(props.id, name, genre);
                        props.updateArtist(props.id, name, genre);
                        handleClose();
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
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                    id="name" 
                                    type="text" 
                                    value={name}
                                    onChange={(e) => {setName(e.target.value)}}
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
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                    id="genre" 
                                    type="text" 
                                    value={genre}
                                    onChange={(e) => {setGenre(e.target.value)}}
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
                            form="editmodal"
                    >
                        Update
                    </button>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditArtist;