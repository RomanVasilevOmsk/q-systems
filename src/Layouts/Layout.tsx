import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import SideMenu from '../components/SideMenu';

const Layout: FC = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ display: 'flex' }}>
        <SideMenu />
        <Box
          component="main"
          sx={() => ({
            flexGrow: 1,
            overflow: 'auto',
          })}
        >
          <Outlet />
        </Box>
      </Box>
    </Container>
  );
};

export default Layout;
