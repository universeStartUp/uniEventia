import {Department} from "./department";

export interface District{
    id: number;
    name: string;
    departmentId: Department
}
