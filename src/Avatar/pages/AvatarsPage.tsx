import {
  Box,
  Center,
  Flex,
  SkeletonCircle,
  SkeletonText,
  Spinner,
  Wrap,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { seedDataAvatars } from "../../seed";
import { CharacterCard } from "../components/CharacterCard";
import { AvatarType } from "../avatars";
import { lastAirBenderApi } from "../constants";

interface AvatarsPageProps {}

export const AvatarsPage = ({}: AvatarsPageProps) => {
  const [avatars, setAvatars] = useState<Array<AvatarType>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(`${lastAirBenderApi}/characters/avatar`)
      .then((results) => results.json())
      .then((results) => {
        setAvatars(results);
        setLoading(false);
      });
  }, []);

  return (
    <Box mx={"auto"}>
      {loading ? (
        <Center h={"500px"}>
          <Spinner
            thickness="4px"
            speed="1s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Center>
      ) : (
        <Flex flexWrap={"wrap"} justifyContent={"center"} flexDirection={"row"}>
          {avatars.map((avatar) => {
            return <CharacterCard key={avatar._id} avatar={avatar} />;
          })}
        </Flex>
      )}
    </Box>
  );
};
