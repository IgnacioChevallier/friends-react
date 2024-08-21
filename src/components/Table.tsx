import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Tooltip} from "@mui/material";
import {Friend} from "../types/types.ts";

interface BasicTableProps {
  friends: Friend[];
}

export default function BasicTable({ friends }: BasicTableProps) {
  return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {friends.map((friend) => (
                <TableRow key={friend.id}>
                  <TableCell component="th" scope="row">
                    {friend.name}
                  </TableCell>
                  <TableCell>{friend.email}</TableCell>
                  <TableCell>
                    {friend.Address && friend.Address.length > 0 ? (
                        <Tooltip title={friend.Address.map(addr => `${addr.street}, ${addr.city}, ${addr.state}`).join(' || ')}>
                          <span>Hover to see addresses</span>
                        </Tooltip>
                    ) : (
                        <span>No addresses available</span>
                    )}
                  </TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
}
