class Address{
  street: string;
  city: string;
  zipCode: string;
}
export class User {
  id: string;
  firstName: string;
  lastName: string;
  address: Address;
  phoneNumbers: String[];
  login: string;
  password: string;
  picture:string;
  birthday: Date;
}
