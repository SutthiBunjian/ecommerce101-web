import { User } from "../types/User";
import { v4 as uuidv4 } from "uuid";
import AddUserToJSON from "./AddUserToJSON";

export default function SignUpUser(
  firstName: string,
  lastName: string,
  email: string,
  dateOfBirth: string,
  password: string,
  address: string
) {
  const user: User = {
    firstName,
    lastName,
    email,
    dateOfBirth,
    password,
    address,
    uid: uuidv4(),
  };
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.dateOfBirth = dateOfBirth;
  user.password = password;
  user.address = address;

  console.log(user);
  AddUserToJSON(user);
}
