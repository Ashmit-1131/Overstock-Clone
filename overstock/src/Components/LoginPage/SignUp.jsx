import {Box, Button, Checkbox, FormControl, FormLabel, HStack, Input,Text} from "@chakra-ui/react"

export default function SignUp(){

 return (<>
        <Box pl={10} pr={10} pb={10} borderRight="1px solid #EAEAEA">
            
            <FormControl>
                <FormLabel fontSize={14} color="#626669" fontWeight={400} >Email Address*</FormLabel>
                <Input type="email" placeholder="Email" fontSize={12}
                name="email"
               />
            </FormControl>
            <HStack spacing={5} mt="10px">
                <FormControl>
                    <FormLabel fontSize={14} color="#626669" fontWeight={400}>Create password*</FormLabel>
                    <Input type="password" placeholder="Password" fontSize={12}
                    name="password"
                   />
                </FormControl>
                <FormControl >
                    <FormLabel fontSize={14} color="#626669" as={"span"} fontWeight={400}>Confirm password*</FormLabel>
                    <Input type="password" placeholder="Password" fontSize={12}
                    name="confirm"
                   />
                </FormControl>

            </HStack>
            <Box border={"1px solid #EAEAEA"} p={2} borderRadius="5px" fontSize={12} color="#626669" mt="20px">
                <Checkbox mr="4px"/><Text as={"span"}>Sign up today for exclusive offers from Overstock.com delivered right to your inbox**</Text>
            </Box>
            <Button colorScheme={"blue"} mt="20px" mb="20px" width={"326px"} height="46px" fontWeight={"bold"}
            >Create Account</Button>
            <br />
            <hr color="#EAEAEA"/>
            
            <Button mt="20px" width={"326px"} height="46px" fontWeight={"bold"} color="#444444"
           
            >Continue as Guest</Button>
            <Box mt="20px">
                <Text as="span"> By creating an account or continuing as a Guest, you agree to our </Text>
                 
                <Text as="span" fontWeight={700} textDecoration="underline 1px solid black">Terms & Conditions</Text>
                   <Text as="span"> and </Text>
                <Text as="span" fontWeight={700} textDecoration="underline 1px solid black">Privacy Policy.</Text> 
            </Box>
            <br />
            <Box> <Text as="span" fontWeight={700} textDecoration="underline 1px solid black">Terms & Conditions</Text> 
              <Text as="span"> | </Text> 
            <Text as="span" fontWeight={700} textDecoration="underline 1px solid black">Privacy Policy</Text></Box>
            <Box>**You can unsubsribe at any time</Box>
        </Box>
    </>)
}