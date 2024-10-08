import { Center, HStack, Stack, Text} from "@chakra-ui/react"
import packageData from "./Data"
import Task from "./components/Task"
const Home = () => {
  return (
  
   <Center height='100vh'>
    <Stack>

<Text>{packageData.title}</Text>
<Text>{packageData.description}</Text>

    <HStack>

    <Text>Price</Text>
    <Text>{packageData.price}</Text>
    <Text>{packageData.currency}</Text>
    </HStack>
<Task/>
    </Stack>
   </Center>
 
  )
}

export default Home