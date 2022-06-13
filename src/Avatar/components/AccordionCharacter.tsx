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
  LinkOverlay,
  LinkBox,
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
            <WrapItem>
              <LinkBox m={2}>
                <Center>
                  <LinkOverlay href={`/avatars/${ally._id}`}>
                    <Avatar name={ally.name} src={ally.photoUrl} mx={2} />
                    <Text>{ally.name}</Text>
                  </LinkOverlay>
                </Center>
              </LinkBox>
            </WrapItem>
          );
        })}
      {enemies &&
        enemies.map((enemy) => {
          return (
            <WrapItem>
              <LinkBox m={2}>
                <Center>
                  <LinkOverlay>
                    <Avatar name={enemy.name} src={enemy.photoUrl} mx={2} />
                    <Text>{enemy.name}</Text>
                  </LinkOverlay>
                </Center>
              </LinkBox>
            </WrapItem>
          );
        })}
    </Wrap>
  );
};
