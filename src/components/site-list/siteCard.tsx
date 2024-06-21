import {
  EnvironmentFilled,
  PhoneOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Divider } from "antd";
import { changeDateFormattedTime } from "../../common/date";
import { convertPhoneNumber } from "../../common/phone";
import { useRouter } from "next/navigation";

interface SiteCardProps {
  site: any;
  index: number;
}

const SiteCard: React.FC<SiteCardProps> = ({ site, index }) => {
  const router = useRouter();
  const handleClick = (event: any) => {
    event.preventDefault();
    window.location.href = convertPhoneNumber(site.site_tel);
  };

  return (
    <div key={index} className=" m-4 border rounded-xl p-4 shadow">
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
                    className={`mr-2 ${!site.isOpen ? "text-[#ee2f30]" : ""}`}
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
          onClick={handleClick}
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
            router.push("/detaiil");
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
