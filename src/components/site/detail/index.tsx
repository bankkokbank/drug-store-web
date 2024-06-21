"use client";

import React from "react";
import { LeftOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { storeState } from "../../../app/atom/map";
import { Typography } from "antd";
import SiteCard from "../siteCard";

const { Title } = Typography;

const SiteStoreDetail: React.FC = () => {
  const router = useRouter();
  const store: any = useRecoilValue(storeState);

  useEffect(() => {
    console.log("store -->", store);
    if (!store) {
      router.push("/search");
    }
  }, [store]);

  return (
    <>
      {store && (
        <div className="max-w-lg h-full mx-auto">
          <div className="flex justify-between items-center max-w-lg w-full h-[50px] bg-[#ffffff] shadow mb-4">
            <LeftOutlined
              onClick={() => [router.push("/search")]}
              className="ml-4"
              style={{ color: "#31b4f0" }}
            />
            <Title
              className="!text-[#31b4f0] flex-grow !mb-0 text-center "
              level={4}
            >
              {store?.site_des || "รายละเอีียดสาขา"}
            </Title>
          </div>
          <SiteCard site={store} linkout={true} />
        </div>
      )}
    </>
  );
};

export default SiteStoreDetail;
