import { Button, Center, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Center>
      <VStack spacing={5}>
        <Text as="h1">Error. Page not found</Text>
        <Button bg="blue.300">
          <Link to="/users">Check out the users</Link>
        </Button>
      </VStack>
    </Center>
  );
}
