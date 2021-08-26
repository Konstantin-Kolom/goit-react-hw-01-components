// import PropTypes from 'prop-types';
import Friend from './Friend';

export default function FriendList({ items }) {
  return (
    <ul className="friend-list">
      {items.map(item => (
        <li className="item" key={item.id}>
          <Friend name={item.name} isOnline={item.isOnline} avatar={item.avatar} />
        </li>
      ))}
    </ul>
  );
}
