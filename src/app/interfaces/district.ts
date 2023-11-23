import {IDepartment} from "./department";

export interface IDistrict{
    id: number;
    name: string;
    departmentId: IDepartment
}
