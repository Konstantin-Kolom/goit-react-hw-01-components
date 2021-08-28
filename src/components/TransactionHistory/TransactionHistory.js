import PropTypes from 'prop-types';
import Transaction from './Transaction';
import s from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <>
      <table className={s.transactionHistory}>
        <thead className={s.thead}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <Transaction type={item.type} amount={item.amount} currency={item.currency} />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

Transaction.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};
