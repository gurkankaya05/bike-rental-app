import { Button,Box,Image,Text,Stack } from "@chakra-ui/react"
const Bike = ({bike}) =>{
    return(
        <Box boxSize='lg' mx={6}>
            <Image src={bike} mb={1} />
            <Text>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            </Text>
            <Stack spacing={2} direction={'row'} align={'center'} justify={'center'} mt={5}>
                <Button
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