import IAddress from './IAddress';
import IConnection from './IConnection';
import IContact from './IContact';
import IInvoice from './IInvoice';
import IProfile from './IProfile';

export default interface ICustomerDetails {
  profile: IProfile;
  contact: IContact;
  connection: IConnection;
  address: IAddress;
  invoices: IInvoice[];
  status: {
    isFree: boolean;
    isActive: boolean;
    deactivationDate: string;
    isBlocked: boolean;
    blockDate: string;
    inException: boolean;
    exceptionUntil: string;
  };
}
