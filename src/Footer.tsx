import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
  Image,
  Box,
  useColorModeValue,
  Flex
} from "@chakra-ui/react";
import * as React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Footer = () => (
  <Box
    as="footer"
    role="contentinfo"
    px={10}
    py={{ base: "2", md: "2" }}
    bg={useColorModeValue("gray.100", "gray.900")}
  >
    <Stack spacing={{ base: "4", md: "5" }}>
      <Stack justify="space-between" direction="row" align="center">
        <Image
          src="/avatarlogo.png"
          alt="ATLA Logo"
          htmlHeight={1}
          htmlWidth={75}
        />
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="GitHub"
            icon={<FaGithub fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </Stack>
      {/* <Flex mt={5}>
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} A website built for fun!
        </Text>
      </Flex> */}
    </Stack>
  </Box>
);
