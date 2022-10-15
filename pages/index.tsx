import type { NextPage } from "next";
import { Box, Text } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Box w="100%" h="1280px" bg="gray">
      <Text fontSize="xl" color="white">
        Hello world
      </Text>
    </Box>
  );
};

export default Home;
