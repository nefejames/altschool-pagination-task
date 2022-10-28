import { Box, Center } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <Box>
      <Center h="92vh">
        <Outlet />
      </Center>
    </Box>
  );
}
