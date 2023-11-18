import {Date} from './date';
import {Location} from "./location";
import {EventCategory} from "./eventCategory";
import {EventState} from "./eventState";

export interface Event {
  id: number
  title: string;
  description: string;
  date: Date;
  location: Location;
  eventCategories: EventCategory[];
  eventState: EventState;
}
