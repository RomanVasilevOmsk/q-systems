import { Container, Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const ErrorPage: FC = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: 'text.secondary',
          mt: '20px',
          mb: '20px',
        }}
      >
        Page not found
      </Typography>
      <Link to="/" className="bg-sky-500 rounded-md px-6 py-2 hover:bg-sky-600">
        Back
      </Link>
    </Container>
  );
};

export default ErrorPage;
