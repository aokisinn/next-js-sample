import type { NextPage } from "next";
import { Box, GridItem, Text } from "@chakra-ui/react";
import {
  Grid,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Box w="100%" h="1280px" bg="gray">
      <Text fontSize="xl" color="white" pl={4}>
        Sample List
      </Text>
      <UnorderedList color="white" pl={8}>
        <ListItem>
          <Link href="/sample/grid">Sample Grid</Link>
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default Home;
