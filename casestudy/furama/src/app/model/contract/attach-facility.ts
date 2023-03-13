import {ContractDetail} from './contract-detail';

export interface AttachFacility {
  id?: number;
  name?: string;
  cost?: number;
  unit?: string;
  status?: string;
  contractDetail?: ContractDetail[];
  flag?: boolean;
}
