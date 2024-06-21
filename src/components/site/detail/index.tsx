"use client";

import React from "react";
import { LeftOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { storeState } from "../../../app/atom/map";
import { Typography } from "antd";
import SiteCard from "../siteCard";
import GoogleMapComponent from "../../googleMapComponent";
import AddressCard from "../addressCard";

const { Title } = Typography;

const SiteStoreDetail: React.FC = () => {
  const router = useRouter();
  const store: any = useRecoilValue(storeState);
  const mapContainerStyle = {
    width: "auto",
    height: window.innerHeight - 50,
  };

  useEffect(() => {
    if (!store) {
      router.push("/search");
    }
  }, [store]);

  return (
    <>
      {store && (
        <div className="max-w-lg h-full mx-auto">
          <div className="flex justify-between items-center max-w-lg w-full h-[50px] bg-[#ffffff] shadow">
            <LeftOutlined
              onClick={() => {
                router.back();
              }}
              className="ml-4"
              style={{ color: "#31b4f0" }}
            />
            <Title
              className="!text-[#31b4f0] flex-grow !mb-0 text-center "
              level={4}
            >
              {store?.site_des || "รายละเอียดสาขา"}
            </Title>
          </div>
          <div className="relative">
            <GoogleMapComponent
              marker={{
                lat: store?.location?.coordinates[1],
                lng: store?.location?.coordinates[0],
              }}
              mapStyle={mapContainerStyle}
              zoom={16}
              onClick={() => {}}
              draggable={false}
            />
            <div className="w-full absolute top-0">
              <AddressCard store={store} />
            </div>
            <div className="w-full absolute bottom-0">
              <SiteCard site={store} linkout={true} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SiteStoreDetail;
