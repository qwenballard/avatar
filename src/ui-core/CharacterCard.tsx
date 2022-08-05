import {
  Avatar,
  Box,
  Button,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { AvatarType } from '../Avatar/type.js';

interface CharacterCardProps {
  character: AvatarType;
}

export const CharacterCard = ({ character }: CharacterCardProps) => {
  let navigate = useNavigate();

  function viewCharacterProfile(_id: string) {
    navigate(`/characters/${character._id}`);
  }

  return (
    <Box
      w={'270px'}
      h={'275x'}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      rounded={'lg'}
      p={6}
      m={5}
      textAlign={'center'}
    >
      <Avatar size={'xl'} src={character.photoUrl} mb={4} pos={'relative'} />
      <Heading fontSize={'2xl'} fontFamily={'body'}>
        {character.name}
      </Heading>
      <Text fontWeight={600} color={'gray.500'} mb={4}>
        {character?.profession && character.profession.length > 30
          ? character.profession?.substring(0, 28 - 1) + '...'
          : character.profession}
      </Text>

      <Stack direction={'row'}>
        <Button
          position={'relative'}
          top={'10px'}
          flex={1}
          fontSize={'sm'}
          rounded={'full'}
          bg={'blue.400'}
          color={'white'}
          _hover={{
            bg: 'blue.500',
          }}
          _focus={{
            bg: 'blue.500',
          }}
          onClick={() => {
            viewCharacterProfile(character._id);
          }}
          aria-label={'View Profile'}
        >
          View Profile
        </Button>
      </Stack>
    </Box>
  );
};
