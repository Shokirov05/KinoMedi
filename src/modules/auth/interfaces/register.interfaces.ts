import { UserRole } from '../../users/enum/user-role.enum';

export interface RegisterInterface {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: UserRole;
}
