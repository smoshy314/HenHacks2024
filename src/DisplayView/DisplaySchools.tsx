import React from "react";
import accessAllSchools from "../data/AllSchools.json";
import { School } from "../Interfaces/school";
import { Dropdown } from "react-bootstrap";

const DisplaySchools = () => {
    const schoolList: School[] = accessAllSchools.map(
        (aSchool): School => ({
            ...aSchool,
            name: aSchool.name,
            country: aSchool.country
        })
    );

    return (
        <Dropdown>
            <Dropdown.Toggle id="dropdown">Schools:</Dropdown.Toggle>
            <Dropdown.Menu>
                {
                    schoolList.map((school, index) => (
                        <Dropdown.Item key={index}>{school.name}</Dropdown.Item>
                    ))
                }
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default DisplaySchools;
