import { useState, useEffect } from 'react'
export const Routing = () => {

    const [locations, setLocations] = useState(null)

    useEffect(() => {
    const fetchLocations = async () => {
      const response = await fetch('/api/locations')
      const json = await response.json()

      if (response.ok) {
        setLocations(json)
      }
    }

    fetchLocations()
  }, [])

  return (
    <div>
      <h1>Locations</h1>
      {locations && (
        <ul>
          {locations.map((location) => (
            <li key={location._name}>
              {location._name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}