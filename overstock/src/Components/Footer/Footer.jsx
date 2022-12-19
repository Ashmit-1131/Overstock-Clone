import { Box ,Grid, Flex,Image} from "@chakra-ui/react";
import { useEffect } from "react";

import data from "./FooterData.json";
import SubFooter from "./SubFooter";

export default function Footer(){

    return(
        <Box width="100%">
        <Box p='10px' bg="#545658" color={"white"}>
            <Grid templateColumns="repeat(4,1fr)" gap={"10px"}>
                {data && data.map((item)=>{
                    return (
                        <Box>
                        <Box textStyle={"h1"}>{item.head}</Box>
                        <SubFooter data={item.sub}/>
                        </Box>
                    )
                })}
            </Grid>
        </Box>
        <Flex pt="1rem" pb="1rem" pl="4rem" pr="4rem" textStyle={"h3"} justify="space-between" align={"center"} color={"white"} backgroundColor={"black"}>
            <Box>
                
                <Box>Copyright 2022, Overstock.com,Inc.</Box>
                <Box>799 Coliseum Way Midvale, UT 84047 | 1-800-843-2446</Box>
                
            </Box>
            <Box >
                <Flex gap="20px" >
                    <Box>Privacy Policy</Box>
                    <Box>Terms ans conditions</Box>
                    <Box>*Promotion Terms</Box>
                    <Flex>Ship to : <Image ml="5px" src="https://ak1.ostkcdn.com/img/mxc/intFlag_IN.gif" w="30px"/></Flex>
                </Flex>
            </Box>
        </Flex>
        </Box>
    )
}