import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { seedDataAvatars } from "../../seed.js";

interface AvatarsPageProps {}

export const AvatarsPage = ({}: AvatarsPageProps) => {
  const [avatars, setAvatars] = useState({});

  useEffect(() => {
    return setAvatars(seedDataAvatars);
  }, []);

  return <Box p={2}>Avatars multiple</Box>;
};
