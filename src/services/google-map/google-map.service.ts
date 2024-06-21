import axios from "../../app/config/axios";

export const getMaps = async (text: string): Promise<any> => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/map/search?q=${text}`
  );
  return res.data;
};

export const getMapsByLocation = async (location: {
  lat: number;
  long: number;
}): Promise<any> => {
  const res = await axios.get(
    `${
      process.env.NEXT_PUBLIC_API_URL
    }/map/search/location?location=${JSON.stringify(location)}`
  );
  return res.data;
};

export const getDetailMap = async (placeId: string): Promise<any> => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/map/details?placeId=${placeId}`
  );
  return res.data;
};
