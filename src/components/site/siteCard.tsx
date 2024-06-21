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

interface SiteCardProps {
  site: any;
  linkout: boolean;
}

const SiteCard: React.FC<SiteCardProps> = ({ site, linkout }) => {
  const router = useRouter();
  const setStore = useSetRecoilState(storeState);
  const handleClickTel = (event: any) => {
    event.preventDefault();
    window.location.href = convertPhoneNumber(site.site_tel);
  };

  const handleClickMap = (site: any) => {
    if (linkout) {
      window.location.href = `https://www.google.com/maps?q=${site?.location?.coordinates[1]},${site?.location?.coordinates[0]}`;
    } else {
      setStore(site);
      router.push("/site/detail");
    }
  };

  return (
    <div className="bg-white m-4 border rounded-xl p-4 shadow">
      <div className="flex">
        <Avatar
          size={50}
          className="flex flex-none !bg-transparent"
          icon={<EnvironmentFilled style={{ color: "#31b4f0" }} />}
        />
        <div className="flex flex-1 flex-col">
          <div className="flex">
            <span className="basis-3/5">สาขา :</span>
            <span className="basis-3/6 basis-3/6 font-semibold">
              {site?.site_desc}
            </span>
          </div>
          <div className="flex">
            <span className="basis-3/5">ระยะทางภายในรัศมี :</span>
            <span className="basis-3/6 basis-3/6 font-semibold">{`${site?.distance.toFixed(
              2
            )} กม.`}</span>
          </div>

          <div className="flex">
            <span className="basis-3/5">เวลาเปิดปิดร้าน :</span>
            <div className="basis-3/6 font-semibold">
              {site.site_close_time === site.site_open_time ? (
                <span>24 ชม.</span>
              ) : (
                <div>
                  <span
                    className={`${!site.isOpen ? "text-[#ee2f30] mr-2" : ""}`}
                  >
                    {!site.isOpen ? "ปิด" : ""}
                  </span>
                  <span>
                    {!site.isOpen
                      ? `(${changeDateFormattedTime(
                          site.site_open_time
                        )} - ${changeDateFormattedTime(site.site_close_time)})`
                      : `${changeDateFormattedTime(
                          site.site_open_time
                        )} - ${changeDateFormattedTime(site.site_close_time)}`}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Divider className="!my-2" />
      <div className="flex justify-evenly">
        <Button
          size="large"
          className="w-full !rounded-full !text-xs mr-2"
          style={{ color: "#31b4f0" }}
          disabled={!site.isOpen}
          onClick={handleClickTel}
          icon={<PhoneOutlined style={{ color: "#31b4f0" }} />}
        >
          {site.site_tel}
        </Button>
        <Button
          size="large"
          type="primary"
          disabled={!site.isOpen}
          className="w-full !rounded-full !text-[#ffffff] !text-xs disabled"
          style={{ color: "#31b4f0" }}
          onClick={() => {
            handleClickMap(site);
          }}
          icon={<SendOutlined style={{ color: "#FFFFFF" }} />}
        >
          แผนที่สาขา
        </Button>
      </div>
    </div>
  );
};
export default SiteCard;
