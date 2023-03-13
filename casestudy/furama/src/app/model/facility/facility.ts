import {FacilityType} from './facility-type';
import {RentType} from './rent-type';

export interface Facility {
  id?: number;
  facilityType?: FacilityType;
  rentType?: RentType;
  name?: string;
  area?: string;
  cost?: string;
  maxPeople?: string;
  standardRoom?: string;
  descriptionOtherConvenience?: string;
  poolArea?: string;
  numberOfFloors?: string;
  facilityFree?: string;
  flag?: boolean;
}
