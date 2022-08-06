import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from '@chakra-ui/react';
import { AvatarType } from '../Avatar/type';
import { AccordionCharacterDropDown } from './AccordionCharacterDropDown';

interface AlliesOrEnemiesAccordionProps {
  allies?: AvatarType[] | undefined;
  enemies?: AvatarType[] | undefined;
}

/*
  This accordion component contains two accordionCharacterDropDown
  components which renders the separate allies and enemies
  dropdown components when toggled
*/
export const AlliesOrEnemiesAccordion = ({
  allies,
  enemies,
}: AlliesOrEnemiesAccordionProps) => {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            <Text
              fontSize={{
                base: '16px',
                lg: '18px',
              }}
              //TODO: useColorModeValue("yellow.500", "yellow.300")
              color={'yellow.500'}
              fontWeight={'500'}
              textTransform={'uppercase'}
              mb={'4'}
            >
              Allies:
            </Text>
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          {allies?.length !== 0 ? (
            <AccordionCharacterDropDown allies={allies} />
          ) : (
            <Text>Has no allies</Text>
          )}
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Text
                fontSize={{
                  base: '16px',
                  lg: '18px',
                }}
                //TODO: useColorModeValue("yellow.500", "yellow.300")
                color={'yellow.500'}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}
              >
                Enemies:
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          {enemies?.length !== 0 ? (
            <AccordionCharacterDropDown enemies={enemies} />
          ) : (
            <Text>Has no enemies</Text>
          )}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
