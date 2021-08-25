import Profile from './components/Profile';
import Statistics from './components/Statistics';
import user from './json/user.json';
import statistics from './json/statistical-data.json';

// const stat1 = statistic[0];

export default function App() {
  return (
    <div>
      <div>
        <Profile
          avatar={user.avatar}
          name={user.name}
          tag={user.tag}
          location={user.location}
          stats={user.stats}
        />
      </div>
      <div>
        {statistics.map(statistic => (
          <Statistics
            key={statistic.id}
            label={statistic.label}
            percentage={statistic.percentage}
          />
        ))}
      </div>
    </div>
  );
}
