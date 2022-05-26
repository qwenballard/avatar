import { useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { Center, Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

export const SearchBar = () => {
  const [character, setCharacter] = useState<string>("");
  const handleChange = (event: { target: { value: string } }) =>
    setCharacter(event.target.value);

  return (
    <Box>
      <Center>
        <Box m={10} width="sm" height="auto" justifyContent="center">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input
              type="text"
              placeholder="Search for character"
              value={character}
              onChange={handleChange}
            />
          </InputGroup>
        </Box>
      </Center>
      <Center>
      </Center>
    </Box>
  );
};
