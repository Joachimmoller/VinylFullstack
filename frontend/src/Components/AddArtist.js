import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function AddArtist(props) {
    const [name, setName] = useState("");
    const [country, setCountry] = useState("");
    const [img, setImg] = useState("");
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button onClick={handleShow} 
                    className="block mx-auto m-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                + Add Artist
            </button>
            
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
                
                <Modal.Header closeButton>
                    <Modal.Title>Add Artist</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        setName("");
                        setCountry("");
                        setImg("");
                        console.log("hello from addArtist");
                        props.newArtist(name, country, img);
                    }} 
                        id="addmodal" 
                          className="w-full max-w-sm">
                        
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                                       htmlFor="name">
                                    Full Name
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                                       id="name" 
                                       placeholder="John Doe"
                                       type="text" 
                                       value={name}
                                       onChange={(e) => {
                                             setName(e.target.value);
                                        }}
                                />
                            </div>
                        </div>
                        
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                                       htmlFor="country">
                                    Country
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                                       id="country" 
                                       placeholder="Bank Teller"
                                       type="text" 
                                       value={country}
                                       onChange={(e) => {
                                                setCountry(e.target.value);
                                            }
                                       }
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
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                       id="img"
                                       placeholder="https://google.com"
                                       type="text"
                                       value={img}
                                       onChange={(e) => {
                                           setImg(e.target.value);
                                       }
                                       }
                                />
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button 
                        className="bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded" 
                        onClick={handleClose}>
                        Close
                    </button>
                    <button
                        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" 
                        onClick={handleClose}
                        form="addmodal">
                        Add
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddArtist;