import PropTypes from 'prop-types';
import p from './Profile.module.css';

export default function Profile(props) {
  const {
    username,
    avatar,
    tag,
    location,
    stats: { followers, views, likes },
  } = props;
  return (
    <div className={p.profile}>
      <div className={p.description}>
        <img src={avatar} alt="User avatar" className={p.avatar} />
        <p className={p.name}>{username}</p>
        <p className={p.tag}>@{tag}</p>
        <p className={p.location}>{location}</p>
      </div>

      <ul className={p.stats}>
        <li className={p.item}>
          <span className={p.label}>Followers</span>
          <span className={p.quantity}>{followers}</span>
        </li>
        <li className={p.item}>
          <span className={p.label}>Views</span>
          <span className={p.quantity}>{views}</span>
        </li>
        <li className={p.item}>
          <span className={p.label}>Likes</span>
          <span className={p.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};
