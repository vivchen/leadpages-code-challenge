import React, { useState } from 'react';
import Container from '@mui/material/Container';

import Header from './Header';
import Content from './Content';
import ToastNotification from './ToastNotification';

function App() {

  const [isToastOpen, setToastOpen] = useState(false);

  const handleSnackbarClose = () => {
    setToastOpen(false);
  }

  return (
    <>
      <Header setToastOpen={setToastOpen} />
      <Container>
        <Content />
        <ToastNotification
          open={isToastOpen}
          handleClose={handleSnackbarClose}
        />
      </Container>
    </>
  );
}

export default App;
