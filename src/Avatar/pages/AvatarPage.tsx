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
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AvatarType } from "../avatars";
import { lastAirBenderApi } from "../constants";

export const AvatarPage = () => {
  const [avatar, setAvatar] = useState<AvatarType>();
  const [loading, setLoading] = useState<boolean>(true);
  const location = useLocation();

  useEffect(() => {
    const characterId = location.pathname.slice(9);
    console.log(characterId);
    fetch(`${lastAirBenderApi}/characters/${characterId}`)
      .then((result) => result.json())
      .then((result) => {
        setAvatar(result);
        setLoading(false);
      });
  }, []);

  const renderPositionorProfession = () => {
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
        <Spinner
          thickness="4px"
          speed="1s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
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
                  <Text fontSize={"lg"}>{renderPositionorProfession()}</Text>
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
                <Box>
                  <Text
                    fontSize={{ base: "16px", lg: "18px" }}
                    //TODO: useColorModeValue("yellow.500", "yellow.300")
                    color={"yellow.500"}
                    fontWeight={"500"}
                    textTransform={"uppercase"}
                    mb={"4"}
                  >
                    Allies
                  </Text>

                  {/* <List spacing={2}>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Between lugs:
                      </Text>{" "}
                      20 mm
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Bracelet:
                      </Text>{" "}
                      leather strap
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Case:
                      </Text>{" "}
                      Steel
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Case diameter:
                      </Text>{" "}
                      42 mm
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Dial color:
                      </Text>{" "}
                      Black
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Crystal:
                      </Text>{" "}
                      Domed, scratch‑resistant sapphire crystal with
                      anti‑reflective treatment inside
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Water resistance:
                      </Text>{" "}
                      5 bar (50 metres / 167 feet){" "}
                    </ListItem>
                  </List> */}
                </Box>
                <Box>
                  <Text
                    fontSize={{ base: "16px", lg: "18px" }}
                    //TODO: useColorModeValue("yellow.500", "yellow.300")
                    color={"yellow.500"}
                    fontWeight={"500"}
                    textTransform={"uppercase"}
                    mb={"4"}
                  >
                    Enemies
                  </Text>
                </Box>
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
