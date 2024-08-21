import './App.css';
import { useFetchFriends } from './components/useFetchFriends';
import BasicTable from "./Table.tsx";

function App() {
  const { friends, loading } = useFetchFriends();

  if (loading) return <p>Loading...</p>;
    if(friends.length === 0) return <p>No friends found</p>;
  return (
    <>
      <h1>Friends Table</h1>
        <BasicTable friends={friends}></BasicTable>
    </>
  );
}

export default App;