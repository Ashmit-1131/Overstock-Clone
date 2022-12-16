import React from 'react'
import { Box,Image,Button,HStack,SimpleGrid,Text,Heading,Link,Flex,Spacer,VStack  } from '@chakra-ui/react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import {ChevronDownIcon} from '@chakra-ui/icons'
import { BsChevronDown,BsStarFill,BsStarHalf,BsStar } from "react-icons/bs";

const ProductPg = () => {
    const[product,setProduct] = useState([])

let four =[<BsStarFill  size='15px'/>,<BsStarFill size='15px'/>,<BsStarFill size='15px'/>,<BsStarFill size='15px'/>,<BsStar size='15px'/>]
let five=[<BsStarFill  size='15px'/>,<BsStarFill size='15px'/>,<BsStarFill size='15px'/>,<BsStarFill size='15px'/>,<BsStarFill  size='15px'/>]
let fournhalf = [<BsStarFill  size='15px'/>,<BsStarFill size='15px'/>,<BsStarFill size='15px'/>,<BsStarFill size='15px'/>,<BsStarHalf/>]

let three = [<BsStarFill  size='15px'/>,<BsStarFill size='15px'/>,<BsStarFill size='15px'/>,<BsStar size='15px'/>,<BsStar size='15px'/>]

let getdata = async() => {
 let res = await axios.get('http://localhost:4000/product')
 console.log(res.data)
 setProduct(res.data)
}
 

useEffect(()=> {
  getdata()
},[])

  return (
     <Box>
        <Flex w='98%' m='auto'>
            <Box w='25%' >
                text
            </Box>
            <SimpleGrid columns={{base:'2',md:'3'}} spacing='15px' w='75%' >
                {product.map((ele)=>(
                    <Box key={ele.id} border='1px solid gray'>
                         <Box w='100%' >
                         <Image w='100%' h='90%' src={ele.image} alt={ele.image}/>
                         </Box>
                         <Flex p='10px' textAlign='left' gap='5px'>
                            <Box fontSize='lg'>
                            {ele.rating !==""?<Text as='b' color='red'>Sale Start at INR {ele.price}</Text>:<Text as='b'>Starting at INR {ele.price}</Text>}
                             <Flex gap='5px'>{fournhalf}</Flex>
                            <Text fontSize='sm'>{ele.name}</Text>
                            </Box>
                                <VStack>
                                <Text>Details</Text>
                                <BsChevronDown/>
                                </VStack>
                         </Flex>
                    </Box>
                ))}
            </SimpleGrid>
        </Flex>
     </Box>
  )
}

export default ProductPg
