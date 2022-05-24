import CurrentTotals from "./CurrentTotal"
import { Stack,Box,Flex } from "@chakra-ui/react"
import Bike from "./Bike"
import Bike1 from "../assets/Bike1.jpeg"
import Bike2 from "../assets/Bike2.jpeg"
import Bike3 from "../assets/Bike3.jpeg"
const Dashboard = () => {
    return(

        <Stack 
        as = {Box}
        textAlign={"center"}
        spacing={{base: 8, md:14}}
        py={{base: 20, md:0}}>
       <CurrentTotals/>
       <Flex justifyContent={'center'} alignItems={'center'}>
           <Bike bike={Bike1}/>
       
           <Bike bike={Bike3}/>
           
       </Flex>
       </Stack>
    )
}
export default Dashboard