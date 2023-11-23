import { IDate } from './date';
import { ILocation } from './location';
import { IEventCategory } from './eventCategory';
import { IEventState } from './eventState';
import { IEventNetwork } from './eventNetwork';

export interface IEvent {
  id: number;
  title: string;
  description: string;
  date: IDate;
  location: ILocation;
  eventCategories: IEventCategory[];
  eventState: IEventState;
  eventNetwork: IEventNetwork;
  image?: string;
}
