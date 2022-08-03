import { Box, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useErrorHandler } from 'react-error-boundary';
import { AvatarType } from '../avatars';
import { CharacterCard } from '../components/CharacterCard';
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
        console.log(`error: ${error}`);
        handleError(error);
      });
  }, []);

  return (
    <Box mx={'auto'}>
      <Flex flexWrap={'wrap'} justifyContent={'center'} flexDirection={'row'}>
        {avatars.map((avatar) => {
          return <CharacterCard key={avatar._id} avatar={avatar} />;
        })}
      </Flex>
    </Box>
  );
};

export default AvatarsPage;
