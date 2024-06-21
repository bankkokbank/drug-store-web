import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { Spin, message } from "antd";
import React from "react";

interface SiteCardProps {
  setMarker: any;
  marker: any;
  mapStyle: any;
  zoom: number;
  onClick: any;
}

const GoogleMapComponent: React.FC<SiteCardProps> = ({
  marker,
  mapStyle,
  zoom,
  onClick,
}) => {
  const GOOGLE_MAP_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const [messageApi, contextHolder] = message.useMessage();

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAP_API_KEY || "",
    libraries: ["places"],
  });

  if (loadError) {
    messageApi.error("Error loading maps");
  }

  return (
    <>
      {contextHolder}
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={mapStyle}
          options={{ streetViewControl: false, disableDefaultUI: true }}
          zoom={zoom}
          center={marker}
          onClick={onClick}
        >
          {marker && <Marker position={marker} />}
        </GoogleMap>
      )}
    </>
  );
};
export default GoogleMapComponent;
