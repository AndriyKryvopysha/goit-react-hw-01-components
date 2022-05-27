import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const colors = ['#125c75', '#8e25a1', '#6e0f37', '#7eeb7a', '#d99d2e'];

export const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.list}>
        {stats.map(({ id, label, percentage }, index) => (
          <li className={s.item} key={id} style={{ background: colors[index] }}>
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
