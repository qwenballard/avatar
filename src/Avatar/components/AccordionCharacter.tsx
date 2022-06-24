import {
  Avatar,
  Center,
  LinkBox,
  LinkOverlay,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { AvatarType } from '../avatars';

interface AccordionCharacterProps {
  allies?: AvatarType[] | undefined;
  enemies?: AvatarType[] | undefined;
}

export const AccordionCharacter = ({
  allies,
  enemies,
}: AccordionCharacterProps) => {
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
