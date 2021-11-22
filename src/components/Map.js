import React from "react"
import styled from "styled-components"
import Marker from "./Marker"
import GoogleMapReact from "google-map-react"

import { useContext } from "react"
import { MapContext } from "../contexts/Map"

const MapDiv = styled.div`
    height: 100vh;
    width: 100%
`

// Marker.addListener('mouseover', () => infoWindow.open(map, marker))
// Marker.addListener('mouseout', () => infoWindow.close())


const Map = () => {
    const { location, bars } = useContext(MapContext)
    
    if (!location) {
        return <p>Chargement en cours...</p>
    }
    // console.log("location:", location)
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