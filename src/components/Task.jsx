/* eslint-disable react/prop-types */
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
  Divider,
  Alert,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import packageData from "../Data";

const Task = ({ task, depth = 0 }) => {
  const childTasks = packageData.servicePackageTasks.filter(
    (eachTasks) => eachTasks.parentServicePackageTaskId === task.id
  );

  return (
    <Accordion allowToggle>
      <AccordionItem border="none">
        <h2>
          <AccordionButton
            _expanded={{ borderLeft: "4px", borderLeftColor: "#D3D3D3" }}
            borderBottom="1px"
            borderColor="gray.200"
            p={4}
          >
            <Box
              as="span"
              flex="1"
              textAlign="left"
              fontWeight="semibold"
              fontSize="lg"
            >
              {task.title}
            </Box>
            <Text fontSize="sm" color="gray.500" ml={2}>
              {task.estimatedMinutes} min
            </Text>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} pl={6}>
          {task.description ? (
            <Text
              dangerouslySetInnerHTML={{ __html: task.description }}
              pl={4}
              color="gray.700"
            />
          ) : (
            <Alert status="error" rounded="md" h="10" bg='#d3d3d3'>
              <AlertIcon color='grey' />
              <AlertTitle fontWeight="thin" fontSize="sm" color='#333333'>
                Description not found
              </AlertTitle>
            </Alert>
          )}
          {childTasks.length > 0 && (
            <>
              <Divider my={2} />
              {childTasks.map((childTask) => (
                <Task key={childTask.id} task={childTask} depth={depth + 1} />
              ))}
            </>
          )}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Task;
