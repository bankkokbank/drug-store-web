export const convertPhoneNumber = (phoneNumber: string) => {
  // Remove spaces, parentheses, and replace "ต่อ" with a comma
  const cleanedNumber = phoneNumber.replace(/[()]/g, "").replace(" ต่อ ", ",");
  // Remove any remaining spaces
  return `tel:${cleanedNumber.replace(/\s+/g, "")}`;
};
