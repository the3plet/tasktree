import { Center, Container, HStack, Stack, Text } from "@chakra-ui/react";
import packageData from "./Data";
import Task from "./components/Task";
const Home = () => {
  const rootTask = packageData.servicePackageTasks.filter(
    (tasks) => tasks.parentServicePackageTaskId == null
  );
  return (
    <Center height="100vh" width='100vw'>
      <Stack w='50vw'>
        <Text>{packageData.title}</Text>
        <Text>{packageData.description}</Text>
        <HStack>
          <Text>Price</Text>
          <Text>{packageData.price}</Text>
          <Text>{packageData.currency}</Text>
        </HStack>
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
