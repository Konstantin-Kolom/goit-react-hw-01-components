import PropTypes from 'prop-types';
import s from './Friend.module.css';

import Friend from './Friend';

export default function FriendList({ items }) {
  return (
    <ul className={s.friendList}>
      {items.map(item => (
        <li className={s.item} key={item.id}>
          <Friend name={item.name} isOnline={item.isOnline} avatar={item.avatar} />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
};
