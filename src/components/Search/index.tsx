import React, { useState, useRef, useCallback } from 'react';
import { MdSearch } from 'react-icons/md';
import api from '../../services/api';
import { Container, Input, List, ListItem } from './styles';

interface Customer {
  nome: string;
  login: string;
  company: string;
  id: string;
}

interface SearchProps {
  handleCustomerSelect(customer: Customer): void;
}

const Search: React.FC<SearchProps> = ({ handleCustomerSelect }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [isListOpen, setIsListOpen] = useState(false);
  const [customers, setCustomers] = useState<Customer[]>();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsListOpen(false);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsListOpen(isFilled && true);
    setIsFocused(true);
  }, [isFilled]);

  const handleInputChange = useCallback(() => {
    api
      .get('/customers', {
        params: {
          nome: inputRef.current?.value,
        },
      })
      .then(response => setCustomers(response.data));
    setIsListOpen(true);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <Container isFocused={isFocused} isListOpen={isListOpen}>
      <Input>
        <MdSearch size={24} color="#4299E1" />
        <input
          ref={inputRef}
          type="text"
          name="search-input"
          id="search-input"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChange={handleInputChange}
        />
      </Input>
      <List isListOpen={isListOpen}>
        {customers &&
          customers.map(customer => (
            <ListItem
              key={customer.id}
              onClick={() => handleCustomerSelect(customer)}
            >
              <div>
                <p>{customer.nome}</p>
                <span>
                  <small>{customer.login}</small>
                  <small>{customer.company}</small>
                </span>
              </div>
            </ListItem>
          ))}
      </List>
    </Container>
  );
};

export default Search;
