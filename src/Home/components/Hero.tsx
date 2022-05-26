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
import heroLogo from "../../assets/images/ramen1.gif";

export const Hero = () => {
  return (
    <Stack direction={{ base: "column", md: "row" }}>
      <Flex py={8} px={0} flex={1} align={"center"} justify={"center"}>
        <Stack px={2} spacing={5} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "1xl", md: "2xl", lg: "3xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              // _after={{
              //   content: "''",
              //   width: "full",
              //   height: useBreakpointValue({ base: "20%", md: "30%" }),
              //   position: "absolute",
              //   bottom: 1,
              //   left: 0,
              //   bg: "blue.400",
              //   zIndex: -1,
              // }}
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
              // as="a"
              // href="youtube.com/c/TeamAvatar"
              width="125px"
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              <Link href="https://youtube.com/c/TeamAvatar" isExternal>
                ATLA Youtube
              </Link>
            </Button>
            <Button width="125px" rounded={"full"}>
              <Link href="https://avatar.fandom.com" isExternal>
                ATLA Wiki
              </Link>
            </Button>
          </HStack>
        </Stack>
      </Flex>
      <Flex flex={1} mx={0} justifyContent="center">
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          }
          fallbackSrc={heroLogo}
        />
      </Flex>
    </Stack>
  );
};
