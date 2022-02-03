import PropTypes from 'prop-types';
import i from './FriendsListItem.module.css';

export default function FriendsListItem({ avatar, name, isOnline }) {
  return (
    <>
      <span className={`${i.online} ${isOnline && i.active}`}>{isOnline}</span>
      <img className={i.img} src={avatar} alt={name} />
      <p className={i.name}>{name}</p>
    </>
  );
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.oneOf([true, false]),
};
