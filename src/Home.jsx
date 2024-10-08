import {
  Center,
  Container,
  HStack,
  Stack,
  Text,
  Box,
  Divider,
} from "@chakra-ui/react";
import packageData from "./Data";
import Task from "./components/Task";

const Home = () => {
  const rootTask = packageData.servicePackageTasks.filter(
    (tasks) => tasks.parentServicePackageTaskId == null
  );

  return (
    <Center height="100vh" width="100vw">
      <Stack w="50vw" spacing={4} p={6}  bg="white" borderRadius="lg">
        <Text fontSize="3xl" fontWeight="bold" color="gray.800">
          {packageData.title}
        </Text>
        <Box >
          <Text fontSize="lg" color="gray.600">
            {packageData.description}
          </Text>
          <HStack spacing={1} borderBottom="2px" borderColor="gray.200" pb={2}>
            <Text  color="gray.500">Price:</Text>
            <Text fontSize="lg" fontWeight="bold" color="gray.500">
              {packageData.price.toFixed(2)}
            </Text>
            <Text fontSize="lg" color="gray.500">
              {packageData.currency}
            </Text>
          </HStack>
        </Box>
        <Divider />
        <Container>
          {rootTask.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </Container>
      </Stack>
    </Center>
  );
};

export default Home;
