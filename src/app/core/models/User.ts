class Address{
  street: string;
  city: string;
  zipCode: string;
}
export class User {
  id: number;
  firstName: string;
  lastName: string;

  email: string;
  password: string;
  
  role: string;

  picture:string;
  birthday: Date;
  address: Address;
  phoneNumbers: String[];
}
