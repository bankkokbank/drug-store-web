export const changeDateFormattedTime = (time: string) => {
  // Split the time string by ":"
  let parts = time.split(":");

  // Take only the first two parts (hours and minutes)
  let formattedTime = parts[0] + ":" + parts[1];

  return formattedTime;
};
