import styled from '@emotion/styled';

export const TableCell = styled.td`
  ${props => props.words && 'text-transform: capitalize;'}
  cursor: pointer;
  &:hover {
    background-color: #c9dcdf;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:focus {
    background-color: #c9dcdf;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
