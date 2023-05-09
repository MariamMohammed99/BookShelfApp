export interface SignUpUser {
  email: string;
  name: string;
  password: string;
  retypedPassword: string;
}

export interface SignUpValidation {
  emailHasError: boolean;
  nameHasError: boolean;
  passwordHasError: boolean;
  retypedPasswordHasError: boolean;
}
