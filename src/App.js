import { Routes, Route } from "react-router-dom";
import { Center } from "@chakra-ui/react";
import Users from "./pages/Users";
import Home from "./pages/Home";
import NotFound from "./pages/404";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Center as="main">
        <Routes>
          <Route exact path="/" element={<Home />}>
            <Route path="/users" element={<Users />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Center>
    </>
  );
}

export default App;
