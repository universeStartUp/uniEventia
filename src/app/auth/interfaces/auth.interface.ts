export interface ILogInCredentials {
  emailAddress: string;
  password: string;
}

export interface IRegisterPayload {
    surname: string;
    firstName: string;
    lastName: string;
    studentCode: string;
    emailAddress: string;
    password: string
}