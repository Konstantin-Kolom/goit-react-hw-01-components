// import PropTypes from 'prop-types';

export default function Statistics(props) {
  const { label, percentage } = props;
  return (
    <p>
      <span className="label">{label}</span>
      <span className="percentage">{percentage} %</span>
    </p>
  );
}
