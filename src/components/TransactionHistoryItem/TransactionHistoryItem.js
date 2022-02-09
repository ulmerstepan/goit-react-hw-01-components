import PropTypes from 'prop-types';
import { TableCell } from './TransactionHistoryItem.styled';

export default function TransactionHistoryItem({ type, amount, currency }) {
  const words = true;
  return (
    <>
      <TableCell words={words}>{type}</TableCell>
      <TableCell>{amount}</TableCell>
      <TableCell>{currency}</TableCell>
    </>
  );
}

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
