import {
  Avatar,
  Text,
  Badge,
  Box,
  Button,
  Center,
  Heading,
  Link,
  Stack,
  useColorModeValue,
  HStack,
  Flex,
  VStack,
  SimpleGrid,
  WrapItem,
  Wrap,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AvatarType } from "../avatars";
import { lastAirBenderApi } from "../constants";

interface AccordionCharacterProps {
  allies?: AvatarType[] | undefined;
  enemies?: AvatarType[] | undefined;
}

export const AccordionCharacter = ({allies, enemies}: AccordionCharacterProps) => {

  return (
    <Wrap>
      {allies &&
        allies.map((ally) => {
          return (
              //TODO: Add links later to take you to character page
            <WrapItem>
              <Box m={2}>
                <Center>
                  <Avatar name={ally.name} src={ally.photoUrl} mx={2} />
                  <Text>{ally.name}</Text>
                </Center>
              </Box>
            </WrapItem>
          );
        })}
      {enemies &&
        enemies.map((enemy) => {
          return (
            <WrapItem>
              <Box m={2}>
                <Center>
                  <Avatar name={enemy.name} src={enemy.photoUrl} mx={2} />
                  <Text>{enemy.name}</Text>
                </Center>
              </Box>
            </WrapItem>
          );
        })}
    </Wrap>
  );
};
