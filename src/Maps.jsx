import { useState, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import osm from './providers'
import 'leaflet/dist/leaflet.css';

export default function Maps() {
    const [position, setPosition] = useState({ lat: 51.462245, long: -112.709979 })
    const [zoom, setZoom] = useState(13)
    const mapRef = useRef()

    return (
        <div id='container-1'>
            <MapContainer center={[51.462245, -112.709979]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <Marker position={[51.462245, -112.709979]}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}