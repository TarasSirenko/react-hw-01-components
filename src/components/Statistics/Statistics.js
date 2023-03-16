import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={s.section}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.list}>
        {stats.map(obj => {
          return (
            <li
              className={s.item}
              key={obj.id}
              style={{
                backgroundColor: `#${(Math.random().toString(16) + '000000')
                  .substring(2, 8)
                  .toUpperCase()}`,
              }}
            >
              <span className={s.label}>{obj.label}</span>
              <span className={s.percentage}>{obj.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};
