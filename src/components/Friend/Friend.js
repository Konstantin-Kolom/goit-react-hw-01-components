import PropTypes from 'prop-types';
import s from './Friend.module.css';

export default function Friend(props) {
  const { name, isOnline, avatar } = props;
  const typeClass = isOnline ? [s.isOnline] : [s.isOfline];
  return (
    <>
      <span className={`${s.status} ${typeClass}`}></span>
      <img className={s.avatar} src={avatar} alt="Avatar_friend" width="48" />
      <p className={s.name}>{name}</p>
    </>
  );
}

Friend.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
};
