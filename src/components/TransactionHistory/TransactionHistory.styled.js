import styled from '@emotion/styled';

export const Table = styled.table`
  margin: 30px auto;
  width: 500px;
  text-align: center;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%);
  font-size: 14px;
`;

export const TableHead = styled.thead`
  color: #ffffff;
  background-color: #00bcd5;
  text-transform: uppercase;
  height: 30px;
`;

export const TableRow = styled.tr`
  height: 40px;
  &:nth-of-type(even) {
    background-color: #ecf1f3;
  }
`;

export const TableBody = styled.tbody`
  color: #999ea3;
`;
