import type { NextPage } from "next";
import { Box, GridItem, Text } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Box w="100%" h="1280px" bg="gray">
      <Text fontSize="xl" color="white">
        Hello world
      </Text>
      {/* Grid */}
      <Text fontSize="xl" color="white">
        Grid Sample
      </Text>
      <Grid templateColumns="repeat(5, 1fr)" gap={6} ml={2} mr={2}>
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
      </Grid>
    </Box>
  );
};

export default Home;
