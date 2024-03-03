import React, { useState } from 'react';
//import { AccessLoc } from "../Interfaces/accessloc";
import accessLocsAll from "../data/AllAccessLocs.json";
import styled from 'styled-components'; //npm install styled-components

// const FilterComponent = () => {
//   const [filterTypes, setFilterTypes] = useState<string[]>([]);
//   const [filterTags, setFilterTags] = useState<string[]>([]);

//   const handleTypeChange = (type: string) => {
//     const newFilterTypes = filterTypes.includes(type)
//       ? filterTypes.filter(t => t !== type) // Remove the type if it's already included
//       : [...filterTypes, type]; // Add the type if it's not included
//     setFilterTypes(newFilterTypes);
//   };

//   const handleTagChange = (tag: string) => { // Correct parameter type to string
//     const newFilterTags = filterTags.includes(tag)
//       ? filterTags.filter(t => t !== tag) // Remove the tag if it's already included
//       : [...filterTags, tag]; // Add the tag if it's not included
//     setFilterTags(newFilterTags);
//   };
//   let filteredLocs = accessLocsAll;

//   if (filterTypes.length) {
//     filteredLocs = filteredLocs.filter(loc => filterTypes.includes(loc.type));
//   }

//   if (filterTags.length) {
//     filteredLocs = filteredLocs.filter(loc => loc.tags.some(tag => filterTags.includes(tag)));
//   }

//   return (
//     <div>
//       <h3>Filter by Type</h3>
//       <div>
//         <input type="checkbox" id="ramp" onChange={() => handleTypeChange('ramp')} />
//         <label htmlFor="ramp">Ramp</label>
//       </div>
//       <div>
//         <input type="checkbox" id="elevator" onChange={() => handleTypeChange('elevator')} />
//         <label htmlFor="elevator">Elevator</label>
//       </div>
//       <div>
//         <input type="checkbox" id="bathroom" onChange={() => handleTypeChange('bathroom')} />
//         <label htmlFor="bathroom">Bathroom</label>
//       </div>
//       <div>
//         <input type="checkbox" id="bus stop" onChange={() => handleTypeChange('bus stop')} />
//         <label htmlFor="bus stop">Bus Stop</label>
//       </div>

//       <h3>Filter by Tag</h3>
//       <div>
//         <input type="checkbox" id="wheelchair_acc" onChange={() => handleTagChange('wheelchair_acc')} />
//         <label htmlFor="wheelchair_acc">Wheelchair Accessible</label>
//       </div>
      // <div>
      //   <input type="checkbox" id="gender_inc" onChange={() => handleTagChange('gender_inc')} />
      //   <label htmlFor="gender_inc">Gender Inclusive</label>
      // </div>
      // <div>
      //   <input type="checkbox" id="transportation" onChange={() => handleTagChange('transportation')} />
      //   <label htmlFor="gender_inc">Transportation</label>
      // </div>

//       <h3>Filtered Results</h3>
//       {filteredLocs.map(loc => (
//         <div key={loc.name} className="card" style={{margin: '10px', padding: '10px'}}>
//           <h5 className="card-title">{loc.name}</h5>
//           <p className="card-text">{loc.descr}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FilterComponent;


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
          </Card>
        ))}
      </CardsContainer>
    </Container>
  );
};

export default FilterComponent;
