import { Button, HStack } from "@chakra-ui/react";

const Pagination = ({
  onPageChange,
  currentPage,
  prevPage,
  nextPage,
  totalNoOfPages,
}) => {
  const getPages = () => {
    const pageNumber = [];
    for (let i = 1; i < totalNoOfPages + 1; i++) {
      pageNumber.push(i);
    }
    return pageNumber;
  };

  return (
    <HStack spacing={2} mt={6}>
      <Button
        size="sm"
        fontSize="sm"
        width="4"
        bg="green.500"
        color="#fff"
        _hover={{
          bg: "green.600",
        }}
        aria-disabled={currentPage === 1 ? true : false}
        disabled={currentPage === 1 ? true : false}
        onClick={prevPage}
      >
        &larr;
      </Button>
      {getPages().map((page) => (
        <Button
          key={page}
          onClick={() => onPageChange(page)}
          size="sm"
          fontSize="sm"
          width="4"
          bg={currentPage === page ? "blue.500" : "gray.200"}
          color={currentPage === page ? "#fff" : "#111"}
          _hover={{
            bg: currentPage === page ? "blue.500" : "",
          }}
        >
          {page}
        </Button>
      ))}
      <Button
        size="sm"
        fontSize="sm"
        width="4"
        bg="green.500"
        color="#fff"
        _hover={{
          bg: "green.600",
        }}
        aria-disabled={currentPage === totalNoOfPages ? true : false}
        disabled={currentPage === totalNoOfPages ? true : false}
        onClick={nextPage}
      >
        &rarr;
      </Button>
    </HStack>
  );
};

export default Pagination;
