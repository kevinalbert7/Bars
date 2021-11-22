import React from "react"
import styled from "styled-components"
import Marker from "./Marker"
import { useContext } from "react"
import { MapContext } from "../contexts/Map"

import GoogleMapReact from "google-map-react"


const MapDiv = styled.div`
    height: 100vh;
    width: 100%
`

const Map = () => {
    const { location, bars } = useContext(MapContext)
    if (!location) {
        return <p>Chargement en cours...</p>
    }
    console.log("location:", location)
    return (
        <MapDiv>
            <GoogleMapReact
                bootstrapURLKey={{ key:"" }}
                defaultCenter={location}
                defaultZoom={11}
            >
            <Marker
                // lat={location.lat}
                // lng={location.lng}
                // bar={bars.json}
            />
            {bars.map( element =>
            <Marker
                key={element.id}
                name={element.name}
                lat={element.latitude}
                lng={element.longitude}  
            />  
            )}
            </GoogleMapReact>
        </MapDiv>
        )
}

export default Map