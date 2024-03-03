import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

interface AddLocationModalProps {
    backendSuccess: boolean;
}
export function AddLocationModal({backendSuccess}:AddLocationModalProps) {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [tags, setTags] = useState(['']);
    const [type, setType] = useState('');
    const [desc, setDesc] = useState('');
    const [coords, setCoords] = useState({lat: 0, long: 0});
    const [showModal, setShowModal] = useState(false); // Add state for modal visibility
    console.log(backendSuccess);
    

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };


  return (
    <div>
    <Button onClick={openModal}>Add Location</Button>
    {showModal && <div>
            <div className={`modal ${showModal ? 'show' : ''}`}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <Button type="button" className="close" onClick={closeModal}>
                                <span>&times;</span>
                            </Button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">Name:</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="location">Location:</label>
                                    <input
                                        type="text"
                                        id="location"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="tags">Tags:</label>
                                    <input
                                        type="text"
                                        id="tags"
                                        value={tags.join(',')}
                                        onChange={(e) => setTags(e.target.value.split(','))}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="type">Type:</label>
                                    <input
                                        type="text"
                                        id="type"
                                        value={type}
                                        onChange={(e) => setType(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="desc">Description:</label>
                                    <textarea
                                        id="desc"
                                        value={desc}
                                        onChange={(e) => setDesc(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lat">Latitude:</label>
                                    <input
                                        type="number"
                                        id="lat"
                                        value={coords.lat}
                                        onChange={(e) => setCoords({ ...coords, lat: parseFloat(e.target.value) })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="long">Longitude:</label>
                                    <input
                                        type="number"
                                        id="long"
                                        value={coords.long}
                                        onChange={(e) => setCoords({ ...coords, long: parseFloat(e.target.value) })}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={closeModal}>
                                Save
                            </button>
                            <button type="button" className="btn btn-secondary" onClick={closeModal}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
    </div>
  )
}