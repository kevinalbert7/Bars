import React, { createContext, useState, useEffect } from "react"
import barsLocation from '../bars.json'

const MapContext = createContext ({})

const MapContextProvider = props => {
    const [location, setLocation] = useState(null)
    const [bars, setBars] = useState(barsLocation)

    const value = {
        location,
        bars
    }

    useEffect(() => {

        navigator.geolocation.getCurrentPosition(
            position => {
                setLocation ({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                })
                console.log("location.coords: ", position.coords)
            }, (error) => {
                console.error("error:", error);
              })
    }, [])

    return (
        <MapContext.Provider value={value}>
            {props.children}
        </MapContext.Provider>
    )
}


export { MapContext, MapContextProvider }