
import {Box, Button, Checkbox, FormControl, FormLabel, HStack, Input,Text} from "@chakra-ui/react"
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
function SignUp() {
    const toast = useToast();
    const initialvalues = { email: "", password: "" };
    const [inputValues, setInputValues] = useState(initialvalues);
    const [loading, setLoading] = useState(false);
    const [confPassword,setConfPassword] = useState("");
  
    const handleChange = (inp) => {
      const { name, value } = inp.target;
      setInputValues({ ...inputValues, [name]: value });
      console.log(inputValues);
    };
    const handleSignup = (body) => {
      setLoading(true);
    
  
      fetch(`https://overstock-api.onrender.com/register`,{
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res)=>res.json()).then((res)=>{
        if(res.status === "success"){
          succesFunctionSignup()();
          setInputValues({email: "", password: ""});
          setConfPassword("");
        }else{
          errorFunctionSignup()();
  
        }
      }).catch(() => errorFunctionSignup()())
        .finally(() => setLoading(false));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      handleSignup(inputValues);
    };
    const succesFunctionSignup = () => {
      return () =>
        toast({
          title: "Account Created Successfully",
          description: "Please Login and Start Shopping",
          status: "success",
          duration:0,
          isClosable: true,
          position: "bottom-right"
        });
    };
    const errorFunctionSignup = () => {
      return () =>
        toast({
          title: "Account Not Created",
          description: "Please Enter Valid Email or Password",
          status: "error",
          duration: 0,
          isClosable: true,
          position: "bottom-right"
        });
    };
  
    const { email, password } = inputValues;



    return (<>
        <Box pl={10} pr={10} pb={10} borderRight="1px solid #EAEAEA">
            
            <FormControl>
                <FormLabel fontSize={14} color="#626669" fontWeight={400} >Email Address*</FormLabel>
                <Input type="email" placeholder="Email" fontSize={12}
                name="email"
                onChange={handleChange}
                value={inputValues.email}
                isRequired
                isInvalid={inputValues.email.includes("@",".com") || inputValues.email =="" ? false : true}
                
               />
            </FormControl>
            <HStack spacing={5} mt="10px">
                <FormControl>
                    <FormLabel fontSize={14} color="#626669" fontWeight={400}>Create password*</FormLabel>
                    <Input type="password" placeholder="Password" fontSize={12}
                    name="password"
                    onChange={handleChange}
                    value={inputValues.password}
                    isRequired
                  />
                </FormControl>
                <FormControl >
                    <FormLabel fontSize={14} color="#626669" as={"span"} fontWeight={400}>Confirm password*</FormLabel>
                    <Input type="password" placeholder="Password" fontSize={12}
                    name="confirm"
                    onChange={(e)=>setConfPassword(e.target.value)}
                    value={confPassword}
                    isRequired
                  />
                </FormControl>

            </HStack>
            <Box border={"1px solid #EAEAEA"} p={2} borderRadius="5px" fontSize={12} color="#626669" mt="20px">
                <Checkbox mr="4px"/><Text as={"span"}>Sign up today for exclusive offers from Overstock.com delivered right to your inbox**</Text>
            </Box>
            <Button colorScheme={"blue"} mt="20px" mb="20px" width={"326px"} height="46px" fontWeight={"bold"}
              onClick={handleSubmit}
              disabled={email === "" || password === "" || !email.includes("@",".com") || confPassword.length < 5 || password.length < 5 || password !=confPassword}
              isLoading={loading}
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
    </>);
}
export default SignUp;