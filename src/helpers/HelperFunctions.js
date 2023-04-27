export const validateTelephone = phone => {
  const testPhone = cleanMask(phone);
  const regexPhone = /\d{2}\d{4,5}\d{3,4}/g;
  return regexPhone.test(testPhone);
};

export const cleanMask = maskedInput => {
  return maskedInput.replace(/[^a-zA-Z0-9\\s]+/g, "");
};
