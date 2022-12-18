import { Box, SimpleGrid ,Flex,Text,Image} from "@chakra-ui/react";
import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";

let foot = ["Return Policy","Contact Customer Care","FAQ,Privacy Policy",
    "Site User Terms & Conditions*","© 2022 Overstock.com All Rights Reserved","We self-certify compliance with:"]

export default function Account(){

    return (<Box pt='150px'>
        <Flex justifyContent={"center"} pt={10} pb={10}>
            <SimpleGrid columns={2} w="60%">
                <Box fontSize={20} textAlign="left" color={"#444444"} pl={10} fontWeight={"bold"}>Create Account</Box>
                <Box fontSize={20} textAlign="left" color={"#444444"} pl={10} fontWeight={"bold"}>Sign In</Box>
            </SimpleGrid>
        </Flex>
        <Flex justifyContent={"center"} textStyle={"h4"}>
            <SimpleGrid  columns={2} w="60%">
                <Box><SignUp/></Box>
                <Box><Login/></Box>
            </SimpleGrid>
        </Flex>
        <br/>
        <br/>
        <Box w="70%" margin={"auto"}>
            {foot && foot.map((item)=>{
                return <Text fontSize={12} textAlign="left" color="#2f3337" mb="4px">{item}</Text>
            })}
            <Image src="https://ak1.ostkcdn.com/img/mxc/20200630-intl-privacy_shield.png" alt="license" width="171px" h={51}/>
        </Box>
    </Box>)
}