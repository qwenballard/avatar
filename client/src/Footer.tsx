import {
  Box,
  ButtonGroup,
  IconButton,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import * as React from 'react';
import { FaGithub } from 'react-icons/fa';

export const Footer = () => (
  <Box
    position="fixed"
    bottom="0"
    left="0"
    right="0"
    as="footer"
    role="contentinfo"
    px={10}
    py={{ base: '2', md: '2' }}
    bg={useColorModeValue('gray.100', 'gray.900')}
  >
    <Stack spacing={{ base: '4', md: '5' }}>
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
            href="https://github.com/qwenballard"
            aria-label="GitHub"
            icon={<FaGithub fontSize="1.25rem" />}
          />
        </ButtonGroup>
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} A website built for fun!
        </Text>
      </Stack>
    </Stack>
  </Box>
);
