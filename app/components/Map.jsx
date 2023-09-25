"use client";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import styles from "../styles/map.module.css";

export default function Map({ipInfo}) {
  return (
    <MapContainer
      center={[ipInfo.location.lat, ipInfo.location.lng]}
      zoom={13}
      scrollWheelZoom={false}
      className={styles.map}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[ipInfo.location.lat, ipInfo.location.lng]} />
    </MapContainer>
  );
}
