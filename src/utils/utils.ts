export const isEmpty = (value: string) => {
  return value.trim() === "";
};

export const isEmail = (email: string) => {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
};

export const isPassword = (password: string) => {
  if (password.trim() === "" || password.length < 8) {
    return false;
  }
  return true;
};

export const passwordConfirmed = (
  password: string,
  retypedPassword: string,
) => {
  return password === retypedPassword;
};
