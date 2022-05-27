import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { seedDataAvatars } from "../../seed";
import { CharacterCard } from "../components/CharacterCard";

interface AvatarsPageProps {}

type AvatarType = {
  allies?: string[];
  enemies?: string[];
  _id: string;
  photoUrl?: string;
  name: string;
  gender?: string;
  eye?: string;
  hair?: string;
  skin?: string;
  love?: string;
  weapon?: string;
  profession?: string;
  position?: string;
  predecessor?: string;
  affiliation?: string;
  first?: string;
};

export const AvatarsPage = ({}: AvatarsPageProps) => {
  const [avatars, setAvatars] = useState < Array<AvatarType>>([]);

  useEffect(() => {
    return setAvatars(seedDataAvatars);
  }, []);

  return (
    <>
    <p>placeholder</p>
      <Box p={2}>
        { avatars.map(() => {
          return <CharacterCard />
        })}
      </Box>
    </>
  );
};
