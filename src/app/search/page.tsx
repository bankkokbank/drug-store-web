"use client";
import dynamic from "next/dynamic";

const SearchMapWithNoSSR = dynamic(
  () => import("../../components/search-map"),
  {
    ssr: false,
  }
);

const DeliveryPage = () => {
  return <SearchMapWithNoSSR />;
};

export default DeliveryPage;
