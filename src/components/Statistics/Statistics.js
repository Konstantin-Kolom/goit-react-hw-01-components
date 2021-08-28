// import PropTypes from 'prop-types';

export default function Statistics(props) {
  const { label, percentage } = props;
  return (
    <>
      <span className="label">{label}</span>
      <span className="percentage">{percentage} %</span>
    </>
  );
}

// Statistics.propTypes = {
//   avatar: PropTypes.string.isRequired,
//   name: PropTypes.isRequired,
//   tag: PropTypes.isRequired,
//   location: PropTypes.isRequired,
//   stats: PropTypes.shape({
//     followers: PropTypes.number.isRequired,
//     views: PropTypes.number.isRequired,
//     likes: PropTypes.number.isRequired,
//   }),
// };
