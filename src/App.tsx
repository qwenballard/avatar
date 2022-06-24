import { Box, ChakraProvider, theme } from '@chakra-ui/react';
import * as React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AvatarPage } from './Avatar/pages/AvatarPage';
import { AvatarsPage } from './Avatar/pages/AvatarsPage';
import { Footer } from './Footer';
import { Home } from './Home/pages/Home';
import { NotFound } from './NotFound';
import Navbar from './ui-core/Navbar';
// import { NationPage } from "./Nation/pages/NationPage";
// import { NationsPage } from "./Nation/pages/NationsPage";

export const App = () => (
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <Navbar />
      <Box m={2}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="avatars" element={<AvatarsPage />} />
          <Route path="avatars/:avatarId" element={<AvatarPage />} />
          {/* <Route path="nations" element={<NationsPage />} />
          <Route path="nations/:nationsId" element={<NationPage />} /> */}
        </Routes>
      </Box>
      <Box my={20}>
        <Footer />
      </Box>
    </ChakraProvider>
  </BrowserRouter>
);
