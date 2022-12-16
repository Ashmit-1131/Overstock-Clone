import {Box, Button, FormControl, FormLabel, Input} from "@chakra-ui/react"



export default function Login(){
   
    

    return (<>
        <Box pl={10} pr={10} pb={10}>
            
            <FormControl >
                <FormLabel fontSize={14} color="#626669" fontWeight={400}>Email Address*</FormLabel>
                <Input type="text" name="email" placeholder="Email" fontSize={12} />
            </FormControl>
            <FormControl mt="10px">
                <FormLabel fontSize={14} color="#626669" fontWeight={400}>Password*</FormLabel>
                <Input type="password" name="password" placeholder="Password" fontSize={12} />
            </FormControl>
            <Button colorScheme={"green"} 
            mt="20px" 
            width={"326px"} 
            height="46px" 
            fontWeight={"bold"}
        
            >Sign In</Button>
            <Box mt={"20px"} textDecoration="underline 1px solid blue" color="#0272a2" fontWeight={700}>Forgot Your Password?</Box>
        </Box>
    </>)
}