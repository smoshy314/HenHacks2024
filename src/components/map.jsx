import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import './map.css';
import locData from '../data/AllAccessLocs.json';
import Form from 'react-bootstrap/Form';


export default function Map() {
    const mapContainer = useRef(null);
    const locMap = useRef(null);
    const UDMapCenter = { lng: -75.751, lat: 39.678 }; 
    const [zoom, setZoom] = useState(16);
    maptilersdk.config.apiKey = 'PlaceHolderKey';

    useEffect(() => {
        if (locMap.current) return; // stops map from intializing more than once
      
        locMap.current = new maptilersdk.Map({
          container: mapContainer.current,
          style: maptilersdk.MapStyle.BASIC,
          center: [UDMapCenter.lng, UDMapCenter.lat],
          zoom: zoom
        });
        
        locData.map((loc) => {
          let color;
          switch (loc.type) {
            case 'ramp':
              color = '#EFCB68';
              break;
            case 'bathroom':
              color = '#4B4A67';
              break;
            case 'elevator':
              color = '#B36A5E';
              break;
            case 'bus stop':
              color = '#68A891';
              break;
            default:
              color = '#FF0000';
          }

          new maptilersdk.Marker({color: color})
            .setLngLat([loc.coords[1], loc.coords[0]])
            .setPopup(new maptilersdk.Popup().setHTML(`<h3>${loc.name}</h3><p>${loc.descr}</p>`))
            .addTo(locMap.current);
          return null;
        });
      }, [UDMapCenter.lng, UDMapCenter.lat, zoom]); 

      return (
          <div className="map-wrap">
            <div ref={mapContainer} className="map" />
          </div>
          
      );
}