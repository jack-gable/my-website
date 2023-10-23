"use client";
import React from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Circle } from "react-leaflet";
import Head from "next/head";
import Script from "next/script";

function Map() {
	const latitude = 37.7749;
	const longitude = -122.4194;
	const position = [latitude, longitude];
	const circleCenter = [latitude, longitude];
	const circleRadius = 14000;

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
				zoom={10}
				style={{
					width: 300,
					height: 400,
					margin: "0 auto",
					borderRadius: 10,
					backgroundColor: "var(--color-gray-700)",
				}}
				key={`${latitude}-${longitude}`}
				dragging={false}
				touchZoom={false}
				zoomControl={false}
			>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution="Map data © OpenStreetMap contributors"
				/>
				<Marker position={position} icon={markerIcon} />
				<Circle center={circleCenter} radius={circleRadius} color="blue" />
			</MapContainer>
		</>
	);
}

export default Map;
