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
        Grid Sample1
      </Text>
      <Grid templateColumns="repeat(5, 1fr)" gap={6} ml={2} mr={2}>
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
      </Grid>
      <Text fontSize="xl" color="white">
        Grid Sample2
      </Text>
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
        ml={2}
        mr={2}
      >
        <GridItem rowSpan={2} colSpan={1} bg="tomato" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={4} bg="tomato" />
      </Grid>
      <Text fontSize="xl" color="white">
        Grid Sample3
      </Text>
      <Grid templateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem colSpan={2} h="10" bg="tomato" />
        {/* https://chakra-ui.com/docs/components/grid#starting-and-ending-lines */}
        <GridItem colStart={4} colEnd={6} h="10" bg="papayawhip" />
      </Grid>
      {/* TODO モバイルの切り替えはどうやる？ */}
      <Text fontSize="xl" color="white">
        Grid Sample4
      </Text>
      <Grid
        templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"150px 1fr"}
        h="200px"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" bg="orange.300" area={"header"}>
          Header
        </GridItem>
        <GridItem pl="2" bg="pink.300" area={"nav"}>
          Nav
        </GridItem>
        <GridItem pl="2" bg="green.300" area={"main"}>
          Main
        </GridItem>
        <GridItem pl="2" bg="blue.300" area={"footer"}>
          Footer
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Home;
