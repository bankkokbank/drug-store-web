import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { addressStage } from "../../app/atom/map";
import { getNearByStore } from "../../services/store/store.service";
import { Input, Typography } from "antd";
import { LeftOutlined, SearchOutlined } from "@ant-design/icons";

import SiteCard from "./siteCard";

const { Title } = Typography;

const SiteListStore: React.FC = () => {
  const router = useRouter();
  const address = useRecoilValue(addressStage);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState([]);
  const [siteList, setSiteList] = useState([]);

  useEffect(() => {
    if (address) {
      fetchData(address);
    } else {
      router.push("/search");
    }
  }, [router]);

  const handleSearchChange = async (value: any) => {
    setSearch(value);
    if (value) {
      const filterSite = siteList.filter((site: any) => {
        return site.site_desc.includes(value);
      });
      setFilters(filterSite);
    } else {
      setFilters(siteList);
    }
  };

  const fetchData = async (location: any) => {
    const nearbyStore = await getNearByStore({
      lat: location.geometry.location.lat,
      long: location.geometry.location.lng,
    });
    setSiteList(nearbyStore);
    setFilters(nearbyStore);
  };

  return (
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
          ค้นหาสาขา
        </Title>
      </div>
      <div className=" top-16 left-0 right-0 mx-auto px-2 z-10 mb-4 ">
        <Input
          className="!rounded-full"
          size="large"
          prefix={<SearchOutlined />}
          value={search}
          onChange={(e) => handleSearchChange(e.target.value)}
          placeholder="ค้นหาสาขา"
        />
      </div>
      {filters &&
        filters.length > 0 &&
        filters.map((filter: any, index: number) => {
          return <SiteCard site={filter} index={index} />;
        })}
    </div>
  );
};

export default SiteListStore;
