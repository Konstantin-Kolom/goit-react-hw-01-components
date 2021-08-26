import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList';
import StatisticsList from './components/StatisticsList';

import user from './json/user.json';
import statistics from './json/statistical-data.json';
import friends from './json/friends.json';

export default function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />

      <StatisticsList items={statistics} />

      <FriendList items={friends} />
    </div>
  );
}
