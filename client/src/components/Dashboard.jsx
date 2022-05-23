import CurrentTotals from "./CurrentTotal"
import { Stack,Box,Flex } from "@chakra-ui/react"
import Bike from "./Bike"
const Dashboard = () => {
    return(

        <Stack 
        as = {Box}
        textAlign={"center"}
        spacing={{base: 8, md:14}}
        py={{base: 20, md:3}}>
       <CurrentTotals/>
       <Flex justifyContent={'center'} alignItems={'center'}>
           <Bike/>
           <Bike/>
           
       </Flex>
       </Stack>
    )
}
export default Dashboard