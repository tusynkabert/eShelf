export const validateEmail = (email) => {
  const basicEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return basicEmailRegex.test(email);
};
