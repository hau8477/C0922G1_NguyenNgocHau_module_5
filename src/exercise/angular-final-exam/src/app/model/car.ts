import {City} from './city';

export interface Car {
  id: number;
  type: string;
  name: string;
  startCity: City;
  endCity: City;
  phoneNumber: string;
  email: string;
  startHour: string;
  endHour: string;
}
