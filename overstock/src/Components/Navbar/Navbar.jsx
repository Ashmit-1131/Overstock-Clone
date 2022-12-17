import { Box , Flex , Image , Input ,Link,HStack,Text} from "@chakra-ui/react";
import { IoIosSearch , IoIosHeartEmpty} from "react-icons/io";
import { BsPerson } from "react-icons/bs";

import { FiShoppingCart } from "react-icons/fi"




let arr=["Furniture","Rugs","Decor","Bedding","Home Improvement","Kitchen","Outdoor","Lighting",
"Kids & Baby","Gifts","More","|","Holidays","Sales & Deals"];

export default function Navbar(){
    

    return(
        <Box gap="19px" pt="1rem" pl="2.5rem" pr="2rem" pb="0.8rem" borderBottom="1px solid #EAEAEA" width="100" >
                  <Flex borderBottom="1px solid #EAEAEA" pl="2rem"  align={"center"}>
                
                <Text as="span" fontSize={"13px"} mr="0.6rem" color="gray">Ship to : </Text>
                <Image boxSize="25px" src="https://ak1.ostkcdn.com/img/mxc/intFlag_IN.gif"
                borderLeftRadius="150%"
                borderRightRadius="150%"/><Text ml="0.5rem" fontSize={"13px"} fontWeight="bold" color="blackAlpha.700">INDIA</Text>
            
    </Flex>

            <HStack
             gap="20px" pt="1rem" pl="2.5rem" pr="2rem" pb="0.8rem" borderBottom="1px solid #EAEAEA">
                <Link to="/">
                <Image src='https://ak1.ostkcdn.com/img/mxc/OSTK_MAIN_LOGO_20181127KCH.jpg' alt='overstockImg' 
                  
                   w="200px"
                   h="45px"/>

                </Link>
                <Flex>
                    <Input placeholder="Search...everything you finds for free" 
                    w={"990px"} 
                    h="30px" 
                    p="18px"
                    borderBottomRightRadius="0px"
                    borderTopRightRadius="0px"
                    />
                    <Link to="/products"><Text bg="#ff1f2c" color="white" pt="0.4rem" pr="0.4em" pl="0.4rem"
                    h="38px"
                    borderBottomRightRadius="5px"
                    borderTopRightRadius="5px"
                    >{<IoIosSearch style={{fontSize:"27px",fontWeight:"bold"}} />}</Text></Link>
                </Flex>
                <Box >
                    <Link href="/account">
                        <Text ml="10px">{<BsPerson style={{fontSize:"23px"}}/>}</Text>
                        <Text fontSize={"13px"}>Account</Text>
                    </Link>
                </Box>
                <Box>
                    
                    <Text fontSize={{ base: '24px', md: '40px', lg: '56px' }}>{<IoIosHeartEmpty style={{fontSize:"23px"}}/>}</Text>
                    <Text fontSize={"13px"}>Lists</Text>
                </Box>
                <Link to={"/cart"}><Box>
                    <Text mt="6px">
                        {<FiShoppingCart style={{fontSize:"21px"}}></FiShoppingCart>}
                        
                        
                    </Text>
                    <Text 
                        color="grey" 
                        background=""
                        pl="1px" pr="1px"
                        fontWeight={"bold"}
                        marginTop={"-1.5rem"}
                        fontSize={12}
                        borderRadius={20}
                        >2</Text>
                    <Text fontSize={"13px"} mt="3px" mb="1px">Cart</Text>
                </Box></Link>
            </HStack>

    <HStack display={{base:"none",md:"flex"}} gap="10px" pl="1rem" pr="1rem" pt="0.5rem" pb="0.5rem" justify={"space-between"} borderBottom="1px solid #EAEAEA">
                {arr && arr.map((elem,i)=>{
                    let col = "black"

                    if(i===arr.length-1){
                        col = "#c7202c"
                    }
                    if(elem==="|"){
                        col = "#EAEAEA"
                    }
                    return <Link to="/product">
                        <Box color={col} 
                    fontSize="14px" 
                    fontWeight={"normal"}
                    _hover={{textDecoration:`underline 2px solid ${col}`,textUnderlineOffset:"0.7rem"}}>{elem}</Box></Link>
                })}
            </HStack>
        </Box>
  )
}