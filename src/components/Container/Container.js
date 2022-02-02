import PropTypes from 'prop-types';
import s from './Container.module.css';

export default function Container({ title }) {
  return (
    <div className={s.Container}>
      <h2 className={s.title}>{title}</h2>
    </div>
  );
}

Container.propTypes = {
  title: PropTypes.string,
};
