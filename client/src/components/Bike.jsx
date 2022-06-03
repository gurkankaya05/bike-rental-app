import { Button,Box,Image,Text,Stack } from "@chakra-ui/react"
import { useContext } from "react"

import { BlockchainContext } from "../context/Blockchaincontext"
const Bike = ({bike}) =>{
const { checkIn , checkOut} = useContext(BlockchainContext);
    return(
        <Box boxSize='lg' mx={6}>
            <Image src={bike} mb={1} />
            <Text>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            </Text>
            <Stack spacing={2} direction={'row'} align={'center'} justify={'center'} mt={5}>
                <Button
                onClick={checkOut}
                m={2}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'orange.300'}
                _hover={{
                    bg: 'orange.400',
                }}>
                    Check Out
            </Button>
            <Button
            onClick={checkIn}
                m={2}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'orange.400'}
                _hover={{
                    bg: 'orange.500',
                }}>
                    Check In
            </Button>
            </Stack>
        </Box>
    )
}
export default Bike