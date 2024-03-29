import { Box, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ErrorBoundary, useErrorHandler } from 'react-error-boundary';
import { CharacterCard } from '../../ui-core/CharacterCard';
import { ErrorFallback } from '../../ui-core/ErrorBoundary';
import { lastAirBenderApi } from '../constants';
import { AvatarType } from '../type';

const AvatarsPage = () => {
  const [avatars, setAvatars] = useState<Array<AvatarType>>([]);
  const handleError = useErrorHandler();

  useEffect(() => {
    fetch(`${lastAirBenderApi}/characters/avatar`)
      .then((results) => results.json())
      .then((results) => {
        setAvatars(results);
      })
      .catch((error) => {
        handleError(error);
      });
  }, [handleError]);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Box mx={'auto'}>
        <Flex flexWrap={'wrap'} justifyContent={'center'} flexDirection={'row'}>
          {avatars.map((avatar) => {
            return <CharacterCard key={avatar._id} character={avatar} />;
          })}
        </Flex>
      </Box>
    </ErrorBoundary>
  );
};

export default AvatarsPage;
