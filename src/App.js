//Копмоненты
import Profile from './components/Profile/Profile';
import FriendList from './components/Friend/FriendList';
import Statistics from './components/Statistics/Statistics';
import Container from './components/Container/Container';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

// Источнини данныых
import user from './json/user.json';
import statisticalData from './json/statistical-data.json';
import friends from './json/friends.json';
import transactions from './json/transactions.json';

///////// Арр - для рендера
export default function App() {
  return (
    <Container>
      <h1>USER DATA</h1>

      <h2>User Profile</h2>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />

      <h2>Download statistics</h2>
      <Statistics title="Upload stats" stats={statisticalData} />

      <h2>User Friends</h2>
      <FriendList items={friends} />

      <h2>Transaction history</h2>
      <TransactionHistory items={transactions} />
    </Container>
  );
}
