import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { divIcon } from 'leaflet';  
import { renderToString } from 'react-dom/server';
import LocationIcon from '../LocationIcon/LocationIcon';
function Map() {
       const position = [25.18461830530422, 55.26289101001564]

      const customIcon = divIcon({
        className: 'custom-marker-icon',
        html: renderToString(<LocationIcon />),
      })

  return (
       <>
       <div className='w-full h-[30vh] 
        overflow-hidden rounded-lg'>

       <MapContainer center={position} zoom={15} scrollWheelZoom={true} style={{height:'100%',width:'100%'}} >
       <TileLayer
         attribution='<a href="https://www.sajjad.com">sajjad</a>'
         url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
       />
       <Marker position={position} icon={customIcon} >
       <Popup>
         <a href="geo:25.18461830530422, 55.26289101001564">
          Direction
         </a>
        </Popup>
       </Marker>
     </MapContainer>

       </div>
       </>
        
      

  )
}

export default Map
