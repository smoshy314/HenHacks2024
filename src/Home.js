import { useEffect, useState } from "react";

const Home = () => {
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
        <div className="home">
            <div className="locations">
                {locations && locations.map((location) => (
                    <p>{location.name}</p>
                ))}
            </div>
        </div>
    )
}