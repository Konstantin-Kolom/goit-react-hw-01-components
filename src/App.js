//Копмоненты
import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList';
import StatisticsList from './components/Statistics/StatisticsList';
import Container from './components/Container/Container';

// Источнини данныых
import user from './json/user.json';
import statistics from './json/statistical-data.json';
import friends from './json/friends.json';

///////// Арр - для рендера
export default function App() {
  return (
    <Container>
      <h1>USER DATA</h1>
      <h2>User profile</h2>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <h2>Download statistics</h2>
      <StatisticsList items={statistics} />
      <FriendList items={friends} />
    </Container>
  );
}
