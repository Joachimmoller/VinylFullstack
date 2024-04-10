import { useState } from 'react';
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
                className="block mx-auto m-2 bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded">
                + Add Artist
            </button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header className="bg-[#181915] justify-center border-yellow-300 border-1">
                    <Modal.Title className="text-white">Add Artist</Modal.Title>
                </Modal.Header >
                <Modal.Body className="bg-[#28241D] border-yellow-300 border-r border-l text-white">
                    TODO: Create fetch request to add artist
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        setName("");
                        setGenre("");
                        setFormed("");
                        setImg("");
                        console.log("Add Artist from addArtist");
                        console.log(props.id, name, genre);
                        props.newArtist(name, genre);
                    }}
                          id="addartistmodal" className="w-full max-w-sm">
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
                                       htmlFor="name">
                                    Artist Name
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-[#28241D] appearance-none border-1 border-yellow-300 rounded w-full py-2 px-3 text-gray-700 leading-tight"
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
                                <label className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
                                       htmlFor="genre">
                                    Genre
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-[#28241D] appearance-none border-1 border-yellow-300 rounded w-full py-2 px-3 text-gray-700 leading-tight"
                                    id="genre"
                                    placeholder="Thrash Metal"
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
                                <label className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
                                       htmlFor="formed">
                                    Year Formed
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-[#28241D] appearance-none border-1 border-yellow-300 rounded w-full py-2 px-3 text-gray-700 leading-tight"
                                    id="formed"
                                    placeholder={"26.07.1983"}
                                    type="text"
                                    onChange={(e) => {
                                        setFormed(e.target.value)
                                    }}
                                />
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <div className="bg-[#181915] justify-center border-yellow-300 border-l border-b border-r rounded-bottom">
                    
                <Modal.Footer >
                    <button className="bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded"
                            onClick={handleClose}
                    >
                        Close
                    </button>

                    <button className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded"
                            onClick={handleClose}
                            form="addartistmodal"
                    >
                        Add
                    </button>
                </Modal.Footer>
                </div>
            </Modal>
        </>
    );
}

export default AddArtist;
