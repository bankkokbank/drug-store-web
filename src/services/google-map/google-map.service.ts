import axios from "../../app/config/axios";

export const getMaps = async (text: string): Promise<any> => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/map/search?q=${text}`
  );
  return res.data;
};

export const getMapsByLocation = async (
  lat: string,
  long: string
): Promise<any> => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/map/search/location?lat=${lat}&long=${long}`
  );
  return res.data;
};

export const getDetailMap = async (placeId: string): Promise<any> => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/map/details?placeId=${placeId}`
  );
  return res.data;
};
