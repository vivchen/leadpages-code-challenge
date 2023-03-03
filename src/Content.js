import React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

export default function Content({ likedSubmissions =  {} }) {
  return (
    <Box sx={{marginTop: 3}}>
      <Typography variant="h4">Liked Form Submissions</Typography>

      <Typography variant="body1" sx={{fontStyle: 'italic', marginTop: 1}}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>ID</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { likedSubmissions ? 
                // todo: add unique key
                likedSubmissions.map((submission) => {
                  return (
                    <TableRow>
                      <TableCell>{`${submission.data.firstName} ${submission.data.lastName}`}</TableCell>
                      <TableCell>{submission.data.email}</TableCell>
                      <TableCell>{submission.id}</TableCell>
                    </TableRow>
                  )
                }) : null              
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Typography>
    </Box>
  );
}
