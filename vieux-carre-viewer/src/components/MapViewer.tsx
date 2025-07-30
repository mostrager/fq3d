import { MapContainer, TileLayer } from "react-leaflet";

export default function MapViewer({ center=[29.9584,-90.0644], zoom=16 }) {
  return (
    <MapContainer center={center} zoom={zoom} style={{height:"100%",width:"100%"}}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OSM contributors" />
    </MapContainer>
  );
}
