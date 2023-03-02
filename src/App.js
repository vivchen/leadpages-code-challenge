import React, { useState } from 'react';
import Container from '@mui/material/Container';

import Header from './Header';
import Content from './Content';
import ToastNotification from './ToastNotification';

import { saveLikedFormSubmission } from './service/mockServer';

function App() {

  const [isToastOpen, setToastOpen] = useState(false);
  const [currSubmission, setCurrSubmission] = useState(null);

  const handleLike = () => {
    saveLikedFormSubmission(currSubmission)
  }

  const handleSnackbarClose = () => {
    setToastOpen(false);
  }

  return (
    <>
      <Header 
        setToastOpen={setToastOpen} 
        setSubmission={setCurrSubmission} 
      />
      <Container>
        <Content />
        <ToastNotification
          handleClose={handleSnackbarClose}
          handleLike={handleLike} 
          open={isToastOpen}
          submission={currSubmission}
        />
      </Container>
    </>
  );
}

export default App;
