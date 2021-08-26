import Profile from './components/Profile';
// import Statistics from './components/Statistics';
import StatisticsList from './components/StatisticsList';
import user from './json/user.json';
import statistics from './json/statistical-data.json';

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
    </div>
  );
}
