import React from 'react';
import Box from '@mui/material/Box';
import { Snackbar, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function ToastNotification({ open = false, handleClose = () => {} }) {

    const action = (
      <>
        <Button color="secondary" size="small" onClick={() => {console.log('liked')}}>
          LIKE
        </Button>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </>
    );

    return (
      <Box sx={{flexGrow: 1}}>
        <Snackbar
          open={open}
          autoHideDuration={5000}
          onClose={handleClose}
          message={'test'}
          action={action}
        />
      </Box>
    );
  }  
