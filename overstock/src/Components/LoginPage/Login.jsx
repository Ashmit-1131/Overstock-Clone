import {Box, Button, FormControl, FormLabel, Input} from "@chakra-ui/react"
import { useContext, useState } from "react"
import { AuthContext } from "../AuthContextt/AuthContext";
import { login } from "../AuthContextt/AuthInit";


export default function Login(){
    
    const {person,Authdispatch} = useContext(AuthContext);
    const [user,setUser] = useState({email:"",password:""});
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setUser({...user,[name]:value})
    }
    const handleSubmit = ()=>{

        if(person.email === user.email && person.password===user.password){
            Authdispatch({...login,user})
            alert("login succesful")
        }else{
            alert ("invalid credentials");
        }
        Array.from(document.querySelectorAll("input")).forEach((input)=>input.value="")
    }

    return (<>
        <Box pl={10} pr={10} pb={10}>
            
            <FormControl >
                <FormLabel fontSize={14} color="#626669" fontWeight={400}>Email Address*</FormLabel>
                <Input type="text" name="email" placeholder="Email" fontSize={12} onChange={handleChange}/>
            </FormControl>
            <FormControl mt="10px">
                <FormLabel fontSize={14} color="#626669" fontWeight={400}>Password*</FormLabel>
                <Input type="password" name="password" placeholder="Password" fontSize={12} onChange={handleChange}/>
            </FormControl>
            <Button colorScheme={"green"} 
            mt="20px" 
            width={"326px"} 
            height="46px" 
            fontWeight={"bold"}
            onClick={handleSubmit}
            >Sign In</Button>
            <Box mt={"20px"} textDecoration="underline 1px solid blue" color="#0272a2" fontWeight={700}>Forgot Your Password?</Box>
        </Box>
    </>)
}