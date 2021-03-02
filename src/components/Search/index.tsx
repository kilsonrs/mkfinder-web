import React, { useState, useRef, useCallback } from 'react';
import Loading from 'react-loading';
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
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [isListOpen, setIsListOpen] = useState(false);
  const [customers, setCustomers] = useState<Customer[] | null>();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputBlur = useCallback(() => {
    setTimeout(() => {
      setIsListOpen(false);
      setIsFocused(false);
    }, 100);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsListOpen(isFilled && true);
    setIsFocused(true);
  }, [isFilled]);

  const handleInputChange = useCallback(async () => {
    if (inputRef.current?.value === '') {
      return;
    }
    setIsLoading(true);
    await api
      .get('/customers', {
        params: {
          nome: inputRef.current?.value,
        },
      })
      .then(response => setCustomers(response.data));

    setIsLoading(false);
    setIsListOpen(true);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <Container isFocused={isFocused} isListOpen={isListOpen}>
      <Input>
        {isLoading ? (
          <Loading color="#4299e1" height={22} width={22} type="spin" />
        ) : (
          <MdSearch color="#4299E1" size={24} />
        )}

        <input
          ref={inputRef}
          type="text"
          name="search-input"
          id="search-input"
          placeholder="Procurar cliente"
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
