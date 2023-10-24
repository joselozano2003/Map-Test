import './App.css'
import Maps from './Maps'
import { useState, useRef } from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
// import osm from './providers'
import 'leaflet/dist/leaflet.css'
import "./App.css"

function App() {
  const [position, setPosition] = useState({ lat: 51.462245, long: -112.709979 })
  const [zoom, setZoom] = useState(13)
  const mapRef = useRef()

  return (
    <div id='container'>
      <Maps />
    </div>
  )
}

export default App
