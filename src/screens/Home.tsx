import '../App.css';
import { useFetchFriends } from '../hooks/useFetchFriends.ts';
import BasicTable from "../components/Table.tsx";
import { useTheme } from '@mui/material/styles';
import {Container, Typography} from "@mui/material";


function Home() {
  const { friends, loading } = useFetchFriends();
  const theme = useTheme();

  if (loading) return <p>Loading...</p>;
  if (friends.length === 0) return <p>No friends found</p>;
  return (
      <Container style={{ backgroundColor: theme.palette.background.default, color: theme.palette.text.primary, padding: 20, borderRadius: 10 }}>
        <Typography style={{ fontSize: 40, paddingBottom: 10 ,fontFamily: theme.typography.fontFamily }}>Friends Table</Typography>
        <div className="table-container">
          <BasicTable friends={friends} />
        </div>
      </Container>
  );
}

export default Home;