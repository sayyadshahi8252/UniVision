import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './heatmapn.module.css';

const studentData = 
[
  { lat: 28.6139, lon: 77.2090, country: "India", students: 1200 },
  { lat: 40.7128, lon: -74.0060, country: "USA", students: 4500 },
  { lat: 51.5074, lon: -0.1278, country: "UK", students: 3000 },
  { lat: 35.6895, lon: 139.6917, country: "Japan", students: 180 },
  { lat: -33.8688, lon: 151.2093, country: "Australia", students: 250 },
  { lat: 55.7558, lon: 37.6173, country: "Russia", students: 400 },
  { lat: -23.5505, lon: -46.6333, country: "Brazil", students: 600 },
  { lat: 48.8566, lon: 2.3522, country: "France", students: 1000 },
  { lat: 52.5200, lon: 13.4050, country: "Germany", students: 1500 },
  { lat: 31.2304, lon: 121.4737, country: "China", students: 3200 },
  { lat: 30.0444, lon: 31.2357, country: "Egypt", students: 700 },
  { lat: 6.5244, lon: 3.3792, country: "Nigeria", students: 850 },
  { lat: 43.651070, lon: -79.347015, country: "Canada", students: 2100 },
  { lat: 1.3521, lon: 103.8198, country: "Singapore", students: 300 },
  { lat: 19.4326, lon: -99.1332, country: "Mexico", students: 550 }
];

export default function Heatmap() {
  return (
    <div className={styles.heatmapContainer} id='heatmap'>
      <h2 className={styles.heading}>🌍 Students Around the World <span>(in K)</span></h2>

      <MapContainer
        center={[20, 0]}
        zoom={2}
        scrollWheelZoom={false}
        zoomControl={false}
        dragging={false}
        doubleClickZoom={false}
        touchZoom={false}
        className={styles.map}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />

        {studentData.map((data, index) => (
          <CircleMarker
            key={index}
            center={[data.lat, data.lon]}
            radius={Math.log(data.students + 1) * 0.8}
            pathOptions={{
              color: '#0077ff',
              fillColor: '#0077ff',
              fillOpacity: 0.6,
            }}
          >
            <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent={false}>
              <span>{data.country}: {(data.students / 1000).toFixed(1)}K students</span>
            </Tooltip>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}
