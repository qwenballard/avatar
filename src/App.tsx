import { Box, Center, ChakraProvider, Spinner, theme } from '@chakra-ui/react';
import React, { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Footer } from './Footer';
import { ErrorFallback } from './ui-core/ErrorBoundary';
import Navbar from './ui-core/Navbar';

const Home = lazy(() => import('./Home/pages/Home'));
const NotFound = lazy(() => import('./NotFound'));
const AvatarsPage = lazy(() => import('./Avatar/pages/AvatarsPage'));
const AvatarPage = lazy(() => import('./Avatar/pages/AvatarPage'));

export const App = () => (
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <Navbar />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense
          fallback={
            <Center>
              <Spinner
                mt="30%"
                thickness="4px"
                speed="1s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            </Center>
          }
        >
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="avatars" element={<AvatarsPage />} />
            <Route path="avatars/:avatarId" element={<AvatarPage />} />
          </Routes>
          <Box my={20}>
            <Footer />
          </Box>
        </Suspense>
      </ErrorBoundary>
    </ChakraProvider>
  </BrowserRouter>
);
