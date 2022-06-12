import { Box, Spinner } from "@chakra-ui/react";
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

  return (
    <Box mx={"auto"}>
      { loading ? (<Spinner
            thickness="4px"
            speed="1s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />) : <p>{avatar?.name}</p>}
    </Box>
  );
};
