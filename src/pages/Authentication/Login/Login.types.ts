export interface LoginUser {
  email: string;
  password: string;
}

export interface LoginValidation {
  emailHasError: boolean;
  passwordHasError: boolean;
}
