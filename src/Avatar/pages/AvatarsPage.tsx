import { Box, Center, Flex, Wrap } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { seedDataAvatars } from "../../seed";
import { CharacterCard } from "../components/CharacterCard";
import { AvatarType } from "../avatars";
import { lastAirBenderApi } from "../constants";

interface AvatarsPageProps {}

export const AvatarsPage = ({}: AvatarsPageProps) => {
  const [avatars, setAvatars] = useState <Array<AvatarType>>([]);

  useEffect(() => {
    fetch(`${lastAirBenderApi}/characters/avatar`)
    .then(results => results.json())
    .then((results) => {
      setAvatars(results);
    });
  }, []);

  return (
    <Box mx={"auto"}>
      <Flex flexWrap={"wrap"} justifyContent={"center"} flexDirection={"row"}>
        {avatars.map((avatar) => {
          return <CharacterCard key={avatar._id} avatar={avatar} />;
        })}
      </Flex>
    </Box>
  );
};
