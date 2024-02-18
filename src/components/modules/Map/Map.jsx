import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
function Map() {
       const position = [35.784705, 51.444192]
  return (
       <MapContainer center={[35.784705, 51.444192]} zoom={15} scrollWheelZoom={true}>
       <TileLayer
         attribution='<a href="https://www.sajjad.com">sajjad</a>'
         url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
       />
       <Marker position={[35.784705, 51.444192]} >
         
       </Marker>
     </MapContainer>

  )
}

export default Map