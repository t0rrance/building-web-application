import {Team} from "../team/team";

export class Employee {
  id: number;
  firstName: string;
  lastName: string;
  emailId: string;
  active: boolean;
  address: string;
  team: Team;
}
