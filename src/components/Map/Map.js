import React from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import Head from "next/head";
import Script from "next/script";

export default function WeatherMap() {
	const latitude = 37.7749;
	const longitude = -122.4194;
	const position = [latitude, longitude];

	const markerIcon = new L.Icon({
		iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
		iconRetinaUrl:
			"https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
		iconSize: [25, 41],
		iconAnchor: [12, 41],
		popupAnchor: [1, -34],
		shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
		shadowSize: [41, 41],
	});

	return (
		<>
			<Head>
				<link
					rel="stylesheet"
					href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
					integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
					crossorigin=""
				/>
			</Head>
			<Script
				src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
				integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
				crossorigin=""
			></Script>
			<MapContainer
				center={position}
				zoom={13}
				style={{ width: 400, height: 500, margin: "0 auto", borderRadius: 10 }}
				key={`${latitude}-${longitude}`}
			>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution="Map data © OpenStreetMap contributors"
				/>
				<Marker position={position} icon={markerIcon} />
			</MapContainer>
		</>
	);
}
