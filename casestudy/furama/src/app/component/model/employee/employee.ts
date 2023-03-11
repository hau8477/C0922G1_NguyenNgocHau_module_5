import {Position} from './position';
import {EducationDegree} from './education-degree';
import {Division} from './division';

export interface Employee {
  id?: number;
  name?: string;
  dateOfBirth?: string;
  idcCard?: string;
  salary?: number;
  numberPhone?: string;
  email?: string;
  address?: string;
  position?: Position;
  educationDegree?: EducationDegree;
  division?: Division;
  flag?: boolean;
}


// private Long id;
// private String name;
// private String dateOfBirth;
// private String idCard;
// private double salary;
// private String phoneNumber;
// private String email;
// private String address;
// private Position position;
// private EducationDegree educationDegree;
// private Division division;
// private AppUser user;
// private boolean flag;
