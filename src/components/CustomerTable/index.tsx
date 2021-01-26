import React, { TableHTMLAttributes } from 'react';
import ICustomer from '../../dtos/ICustomer';

import { Container, Row } from './styles';

interface ITableProps extends TableHTMLAttributes<HTMLTableElement> {
  customers: ICustomer[];
  handleViewCustomer(customer: any): any;
}

const CustomerTable: React.FC<ITableProps> = ({
  customers,
  handleViewCustomer,
}) => {
  return (
    <Container>
      <table>
        <tbody>
          {customers.map(customer => (
            <Row key={customer.id} onClick={() => handleViewCustomer(customer)}>
              <td className="company">{customer.company}</td>
              <td className="name">{customer.nome}</td>
              <td className="login">{customer.login}</td>
              <td className="mac">{customer.mac}</td>
            </Row>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default CustomerTable;
