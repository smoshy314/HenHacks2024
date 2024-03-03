import React, { useState } from 'react';
//import { Button } from 'react-bootstrap';
import Map from '../components/map';
import locData from '../data/AllAccessLocs.json';
import Form from 'react-bootstrap/Form';

interface DisplayMapProps {
    backendSuccess: boolean;
}

export function DisplayMap({backendSuccess}:DisplayMapProps): JSX.Element {
    const [filterCriteria, setFilterCriteria] = useState(["bus stop","elevator","ramp","bathroom"]);
    const [filteredLocData, setFilteredLocData] = useState(!backendSuccess ? locData : []);

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        
        if (checked) {
            setFilterCriteria((prevFilterCriteria) => [...prevFilterCriteria, value]);
        } else {
            setFilterCriteria((prevFilterCriteria) => prevFilterCriteria.filter((criteria) => criteria !== value));
        }
    };

    return (
        <div className="DisplayMap">
            <Map locData={filteredLocData}
                 setLocData={setFilteredLocData}
                 filterCriteria={filterCriteria}
            ></Map>
                <Form>
                    <Form.Group controlId="filterCriteria">
                        <Form.Label>Filter Criteria</Form.Label>
                        <div>
                            <Form.Check
                                type="checkbox"
                                id="busStopCheckbox"
                                label="Bus Stop"
                                value="bus stop"
                                checked={filterCriteria.includes("bus stop")}
                                onChange={handleFilterChange}
                            />
                            <Form.Check
                                type="checkbox"
                                id="elevatorCheckbox"
                                label="Elevator"
                                value="elevator"
                                checked={filterCriteria.includes("elevator")}
                                onChange={handleFilterChange}
                            />
                            <Form.Check
                                type="checkbox"
                                id="rampCheckbox"
                                label="Ramp"
                                value="ramp"
                                checked={filterCriteria.includes("ramp")}
                                onChange={handleFilterChange}
                            />
                            <Form.Check
                                type="checkbox"
                                id="bathroomCheckbox"
                                label="Bathroom"
                                value="bathroom"
                                checked={filterCriteria.includes("bathroom")}
                                onChange={handleFilterChange}
                            />
                        </div>
                    </Form.Group>
                </Form>
            </div>
                );
            }
