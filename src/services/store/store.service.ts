import axios from "axios";

export const getNearByStore = async (location: {
  lat: number;
  long: number;
}): Promise<any> => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/store?location=${JSON.stringify(
      location
    )}`
  );
  return res.data;
};
