import {Project} from "../project/project";
import {Employee} from "../employee/employee";

export class Timeregister {

  id:number;
  project: Project;
  date: string;
  employee: Employee;
  workTime: number;
  absence: string;

}
