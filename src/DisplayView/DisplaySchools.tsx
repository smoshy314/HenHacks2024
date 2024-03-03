import React from "react";
import { Form } from "react-bootstrap";
import accessAllSchools from "../data/AllSchools.json";
import { School } from "../Interfaces/school";

const DisplaySchools = () => {
    const schoolList: School[] = accessAllSchools.map(
        (aSchool): School => ({
            ...aSchool,
            name: aSchool.name,
            country: aSchool.country
        })
    );

    return (
        <Form style={{ backgroundColor: "#f0f0f0", padding: "20px", borderRadius: "5px" }}>
            <Form.Group controlId="schoolSelect">
                <Form.Label style={{ marginBottom: "10px", color: "#333", fontWeight: "bold"}}>School Database:</Form.Label>
                <Form.Control as="select" style={{ borderColor: "#ccc", borderRadius: "23px" }}>
                    {schoolList.map((school, index) => (
                        <option key={index}>{school.name}</option>
                    ))}
                </Form.Control>
            </Form.Group>
        </Form>
    );
};

export default DisplaySchools;
