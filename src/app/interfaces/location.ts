import {District} from "./district";

export interface Location{
  id: number;
  address: string;
  district: District;
}
