import { Center, HStack, chakra } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Header() {
  const ChakraLink = chakra(Link);

  return (
    <chakra.header bg="blue.400" w="99vw" color="#fff">
      <chakra.nav>
        <Center h="8vh">
          <HStack spacing={5}>
            <ChakraLink to="/" fontSize="lg">
              Home
            </ChakraLink>
            <ChakraLink to="/users" fontSize="lg">
              Users
            </ChakraLink>
          </HStack>
        </Center>
      </chakra.nav>
    </chakra.header>
  );
}
