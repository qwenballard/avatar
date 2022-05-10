import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export const Hero = () => {
  return (
    <Stack minH={"50vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
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
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              Youtube
            </Button>
            <Button rounded={"full"}>Avatar Wiki</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          }
        />
      </Flex>
    </Stack>
  );
}
