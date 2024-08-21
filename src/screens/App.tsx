import '../App.css';
import { useFetchFriends } from '../hooks/useFetchFriends.ts';
import BasicTable from "../components/Table.tsx";

function App() {
  const { friends, loading } = useFetchFriends();

  if (loading) return <p>Loading...</p>;
    if(friends.length === 0) return <p>No friends found</p>;
  return (
    <>
      <h1>Friends Table</h1>
        <BasicTable friends={friends}/>
    </>
  );
}

export default App;