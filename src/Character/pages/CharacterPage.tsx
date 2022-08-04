import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Skeleton,
  SkeletonCircle,
  Stack,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ErrorBoundary, useErrorHandler } from 'react-error-boundary';
import { useLocation } from 'react-router-dom';
import { AvatarType } from '../../Avatar/type';
import { AlliesOrEnemiesAccordion } from '../../ui-core/AlliesOrEnemiesAccordion';
import { ErrorFallback } from '../../ui-core/ErrorBoundary';
import { lastAirBenderApi } from '../constants';

const CharacterPage = () => {
  const [character, setCharacters] = useState<AvatarType>();
  const [allies, setAllies] = useState<AvatarType[]>();
  const [enemies, setEnemies] = useState<AvatarType[]>();

  const location = useLocation();
  const handleError = useErrorHandler();
  const characterId = location.pathname.slice(12);

  useEffect(() => {
    fetch(`${lastAirBenderApi}/characters/${characterId}`)
      .then((result) => result.json())
      .then((result) => {
        setCharacters(result);
      })
      .catch((error) => {
        handleError(error);
      });
  }, [characterId, handleError]);

  useEffect(() => {
    fetch(`${lastAirBenderApi}/characters?allies=${character?.name}`)
      .then((result) => result.json())
      .then((result) => {
        setAllies(result);
      })
      .catch((error) => {
        handleError(error);
      });

    fetch(`${lastAirBenderApi}/characters?enemies=${character?.name}`)
      .then((result) => result.json())
      .then((result) => {
        setEnemies(result);
      })
      .catch((error) => {
        handleError(error);
      });
  }, [character, handleError]);

  const renderPositionOrProfession = () => {
    let position = '';
    if (character?.position) {
      position = character.position;
    } else if (character?.profession) {
      position = character.profession;
    } else {
      return position;
    }
    return position;
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Box mx={'auto'}>
        {!character || !allies || !enemies ? (
          <Box height={'600px'} padding="6" boxShadow="lg" bg="white">
            <Center>
              <SkeletonCircle size={'300px'} />
            </Center>
            <Skeleton height="40px" mt={5} />
            <Skeleton height="20px" mt={2} />
            <Skeleton height="20px" mt={2} />
            <Skeleton height="20px" mt={2} />
            <Skeleton height="20px" mt={2} />
            <Skeleton height="20px" mt={2} />
          </Box>
        ) : (
          <Box>
            <SimpleGrid
              columns={{ base: 1, lg: 2 }}
              spacing={{ base: 8, md: 10 }}
              py={{ base: 18, md: 24 }}
            >
              <Image
                rounded={'md'}
                alt={'product image'}
                src={character?.photoUrl}
                fallbackSrc={'/avatarplaceholder.png'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={{ base: '100%', sm: '400px', lg: '500px' }}
              />
              <Stack spacing={{ base: 6, md: 10 }}>
                <Box as={'header'}>
                  <Heading
                    lineHeight={1.1}
                    fontWeight={600}
                    fontSize={{
                      base: '2xl',
                      sm: '4xl',
                      lg: '5xl',
                    }}
                  >
                    {character?.name}
                  </Heading>
                </Box>

                <Stack
                  spacing={{ base: 4, sm: 6 }}
                  direction={'column'}
                  divider={
                    <StackDivider
                      //TODO: useColorModeValue("gray.500", "gray.400")
                      borderColor={'gray.200'}
                    />
                  }
                >
                  <VStack spacing={{ base: 4, sm: 6 }}>
                    <Text fontSize={'lg'}>{renderPositionOrProfession()}</Text>
                  </VStack>
                  <Flex>
                    <Text
                      fontSize={{
                        base: '16px',
                        lg: '18px',
                      }}
                      //TODO: useColorModeValue("yellow.500", "yellow.300")
                      color={'yellow.500'}
                      fontWeight={'500'}
                      textTransform={'uppercase'}
                      mb={'4'}
                      mr={1}
                    >
                      Affiliation:
                    </Text>
                    <Text
                      fontSize={{
                        base: '16px',
                        lg: '18px',
                      }}
                      //TODO: useColorModeValue("yellow.500", "yellow.300")
                      color={'black.500'}
                      fontWeight={'500'}
                      mb={'4'}
                    >
                      {character?.affiliation ? (
                        <Text>{character.affiliation}</Text>
                      ) : (
                        <Text>N/A</Text>
                      )}
                    </Text>
                  </Flex>
                  <Flex>
                    <Text
                      fontSize={{
                        base: '16px',
                        lg: '18px',
                      }}
                      //TODO: useColorModeValue("yellow.500", "yellow.300")
                      color={'yellow.500'}
                      fontWeight={'500'}
                      textTransform={'uppercase'}
                      mb={'4'}
                      mr={1}
                    >
                      Weapon:
                    </Text>
                    <Text
                      fontSize={{
                        base: '16px',
                        lg: '18px',
                      }}
                      //TODO: useColorModeValue("yellow.500", "yellow.300")
                      color={'black.500'}
                      fontWeight={'500'}
                      mb={'4'}
                    >
                      {character?.weapon ? (
                        <Text>{character.weapon}</Text>
                      ) : (
                        <Text>N/A</Text>
                      )}
                    </Text>
                  </Flex>
                </Stack>
                <Stack>
                  <AlliesOrEnemiesAccordion allies={allies} enemies={enemies} />
                </Stack>

                <Button
                  as={'a'}
                  rounded={'none'}
                  w={'full'}
                  mt={8}
                  size={'lg'}
                  py={'7'}
                  //TODO: useColorModeValue("gray.900", "gray.50")
                  bg={'gray.900'}
                  //TODO: useColorModeValue("white", "gray.900"")
                  color={'white'}
                  textTransform={'uppercase'}
                  _hover={{
                    transform: 'translateY(2px)',
                    boxShadow: 'lg',
                  }}
                  href={`https://avatar.fandom.com/wiki/${character?.name}?so=search`}
                >
                  Official Avatar Wiki for {character?.name}
                </Button>
              </Stack>
            </SimpleGrid>
          </Box>
        )}
      </Box>
    </ErrorBoundary>
  );
};

export default CharacterPage;
