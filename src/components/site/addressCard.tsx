import {
  EnvironmentFilled,
  PhoneOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Divider } from "antd";
import { changeDateFormattedTime } from "../../common/date";
import { convertPhoneNumber } from "../../common/phone";
import { useRouter } from "next/navigation";
import { useSetRecoilState } from "recoil";
import { storeState } from "../../app/atom/map";
import React from "react";

interface AddressCardProps {
  store: any;
}

const AddressCard: React.FC<AddressCardProps> = ({ store }) => {
  return (
    <div className="bg-white text-[#6b6b6b] text-medium  m-4 border rounded-xl p-4 shadow">
      <span className="font-semibold">ที่อยู่</span>
      <Divider className="!my-2" />
      <span>{store?.site_address}</span>
    </div>
  );
};
export default AddressCard;
