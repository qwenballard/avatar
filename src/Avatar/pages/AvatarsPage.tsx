import { Box, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ErrorBoundary, useErrorHandler } from 'react-error-boundary';
import { CharacterCard } from '../../ui-core/CharacterCard';
import { ErrorFallback } from '../../ui-core/ErrorBoundary';
import { AvatarType } from '../avatars';
import { lastAirBenderApi } from '../constants';

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
  }, [avatars]);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Box mx={'auto'}>
        <Flex flexWrap={'wrap'} justifyContent={'center'} flexDirection={'row'}>
          {avatars.map((avatar) => {
            return <CharacterCard key={avatar._id} avatar={avatar} />;
          })}
        </Flex>
      </Box>
    </ErrorBoundary>
  );
};

export default AvatarsPage;
