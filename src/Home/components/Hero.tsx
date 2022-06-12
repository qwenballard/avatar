import {
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export const Hero = () => {
  return (
    <Stack direction={{ base: "column", md: "row" }}>
      <Flex py={8} px={0} flex={1} align={"center"} justify={"center"}>
        <Stack px={2} spacing={5} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "1xl", md: "2xl", lg: "3xl" }}>
            <Text
              as={"span"}
              position={"relative"}
            >
              &#8220;Sometimes life is like this tunnel. You can’t always see
              the light at the end of the tunnel, but if you keep moving, you
              will come to a better place.&#8221;
            </Text>
            <br />{" "}
            <Text color={"blue.400"} as={"span"}>
              - Iroh
            </Text>{" "}
          </Heading>
          <HStack
            direction={{ base: "row" }}
            spacing="20px"
            justifyContent="center"
          >
            <Button
              as="a"
              href="https://youtube.com/c/TeamAvatar"
              width="125px"
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              ATLA Youtube
            </Button>
            <Button
              as="a"
              href="https://avatar.fandom.com"
              width="125px"
              rounded={"full"}
            >
              ATLA Wiki
            </Button>
          </HStack>
        </Stack>
      </Flex>
      <Flex flex={1} mx={0} justifyContent="center">
        <Image
          alt={"Login Image"}
          objectFit={"contain"}
          src={
            "fournations.gif"
          }
          fallbackSrc="/avatarplaceholder.png"
        />
      </Flex>
    </Stack>
  );
};
