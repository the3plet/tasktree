import {
  Center,
  Container,
  Stack,
} from "@chakra-ui/react";
import packageData from "./Data";
import Task from "./components/Task";
import HService from "./components/HService";

const Home = () => {
  const rootTask = packageData.servicePackageTasks.filter(
    (tasks) => tasks.parentServicePackageTaskId == null
  );

  return (
    <Center height="100vh" width="100vw">
      <Stack w="50vw" spacing={4} p={6}  bg="white" borderRadius="lg">
        <HService/>
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
