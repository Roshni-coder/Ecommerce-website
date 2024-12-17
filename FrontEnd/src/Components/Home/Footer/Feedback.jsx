import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import Footer from './Footer';

const FeedbackPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', email: '', feedback: '' });
  };

  return (
    <Box style={{marginTop:"7%"}}>
    <Box
      sx={{
        maxWidth: 600,
        margin: '50px auto',
        padding: 4,
        border: '1px solid #e0e0e0',
        backgroundColor: '#ffffff',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
      }}
    >
      {!isSubmitted ? (
        <>
        <Box>
          <h1 style={{ textAlign: "center" }}>Feedback</h1>
          <form onSubmit={handleSubmit}>
            <Box mb={3}>
              <TextField
                fullWidth
                id="name"
                label="Name"
                name="name"
                variant="outlined"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                  },
                }}
              />
            </Box>
            <Box mb={3}>
              <TextField
                fullWidth
                id="email"
                label="Email"
                name="email"
                variant="outlined"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                  },
                }}
              />
            </Box>
            <Box mb={3}>
              <TextField
                fullWidth
                id="feedback"
                label="Feedback"
                name="feedback"
                multiline
                rows={4}
                variant="outlined"
                placeholder="Share your feedback here..."
                value={formData.feedback}
                onChange={handleChange}
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                  },
                }}
              />
            </Box>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                paddingY: 1.5,
                fontWeight: 'bold',
                borderRadius: '4px',
                fontSize: '16px',
                textTransform: 'none',
              }}
            >
              Submit Feedback
            </Button>
          </form>
          </Box>
        </>
        
      ) : (
        <Typography
          textAlign="center"
          color="success.main"
          sx={{
            fontSize: '18px',
            fontWeight: 500,
            marginTop: 20,
            padding: 2,
            marginBottom:20,
            border: '1px solid #4caf50',
            borderRadius: '2px',
            backgroundColor: '#e8f5e9',
          }}
        >
          Thank you for your feedback! We truly appreciate your input.
        </Typography>
      )}
    </Box>
    <Footer/>
    </Box>
  );
  
};

export default FeedbackPage;
