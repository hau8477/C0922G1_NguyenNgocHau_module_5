import {Customer} from '../customer/customer';
import {Employee} from '../employee/employee';
import {Facility} from '../facility/facility';

export interface Contract {
  id?: number;
  customer?: Customer;
  employee?: Employee;
  facility?: Facility;
  startDate?: string;
  endDate?: string;
  deposit?: number;
  total?: number;
}

//
// private Long id;
// private Customer customer;
// private Employee employee;
// private Facility facility;
// private String startDate;
// private String endDate;
// private double deposit;
// private List<ContractDetail> contractDetail;
// private boolean flag = true;
// private double totalCost;
