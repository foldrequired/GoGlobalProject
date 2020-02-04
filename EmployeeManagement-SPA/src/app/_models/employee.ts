import { Manager } from './manager';

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  personalIdentity: number;
  managerId: number;
  manager: Manager;
}
