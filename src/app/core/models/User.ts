export class User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  address: {
    street: string;
    city: string;
    zipCode: string;
  };
  phoneNumbers: string[];
}
