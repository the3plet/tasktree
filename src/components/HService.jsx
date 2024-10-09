import { Box, Container, Divider, HStack, Text } from "@chakra-ui/react";
import packageData from "../Data";

const HService = () => {
  return (
    <Container>
      <Text fontSize="3xl" fontWeight="bold" color="gray.800">
        {packageData.title}
      </Text>
      <Box>
        <Text fontSize="lg" color="gray.600">
          {packageData.description}
        </Text>
        <HStack spacing={1} borderBottom="2px" borderColor="gray.200" pb={2}>
          <Text color="gray.500">Price:</Text>
          <Text fontSize="lg" fontWeight="bold" color="gray.500">
            {packageData.price.toFixed(2)}
          </Text>
          <Text fontSize="lg" color="gray.500">
            {packageData.currency}
          </Text>
        </HStack>
      </Box>
      <Divider />
    </Container>
  );
};

export default HService;
