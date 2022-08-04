import { Box, Center, ChakraProvider, Spinner, theme } from '@chakra-ui/react';
import { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { Footer } from './Footer';
import { ErrorFallback } from './ui-core/ErrorBoundary';
import Navbar from './ui-core/Navbar';

const Home = lazy(() => import('./Home/pages/Home'));
const NotFound = lazy(() => import('./NotFound'));
const AvatarsPage = lazy(() => import('./Avatar/pages/AvatarsPage'));
const AvatarPage = lazy(() => import('./Avatar/pages/AvatarPage'));
const CharactersPage = lazy(() => import('./Character/pages/CharactersPage'));
const CharacterPage = lazy(() => import('./Character/pages/CharacterPage'));

export const App = () => {
  let navigate = useNavigate();

  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          navigate('/home');
        }}
      >
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
            <Route path="characters" element={<CharactersPage />} />
            <Route path="characters/:characterId" element={<CharacterPage />} />
          </Routes>
          <Box my={20}>
            <Footer />
          </Box>
        </Suspense>
      </ErrorBoundary>
    </ChakraProvider>
  );
};
