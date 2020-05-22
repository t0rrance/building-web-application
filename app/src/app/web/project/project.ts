import {User} from "../../auth/models/user";
import {Team} from "../team/team";

export class Project {
  id: number;
  projectName: string;
  projectStatus: string;
  team: Team;
  user: User;
}
