import { useState, useEffect } from 'react'
import axious from 'axios'
export const Routing = () => {

    const [locations, setLocations] = useState(null)

    useEffect(() => {
      axious.get("http://localhost:4000/api/locations")
      .then((locations) => setLocations(locations))
      .catch((err) => console.log(err))
    
  }, [])

  return (
    <div>
      <h1>Locations</h1>
      {locations && (
        <ul> 
          {locations.data.map((location) => (
            <li key={location._name}>
              {location.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}