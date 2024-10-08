/* eslint-disable react/prop-types */
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import packageData from "../Data";

const Task = ({ task, depth = 0 }) => {
  const childTasks = packageData.servicePackageTasks.filter(
    (eachTasks) => eachTasks.parentServicePackageTaskId == task.id
  );

  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              {task.title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          {task.description ? (
            <Text dangerouslySetInnerHTML={{ __html: task.description }}></Text>
          ) : null}
          {childTasks.map((childtask) => (
            <Task key={childtask.id} task={childtask} depth={depth + 1} />
          ))}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
export default Task;
