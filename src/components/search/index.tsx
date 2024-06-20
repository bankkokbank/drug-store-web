"use client";

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { Button, Input, Spin, Typography } from "antd";
import { useEffect, useState } from "react";
import {
  getDetailMap,
  getMaps,
  getMapsByLocation,
} from "../../services/google-map/google-map.service";
import {
  AimOutlined,
  EnvironmentFilled,
  SearchOutlined,
} from "@ant-design/icons";
import { useRecoilState } from "recoil";
import { addressStage } from "../../app/atom/map";
import { useRouter } from "next/navigation";

const Map = () => {
  const router = useRouter();
  const { Title } = Typography;
  const GOOGLE_MAP_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const mapContainerStyle = {
    width: "auto",
    height: "100vh",
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAP_API_KEY || "",
    libraries: ["places"],
  });
  const [marker, setMarker] = useState<any>(null);
  const [search, setSearch] = useState("");
  const [address, setAddress] = useRecoilState<any>(addressStage);
  const [suggestions, setSuggestions] = useState<any>([]);
  const [zoom, setZoom] = useState<number>(16);

  useEffect(() => {
    handleGetLocation();
  }, [router]);
  const handleSearchChange = async (value: any) => {
    setSearch(value);
    if (value.length > 2) {
      const data = await getMaps(value);
      setSuggestions(data?.predictions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = async (suggestion: any) => {
    const data = await getDetailMap(suggestion?.place_id);

    const location = data?.result?.geometry?.location;
    setZoom(16);
    setMarker({
      lat: location.lat,
      lng: location.lng,
    });
    setAddress(data.result);
    setSuggestions([]);
    setSearch(data?.result?.name);
  };

  const handleGetLocation = async () => {
    if (navigator.geolocation) {
      await navigator.geolocation.getCurrentPosition(async (position) => {
        setMarker({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        const suggestions = await getMapsByLocation(
          position.coords.latitude.toString(),
          position.coords.longitude.toString()
        );

        if (!!suggestions.status && suggestions.status === "OK") {
          setAddress(suggestions?.results[0]);
        }
      });
    }
  };

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";
  if (!marker) return <Spin />;

  return (
    <div className="max-w-lg h-full mx-auto">
      <div className="fixed z-50 max-w-lg w-full h-[50px] bg-[#ffffff]">
        <Title className="!text-[#31b4f0] mt-3 mx-auto text-center" level={4}>
          เลือกที่อยู่ส่งด่วน
        </Title>
      </div>
      <div className="relative">
        <div className="absolute top-16 left-0 right-0 mx-auto px-2 z-10 ">
          <Input.Search
            prefix={<SearchOutlined />}
            value={search}
            onSearch={() => {
              if (suggestions && suggestions.length > 0) {
                handleSuggestionClick(suggestions[0]);
              }
            }}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="ค้นหาที่อยู่จัดส่งสินค้า"
          />
          {suggestions.length > 0 && (
            <ul className="absolute bg-white w-full border border-gray-300 z-10">
              {suggestions.map((suggestion: any) => (
                <li
                  key={suggestion.place_id}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => {
                    handleSuggestionClick(suggestion);
                  }}
                >
                  {suggestion.description}
                </li>
              ))}
            </ul>
          )}
        </div>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          options={{ streetViewControl: false, disableDefaultUI: true }}
          zoom={zoom}
          center={marker}
        >
          {marker && <Marker position={marker} />}
        </GoogleMap>
      </div>
      <div className="fixed bottom-0 z-50 max-w-lg w-full h-[200px] bg-[#ffffff]">
        <div className="flex flex-col mx-2 justify-center">
          <div className="mt-4 p-2 border rounded-xl">
            <Title level={5}>
              ที่อยู่* (ตำบล, อำเภอ, จังหวัด, รหัสไปรษณีย์)
            </Title>
            <div className="flex justify-between h-[60px] p-2 border rounded-xl">
              <div className="flex">
                <EnvironmentFilled
                  width={25}
                  height={25}
                  style={{ color: "#ff3333" }}
                />
                <span className="ml-4 inline-block text-[12px]">
                  {address?.formatted_address?.length > 75
                    ? `${address?.formatted_address?.substring(0, 75)}...`
                    : address?.formatted_address || ""}
                </span>
              </div>
              <AimOutlined
                onClick={() => {
                  handleGetLocation();
                }}
                width={25}
                height={25}
              />
            </div>
          </div>
          <Button
            className={`w-full mt-8 !rounded-xl ${
              !!address ? "!bg-[#31b4f0]" : "!bg-[#EBEBE4]"
            } `}
            onClick={() => {
              if (address) {
                console.log("address", address);
                router.push("/site-list");
              }
            }}
            type="primary"
            disabled={!address}
          >
            ยืนยันตำแหน่ง
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Map;