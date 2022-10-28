import { useState, useEffect } from "react";
import { Box, SimpleGrid, Spinner } from "@chakra-ui/react";
import Pagination from "../components/Pagination";
import User from "../components/User";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalNoOfPages = 4;

  async function fetch10Users() {
    setLoading(true);
    const response = await fetch(`https://randomuser.me/api/?results=24`);
    const data = await response.json();
    setUsers(data.results);
    setLoading(false);
  }

  useEffect(() => {
    fetch10Users();
  }, []);

  const getPaginationData = (arr, currentPage = 1, usersPerPage) => {
    const start = currentPage * usersPerPage - usersPerPage;
    const data = [...arr].splice(start, usersPerPage);
    return data;
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const prevPage = () => {
    if (currentPage === 1) {
      return;
    }

    setCurrentPage((prev) => prev - 1);
  };

  const nextPage = () => {
    if (currentPage >= totalNoOfPages) {
      return;
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const filteredUsers = getPaginationData(users, currentPage, 6);

  if (loading) return <Spinner size="xl" />;

  return (
    <Box>
      <SimpleGrid mt="20" columns={[1, 2, 3]} spacingX="10" spacingY="12">
        {filteredUsers.map((user) => (
          <User user={user} key={user.email} />
        ))}
      </SimpleGrid>

      <Pagination
        onPageChange={handlePageChange}
        currentPage={currentPage}
        prevPage={prevPage}
        nextPage={nextPage}
        totalNoOfPages={totalNoOfPages}
      />
    </Box>
  );
}
