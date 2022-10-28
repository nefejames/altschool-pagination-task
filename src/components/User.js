import { Box, Image, Text } from "@chakra-ui/react";

export default function User({ user }) {
  return (
    <Box>
      <Image
        boxSize="150px"
        objectFit="cover"
        borderRadius="full"
        src={user.picture.large}
        alt={user.name.first}
      />
      <Box mt="2" textAlign="center">
        <Text as="span" key={user.email}>
          {user.name.first} {user.name.last}
        </Text>
      </Box>
    </Box>
  );
}
