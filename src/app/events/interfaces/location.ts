import {IDistrict} from "./district";

export interface ILocation{
  id: number;
  address: string;
  district: IDistrict;
}
