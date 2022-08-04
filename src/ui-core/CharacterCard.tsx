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
  avatar: AvatarType;
}

export const CharacterCard = ({ avatar }: CharacterCardProps) => {
  let navigate = useNavigate();

  function viewCharacterProfile(_id: string) {
    navigate(`/avatars/${avatar._id}`);
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
      <Avatar size={'xl'} src={avatar.photoUrl} mb={4} pos={'relative'} />
      <Heading fontSize={'2xl'} fontFamily={'body'}>
        {avatar.name}
      </Heading>
      <Text fontWeight={600} color={'gray.500'} mb={4}>
        {avatar?.profession && avatar.profession.length > 30
          ? avatar.profession?.substring(0, 28 - 1) + '...'
          : avatar.profession}
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
            viewCharacterProfile(avatar._id);
          }}
          aria-label={'View Profile'}
        >
          View Profile
        </Button>
      </Stack>
    </Box>
  );
};
