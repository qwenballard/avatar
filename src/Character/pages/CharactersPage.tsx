import { Box, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ErrorBoundary, useErrorHandler } from 'react-error-boundary';
import { AvatarType } from '../../Avatar/type';
import { CharacterCard } from '../../ui-core/CharacterCard';
import { ErrorFallback } from '../../ui-core/ErrorBoundary';
import { lastAirBenderApi } from '../constants';

const CharactersPage = () => {
  const [characters, setCharacters] = useState<Array<AvatarType>>([]);
  const handleError = useErrorHandler();

  useEffect(() => {
    fetch(`${lastAirBenderApi}/characters`)
      .then((results) => results.json())
      .then((results) => {
        setCharacters(results);
      })
      .catch((error) => {
        handleError(error);
      });
  }, [characters, handleError]);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Box mx={'auto'}>
        <Flex flexWrap={'wrap'} justifyContent={'center'} flexDirection={'row'}>
          {characters.map((character) => {
            return <CharacterCard key={character._id} character={character} />;
          })}
        </Flex>
      </Box>
    </ErrorBoundary>
  );
};

export default CharactersPage;
