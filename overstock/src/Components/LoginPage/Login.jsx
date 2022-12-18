import {Box, Button, FormControl, FormLabel, Input} from "@chakra-ui/react"
import { useToast } from "@chakra-ui/react";
import {useState } from "react"
import { useDispatch } from "react-redux";
import { loginSignupSuccess } from "./Redux/action";
import { Navigate, useNavigate } from "react-router-dom";
const Login = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialvalues = { email: "", password: "" };
  const [inputValues, setInputValues] = useState(initialvalues);
  const [loading, setLoading] = useState(false);

  const handleChange = (inp) => {
    let { name, value } = inp.target;
    setInputValues({ ...inputValues, [name]: value });
    console.log(inputValues);
  };
  const handleLogin = () => {
    setLoading(true);
    

    fetch(`https://overstock-api.onrender.com/login`,{
      method: "POST",
      body: JSON.stringify(inputValues),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res)=>res.json()).then((res)=>{
      if(res.data.token){
            succesFunction()();
            dispatch(loginSignupSuccess(res.data.token));
            navigate("/furniture");
      }else{
            errorFunction()();
      }
    }).catch((err)=>{
      errorFunction()();
      console.log(err);
    }).finally(() => {
        setLoading(false);
    });
  };

  const { email, password } = inputValues;
  const succesFunction = () => {
    return () =>
      toast({
        title: "Login Successful",
        description: "You are being redirected to Products",
        status: "success",
        duration: 0,
        isClosable: true,
        position: "bottom-right"
      });
  };

  const errorFunction = () => {
    return () =>
      toast({
        title: "Wrong Credentials",
        description: "Please provide a valid Email or Password",
        status: "error",
        duration: 0,
        isClosable: true,
        position: "bottom-right"
      });
  };


    return (<>
        <Box pl={10} pr={10} pb={10}>
            
            <FormControl >
                <FormLabel fontSize={14} color="#626669" fontWeight={400}>Email Address*</FormLabel>
                <Input type="text" name="email" placeholder="Email" fontSize={12} 
             onChange={handleChange}
             value={inputValues.email}
                />
            </FormControl>
            <FormControl mt="10px">
                <FormLabel fontSize={14} color="#626669" fontWeight={400}>Password*</FormLabel>
                <Input type="password" name="password" placeholder="Password" fontSize={12}
                  onChange={handleChange}
                  value={inputValues.password}
                />
            </FormControl>
            <Button colorScheme={"green"} 
            mt="20px" 
            width={"326px"} 
            height="46px" 
            fontWeight={"bold"}
            onClick={handleLogin}
            disabled={email === "" || password === ""}
            isLoading={loading}
            >Sign In</Button>
            <Box mt={"20px"} textDecoration="underline 1px solid blue" color="#0272a2" fontWeight={700}>Forgot Your Password?</Box>
        </Box>
    </>)
}
export default Login;