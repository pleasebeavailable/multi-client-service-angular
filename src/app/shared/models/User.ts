export class User {
  jwttoken?: string;
  constructor(public username: string, public password: string, public email: string, public role: string) {
  }

}
