import PropTypes from 'prop-types';

export default function Transaction(props) {
  const { type, amount, currency } = props;

  return (
    <>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
}

Transaction.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
};
