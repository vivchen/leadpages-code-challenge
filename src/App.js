import React, { useState } from 'react';
import Container from '@mui/material/Container';

import Header from './Header';
import Content from './Content';
import ToastNotification from './ToastNotification';

import { saveLikedFormSubmission } from './service/mockServer';

function App() {

  const storedSubmissions = JSON.parse(localStorage.getItem('formSubmissions'));
  const [currSubmission, setCurrSubmission] = useState(null);
  const [isToastOpen, setToastOpen] = useState(false);
  const [likedSubmissions, setLikedSubmissions] = useState(storedSubmissions ? storedSubmissions : []);
  

  const handleLike = () => {
    saveLikedFormSubmission(currSubmission)
    setLikedSubmissions(likedSubmissions => [...likedSubmissions, currSubmission]);
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
        <Content likedSubmissions={likedSubmissions} />
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
