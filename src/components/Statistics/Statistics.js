import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  const titleData = title;

  function getRandColor() {
    var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while (color.length < 6) {
      color = '0' + color;
    }
    return '#' + color;
  }

  return (
    <section className={s.statistics}>
      {title ? [<h2 className={s.title}>{titleData} </h2>] : ''}
      <ul className={s.statList}>
        {stats.map(stat => (
          <li className={s.stat} key={stat.id} style={{ backgroundColor: `${getRandColor()}` }}>
            <span className="label">{stat.label}</span>
            <span className={s.percentage}>{stat.percentage} %</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stat: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
