import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';


export const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (
        <li className={s.item}>
  <span className={isOnline ? s.active : s.status}></span>
            <img className={s.avatar} src={avatar} alt={name} width="48" />
            <p className={s.name}>{name}</p>
</li>
    )
}

FriendListItem.propTypes = {
    friends: PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            inOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        }.isRequired),
    };