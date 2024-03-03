import React, { useState } from 'react';
import { AccessLoc } from "../Interfaces/accessloc";
import accessLocsAll from "../data/AllAccessLocs.json";

// const FilterComponent = () => {
//   const [filterType, setFilterType] = useState('');
//   const [filterTag, setFilterTag] = useState('');

//   let filteredLocs: AccessLoc[] = accessLocsAll;

//   if (filterType) {
//     filteredLocs = filteredLocs.filter(loc => loc.type === filterType);
//   }

//   if (filterTag) {
//     filteredLocs = filteredLocs.filter(loc => loc.tags.includes(filterTag));
//   }

//   return (
//     <div>
//       <div className="mb-3">
//         <label>Type Filter</label>
//         <select className="form-select" onChange={(e) => setFilterType(e.target.value)}>
//           <option value="">Select Type</option>
//           <option value="ramp">Ramp</option>
//           <option value="bathroom">Bathroom</option>
//           <option value="bus stop">Bus Stop</option>
//           <option value="elevator">Elevator</option>
//         </select>

//         <label>Tag Filter</label>
//         <select className="form-select" onChange={(e) => setFilterTag(e.target.value)}>
//           <option value="">Select Tag</option>
//           <option value="wheelchair_acc">Wheelchair Accessible</option>
//           <option value="gender_inclusive">Gender Inclusive</option>
//           <option value="transportation">Transportation</option>
//         </select>
//       </div>

//       <div className="row">
//         {filteredLocs.map((loc, index) => (
//           <div className="col-sm-4" key={index}>
//             <div className="card">
//               <div className="card-body">
//                 <h5 className="card-title">{loc.name}</h5>
//                 <h6 className="card-subtitle mb-2 text-muted">{loc.location}</h6>
//                 <p className="card-text">{loc.descr}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FilterComponent;


const FilterComponent = () => {
  const [filterTypes, setFilterTypes] = useState<string[]>([]);
  const [filterTags, setFilterTags] = useState<string[]>([]);

  const handleTypeChange = (type: string) => {
    const newFilterTypes = filterTypes.includes(type)
      ? filterTypes.filter(t => t !== type) // Remove the type if it's already included
      : [...filterTypes, type]; // Add the type if it's not included
    setFilterTypes(newFilterTypes);
  };

  const handleTagChange = (tag: string) => { // Correct parameter type to string
    const newFilterTags = filterTags.includes(tag)
      ? filterTags.filter(t => t !== tag) // Remove the tag if it's already included
      : [...filterTags, tag]; // Add the tag if it's not included
    setFilterTags(newFilterTags);
  };
  let filteredLocs = accessLocsAll;

  if (filterTypes.length) {
    filteredLocs = filteredLocs.filter(loc => filterTypes.includes(loc.type));
  }

  if (filterTags.length) {
    filteredLocs = filteredLocs.filter(loc => loc.tags.some(tag => filterTags.includes(tag)));
  }

  return (
    <div>
      <h3>Filter by Type</h3>
      {/* Example types - ensure these are dynamically generated based on your data */}
      <div>
        <input type="checkbox" id="ramp" onChange={() => handleTypeChange('ramp')} />
        <label htmlFor="ramp">Ramp</label>
      </div>
      <div>
        <input type="checkbox" id="elevator" onChange={() => handleTypeChange('elevator')} />
        <label htmlFor="elevator">Elevator</label>
      </div>
      <div>
        <input type="checkbox" id="bathroom" onChange={() => handleTypeChange('bathroom')} />
        <label htmlFor="bathroom">Bathroom</label>
      </div>
      <div>
        <input type="checkbox" id="bus stop" onChange={() => handleTypeChange('bus stop')} />
        <label htmlFor="bus stop">Bus Stop</label>
      </div>

      <h3>Filter by Tag</h3>
      <div>
        <input type="checkbox" id="wheelchair_acc" onChange={() => handleTagChange('wheelchair_acc')} />
        <label htmlFor="wheelchair_acc">Wheelchair Accessible</label>
      </div>
      <div>
        <input type="checkbox" id="gender_inc" onChange={() => handleTagChange('gender_inc')} />
        <label htmlFor="gender_inc">Gender Inclusive</label>
      </div>
      <div>
        <input type="checkbox" id="transportation" onChange={() => handleTagChange('transportation')} />
        <label htmlFor="gender_inc">Transportation</label>
      </div>

      <h3>Filtered Results</h3>
      {filteredLocs.map(loc => (
        <div key={loc.name} className="card" style={{margin: '10px', padding: '10px'}}>
          <h5 className="card-title">{loc.name}</h5>
          <p className="card-text">{loc.descr}</p>
        </div>
      ))}
    </div>
  );
};

export default FilterComponent;
