import {
  Box,
  Image,
  Text,
  Button,
  Flex,
  Heading,
  List,
  ListItem,
  SimpleGrid,
  Spinner,
  Stack,
  StackDivider,
  useColorModeValue,
  VStack,
  SkeletonCircle,
  SkeletonText,
  Center,
  Skeleton,
  Divider,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AvatarType } from "../avatars";
import { AccordionCharacter } from "../components/AccordionCharacter";
import { lastAirBenderApi } from "../constants";

export const AvatarPage = () => {
  const [avatar, setAvatar] = useState<AvatarType>();
  const [allies, setAllies] = useState<AvatarType[]>();
  const [enemies, setEnemies] = useState<AvatarType[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const location = useLocation();

  useEffect(() => {
    const characterId = location.pathname.slice(9);
    fetch(`${lastAirBenderApi}/characters/${characterId}`)
      .then((result) => result.json())
      .then((result) => {
        setAvatar(result);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(`${lastAirBenderApi}/characters?allies=${avatar?.name}`)
      .then((result) => result.json())
      .then((result) => {
        setAllies(result);
      });

      fetch(`${lastAirBenderApi}/characters?enemies=${avatar?.name}`)
        .then((result) => result.json())
        .then((result) => {
          setEnemies(result);
        });
  }, [avatar]);

  const renderPositionOrProfession = () => {
    let position = "";
    if (avatar?.position) {
      position = avatar.position;
    } else if (avatar?.profession) {
      position = avatar.profession;
    } else {
      return position;
    }
    return position;
  };

  return (
    <Box mx={"auto"}>
      {loading ? (
        <Box height={"600px"} padding="6" boxShadow="lg" bg="white">
          <Center>
            <SkeletonCircle size={"300px"} />
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
              rounded={"md"}
              alt={"product image"}
              src={avatar?.photoUrl}
              fallbackSrc={"/avatarplaceholder.png"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={{ base: "100%", sm: "400px", lg: "500px" }}
            />
            <Stack spacing={{ base: 6, md: 10 }}>
              <Box as={"header"}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
                >
                  {avatar?.name}
                </Heading>
                <Text
                  //TODO: useColorModeValue("gray.900", "gray.400")
                  color={"gray.900"}
                  fontWeight={300}
                  fontSize={"2xl"}
                >
                  placeholder
                </Text>
              </Box>

              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={"column"}
                divider={
                  <StackDivider
                    //TODO: useColorModeValue("gray.500", "gray.400")
                    borderColor={"gray.200"}
                  />
                }
              >
                <VStack spacing={{ base: 4, sm: 6 }}>
                  <Text fontSize={"lg"}>{renderPositionOrProfession()}</Text>
                </VStack>
                <Flex>
                  <Text
                    fontSize={{ base: "16px", lg: "18px" }}
                    //TODO: useColorModeValue("yellow.500", "yellow.300")
                    color={"yellow.500"}
                    fontWeight={"500"}
                    textTransform={"uppercase"}
                    mb={"4"}
                    mr={1}
                  >
                    Affiliation:
                  </Text>
                  <Text
                    fontSize={{ base: "16px", lg: "18px" }}
                    //TODO: useColorModeValue("yellow.500", "yellow.300")
                    color={"black.500"}
                    fontWeight={"500"}
                    mb={"4"}
                  >
                    {avatar?.affiliation}
                  </Text>
                </Flex>
                <Flex>
                  <Text
                    fontSize={{ base: "16px", lg: "18px" }}
                    //TODO: useColorModeValue("yellow.500", "yellow.300")
                    color={"yellow.500"}
                    fontWeight={"500"}
                    textTransform={"uppercase"}
                    mb={"4"}
                    mr={1}
                  >
                    Weapon:
                  </Text>
                  <Text
                    fontSize={{ base: "16px", lg: "18px" }}
                    //TODO: useColorModeValue("yellow.500", "yellow.300")
                    color={"black.500"}
                    fontWeight={"500"}
                    mb={"4"}
                  >
                    {avatar?.weapon}
                  </Text>
                </Flex>
              </Stack>
              <Stack>
                <Accordion allowToggle>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          <Text
                            fontSize={{ base: "16px", lg: "18px" }}
                            //TODO: useColorModeValue("yellow.500", "yellow.300")
                            color={"yellow.500"}
                            fontWeight={"500"}
                            textTransform={"uppercase"}
                            mb={"4"}
                          >
                            Allies:
                          </Text>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <AccordionCharacter allies={allies} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          <Text
                            fontSize={{ base: "16px", lg: "18px" }}
                            //TODO: useColorModeValue("yellow.500", "yellow.300")
                            color={"yellow.500"}
                            fontWeight={"500"}
                            textTransform={"uppercase"}
                            mb={"4"}
                          >
                            Enemies:
                          </Text>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <AccordionCharacter enemies={enemies} />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Stack>

              <Button
                as={"a"}
                rounded={"none"}
                w={"full"}
                mt={8}
                size={"lg"}
                py={"7"}
                //TODO: useColorModeValue("gray.900", "gray.50")
                bg={"gray.900"}
                //TODO: useColorModeValue("white", "gray.900"")
                color={"white"}
                textTransform={"uppercase"}
                _hover={{
                  transform: "translateY(2px)",
                  boxShadow: "lg",
                }}
                href={`https://avatar.fandom.com/wiki/${avatar?.name}?so=search`}
              >
                Official Avatar Wiki for {avatar?.name}
              </Button>
            </Stack>
          </SimpleGrid>
        </Box>
      )}
    </Box>
  );
};
