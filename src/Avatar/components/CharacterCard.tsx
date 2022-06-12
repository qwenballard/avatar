import { Avatar, Text, Badge, Box, Button, Center, Heading, Link, Stack, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { seedDataAvatars } from "../../seed.js";
import { AvatarType } from "../avatars.js";

interface CharacterCardProps {
    avatar: AvatarType
}

export const CharacterCard = ({avatar}: CharacterCardProps) => {

  return (
    <Box
      w={"270px"}
      h={"275x"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"lg"}
      p={6}
      m={5}
      textAlign={"center"}
    >
      <Avatar size={"xl"} src={avatar.photoUrl} mb={4} pos={"relative"} />
      <Heading fontSize={"2xl"} fontFamily={"body"}>
        {avatar.name}
      </Heading>
      <Text fontWeight={600} color={"gray.500"} mb={4}>
        {avatar?.profession && avatar.profession.length > 30
          ? avatar.profession?.substring(0, 28 - 1) + "..."
          : avatar.profession}
      </Text>

      <Stack direction={"row"}>
        <Button
          position={"relative"}
          top={"10px"}
          flex={1}
          fontSize={"sm"}
          rounded={"full"}
          bg={"blue.400"}
          color={"white"}
          _hover={{
            bg: "blue.500",
          }}
          _focus={{
            bg: "blue.500",
          }}
        >
          View Profile
        </Button>
      </Stack>
    </Box>
  );
};
