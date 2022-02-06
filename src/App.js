import profile from './data/user.json';
import Profile from './components/Profile/Profile';

import data from './data/data.json';
import Statistics from './components/Statistics/Statistics';

import friends from './data/friends.json';
import FriendsList from './components/FriendsList/FriendList';

import transactions from './data/transactions.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <>
      <Profile
        avatar={profile.avatar}
        username={profile.username}
        tag={profile.tag}
        location={profile.location}
        stats={profile.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      <FriendsList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
}
