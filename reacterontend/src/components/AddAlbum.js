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
                <Modal.Header className="bg-[#181915] justify-center border-yellow-300 border-1">
                    <Modal.Title className="text-white">Add Album</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-[#28241D] border-yellow-300 border-r border-l text-white">
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
                          id="addalbummodal" className="w-full max-w-sm">
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                       htmlFor="inline-full-name">
                                    Album Title
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-[#28241D] appearance-none border-1 border-yellow-300 rounded w-full py-2 px-3 text-gray-700 leading-tight"
                                    id="title"
                                    placeholder="Master Of Puppets"
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
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                       htmlFor="band">
                                    Band
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-[#28241D] appearance-none border-1 border-yellow-300 rounded w-full py-2 px-3 text-gray-700 leading-tight"
                                    id="band"
                                    placeholder={"Metallica"}
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
                                    className="bg-[#28241D] appearance-none border-1 border-yellow-300 rounded w-full py-2 px-3 text-gray-700 leading-tight"
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
                <div className="bg-[#181915] justify-center border-yellow-300 border-l border-b border-r rounded-bottom">
                    <Modal.Footer>
                        <button className="bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded"
                                onClick={handleClose}
                        >
                            Close
                        </button>

                        <button className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded" 
                                onClick={handleClose}
                                form="editmodal"

                        >
                            Add
                        </button>

                    </Modal.Footer>
                    </div>
            </Modal>
        </>
);
}

export default AddAlbum;