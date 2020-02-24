export class User {
  jwttoken?: string;
  constructor(public id: number, public username: string, public password: string, public email: string, public role: string) {
  }

}
