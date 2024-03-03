import React, { useState } from 'react';
//import { AccessLoc } from "../Interfaces/accessloc";
import accessLocsAll from "../data/AllAccessLocs.json";
import styled from 'styled-components'; //npm install styled-components
import { AccessLoc } from '../Interfaces/accessloc';

const Container = styled.div`
  margin: 10px;
`;

const FilterTitle = styled.div`
  margin: 10px
`;

const FilterOptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

const Card = styled.div`
  background-color: papayawhip;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  width: 20 px
  margin: 10px;
  padding: 20px;
  border-radius: 20px;
  transition: box-shadow 0.3s ease;
  `;

  const EditButton = styled.button`
    $position: absolute; /* Position the button relative to the card */
    top: 10px; /* Adjust the top position */
    right: 10px; /* Adjust the right position */
    padding: 5px 10px; /* Add padding to the button */
    background-color: rgba(0, 0, 0, 0.5); /* Set the background color */
    color: white; /* Set the text color */
    border: none; /* Remove border */
    border-radius: 5px; /* Add border radius */
    cursor: pointer; /* Change cursor to pointer on hover */
    opacity: 0; /* Initially hide the button */
    transition: opacity 0.3s ease; /* Add a smooth transition for opacity */
  
    /* Show the button when the card is hovered over */
    ${Card}:hover & {
      opacity: 1;
    }
  `;

const CardsContainer = styled.div`
  display: flex;
  width: 200 px
  height: 100 px
  flex-wrap: wrap;
  gap: 20px; 
  justify-content: center; 
`;

const CheckboxContainer = styled.div`
  margin: 10px 0;
`;

const Title = styled.h3`
  color: #333;
`;

const Label = styled.label`
  margin-left: 10px;
`;


const FilterComponent = () => {
  const [filterTypes, setFilterTypes] = useState<string[]>([]);
  const [filterTags, setFilterTags] = useState<string[]>([]);

  const [editLocs, setEditLocs] = useState<string[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [newDescription, setNewDescription] = useState<string>('');

  const handleTypeChange = (type: string) => {
    const newFilterTypes = filterTypes.includes(type)
      ? filterTypes.filter(t => t !== type)
      : [...filterTypes, type];
    setFilterTypes(newFilterTypes);
  };

  const handleTagChange = (tag: string) => {
    const newFilterTags = filterTags.includes(tag)
      ? filterTags.filter(t => t !== tag)
      : [...filterTags, tag];
    setFilterTags(newFilterTags);
  };

  let filteredLocs = accessLocsAll.filter(loc => 
    (filterTypes.length === 0 || filterTypes.includes(loc.type)) &&
    (filterTags.length === 0 || loc.tags.some(tag => filterTags.includes(tag)))
  );

  const handleEdit = (name: string) => {
      // Finding the accessloc object from the name
      const findObj: AccessLoc | undefined = accessLocsAll.find((al: AccessLoc) => al.name === name);

      if (findObj) {
          // Prompt user to enter new description
          const description = prompt(`Enter new description for ${name}:`, findObj.descr);
          if (description !== null) {
              // Update the description of the accessloc object
              findObj.descr = description;
              // Update the state with the edited accessloc object
              setEditLocs([...editLocs, findObj.name]);
              // Update the new description state
              setNewDescription('');
          }
      } else {
          console.log(`Access location with name ${name} not found.`);
      }
  };

  return (
    <Container>
      <FilterTitle>
        <Title>Filter by Type</Title>
        <FilterOptionsContainer>
          <CheckboxContainer>
            <input type="checkbox" id="ramp" onChange={() => handleTypeChange('ramp')} />
            <Label htmlFor="ramp">Ramp</Label>
          </CheckboxContainer>
          <CheckboxContainer>
            <input type="checkbox" id="elevator" onChange={() => handleTypeChange('elevator')} />
            <Label htmlFor="elevator">Elevator</Label>
          </CheckboxContainer>
          <CheckboxContainer>
            <input type="checkbox" id="bathroom" onChange={() => handleTypeChange('bathroom')} />
            <Label htmlFor="bathroom">Bathroom</Label>
          </CheckboxContainer>
          <CheckboxContainer>
            <input type="checkbox" id="bus stop" onChange={() => handleTypeChange('bus stop')} />
            <Label htmlFor="bus stop">Bus Stop</Label>
          </CheckboxContainer>
          </FilterOptionsContainer>
      </FilterTitle>

      <FilterTitle>
        <Title>Filter by Tag</Title>
        {/* Filter by Tag */}
        <FilterOptionsContainer>
          <CheckboxContainer>
            <input type="checkbox" id="wheelchair_acc" onChange={() => handleTagChange('wheelchair_acc')} />
            <Label htmlFor="wheelchair_acc">Wheelchair Accessible</Label>
          </CheckboxContainer>
          <CheckboxContainer>
            <input type="checkbox" id="gender_inclusive" onChange={() => handleTagChange('gender_inclusive')} />
            <Label htmlFor="gender_inclusive">Gender Inclusive</Label>
            </CheckboxContainer>
          <CheckboxContainer>
            <input type="checkbox" id="transportation" onChange={() => handleTagChange('transportation')} />
            <Label htmlFor="gender_inc">Transportation</Label>
            </CheckboxContainer>
        </FilterOptionsContainer>
      </FilterTitle>

      <Title>Filtered Results</Title>
      <CardsContainer>
        {filteredLocs.map(loc => (
          <Card key={loc.name}>
            <h5>{loc.name}</h5>
            <p>{loc.descr}</p>
            <EditButton onClick = {() => handleEdit(loc.name)}>Edit</EditButton>
          </Card>
        ))}
      </CardsContainer>
    </Container>
  );
};

export default FilterComponent;
