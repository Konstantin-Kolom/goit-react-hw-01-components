// import PropTypes from 'prop-types';

export default function Friend(props) {
  const { name, isOnline, avatar } = props;
  return (
    <div>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="Avatar_friend" width="48" />
      <p className="name">{name}</p>
    </div>
  );
}
