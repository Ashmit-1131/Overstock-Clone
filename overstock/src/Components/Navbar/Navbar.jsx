import { Box , Flex , Image , Input ,Link,HStack,Text,Spacer,Button} from "@chakra-ui/react";
import { IoIosSearch , IoIosHeartEmpty} from "react-icons/io";
import { BsPerson } from "react-icons/bs";

import { FiShoppingCart } from "react-icons/fi"




let arr=["Furniture","Rugs","Decor","Bedding","Home Improvement","Kitchen","Outdoor","Lighting",
"Kids & Baby","Gifts","More","|","Holidays","Sales & Deals"];

export default function Navbar(){
    

    return(
        <Box gap="19px"  position='fixed' zIndex='9999' borderBottom="1px solid #EAEAEA" width="100" bg='white' >
                  <Flex borderBottom="1px solid #EAEAEA" pl="2rem"  align={"center"}>
                
                <Text as="span" fontSize={"13px"} color="gray">Ship to : </Text>
                <Image boxSize="25px" src="https://ak1.ostkcdn.com/img/mxc/intFlag_IN.gif"
                borderLeftRadius="150%"
                borderRightRadius="150%"/><Text fontSize={"13px"} fontWeight="bold" color="blackAlpha.700">INDIA</Text>
            
    </Flex>

            <HStack p='10px' pl='10px' pr='10px' gap="20px" borderBottom="1px solid #EAEAEA">
                <Box w='12%'  >
                <Image m='auto' src='https://ml.globenewswire.com/Resource/Download/000dbefd-804d-44e3-8fde-0e555eebea8c' alt='overstockImg' />
                </Box>
                <Flex w='60%'>
                    <Input placeholder="Search...everything you finds for free" size='25px' p='5px' borderTopRightRadius='0px'/>
                    <Link to="/products"><Text  bg="#ff1f2c" color="white" p='6px' fontSize='25px'  borderBottomRightRadius="5px" borderTopRightRadius="5px">{<IoIosSearch size='25px' />}</Text></Link>
                </Flex>
               <Spacer/>
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
                <Button bg='black' color='white' borderRadius='none' pl='10px' pr='10px'>Checkout</Button>
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