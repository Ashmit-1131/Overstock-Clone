import {Box,VStack,Image,Stack,ListItem,UnorderedList, Grid,Select,GridItem,TabPanel,Tab,TabList,TabPanels,Tabs,
    Container,Flex,Spacer,Heading,Badge,Link,Text,Divider, HStack,Radio,RadioGroup,Button
} from "@chakra-ui/react"
import {StarIcon} from "@chakra-ui/icons"

import { BiRupee } from "react-icons/bi";
import { useState,useEffect,useRef } from "react"
import { GrFacebookOption,GrTwitter,GrPinterest,GrLinkedin,GrSnapchat } from "react-icons/gr";
import { FcCheckmark } from "react-icons/fc";
import { BsWhatsapp,BsSnapchat } from "react-icons/bs";
import {FcDataProtection,FcShipped,FcMoneyTransfer,FcAssistant} from "react-icons/fc";
import { MdAddShoppingCart } from "react-icons/md";
import {useParams} from "react-router-dom"
import axios from "axios";

import { BsChevronDown,BsStarFill,BsStarHalf,BsStar,BsTextIndentRight } from "react-icons/bs";


const ProductDetail = () => {

const [Item,setItem] = useState([])
const [tabIndex, setTabIndex] = useState(0)

let four =[<BsStarFill  size='20px'/>,<BsStarFill size='20px'/>,<BsStarFill size='20px'/>,<BsStarFill size='20px'/>,<BsStar size='20px'/>]
let five=[<BsStarFill  size='20px'/>,<BsStarFill size='20px'/>,<BsStarFill size='20px'/>,<BsStarFill size='20px'/>,<BsStarFill  size='20px'/>]
let fournhalf = [<BsStarFill  size='20px'/>,<BsStarFill size='20px'/>,<BsStarFill size='20px'/>,<BsStarFill size='20px'/>,<BsStarHalf size='20px'/>]
let two= [<BsStarFill  size='20px'/>,<BsStarFill  size='20px'/>,<BsStar size='20px'/>,<BsStar size='20px'/>,<BsStar size='20px'/>]
let one= [<BsStarFill  size='20px'/>,<BsStar size='20px'/>,<BsStar size='20px'/>,<BsStar size='20px'/>,<BsStar size='20px'/>]
let three = [<BsStarFill  size='20px'/>,<BsStarFill size='20px'/>,<BsStarFill size='20px'/>,<BsStar size='20px'/>,<BsStar size='20px'/>]
let threenhalf= [<BsStarFill  size='20px'/>,<BsStarFill size='20px'/>,<BsStarFill size='20px'/>,<BsStarHalf size='20px'/>,<BsStar size='20px'/>]





const fetchdata = async () => {
  let res = await axios.get('http://localhost:4000/product/10') 
  console.log(res.data)
  setItem([res.data])
}



useEffect(()=> {
   fetchdata ()
},[])

let Addtocart = (id) => {
// let Array = localStorage.getItem("cartdata") || []
// Array.push(id)
// let zip = localStorage.setItem("cartdata",JSON.stringify(Array))
let DataStore=JSON.parse(localStorage.getItem("CartData"))||[];
DataStore.push(id)
localStorage.setItem("CartData",JSON.stringify(DataStore))
}


    return(
         <Box pt='100px' fontSize='14px' w='93%' m='auto' mb='50px'>
           {
               Item && Item.map((element,i)=>{
                    return(
                  
                 <Flex key={i}  gap='20px' direction={{base:'column',md:'row'}} >
                    <Box m='auto' w={{base:'100%',md:'60%'}}   >
                    <Image src={element.image} m='auto' w='90%' ></Image>
                    <Flex overflow='auto' w='90%' m='auto' gap='5px' mt='10px'>
                    <Image src={element.img1} w='20%' p='5px' border='1px solid gray' ></Image>
                    <Image src={element.img2} w='20%' p='5px' border='1px solid gray' ></Image>
                    <Image src={element.img3} w='20%' p='5px' border='1px solid gray' ></Image>
                    <Image src={element.img4} w='20%' p='5px' border='1px solid gray' ></Image>
                    <Image src={element.img5}  w='20%' p='5px' border='1px solid gray'  ></Image>
                    <Image src={element.img6} w='20%' p='5px' border='1px solid gray' ></Image>
                    <Image src={element.img7} w='20%' p='5px' border='1px solid gray' ></Image>
                    <Image src={element.img8} w='20%' p='5px' border='1px solid gray' ></Image>
                    <Image src={element.img9} w='20%' p='5px' border='1px solid gray' ></Image>
                    <Image src={element.img10} w='20%' p='5px' border='1px solid gray' ></Image>
                    </Flex>
                    </Box>
  
                    <Box w='90%'m='auto' textAlign='left' h={{base:'100%',md:'500px'}} overflowY={{base:'none',md:'auto'}}>

                    <Text mt='10px'  w={{base:'100%',md:'60%'}}  mb='10px' fontSize='2xl'>{element.name}</Text>

                    <Flex h='30px' w='100%'  gap='5px' alignItems='center'>
                    <Flex gap='5px' mt='5px' mb='5px' color='#f39019'>
                             {element.rating===1?one:'' ||element.rating===2?two:'' ||element.rating ===3?three:''|| element.rating >=3.1 && element.rating<4 ?threenhalf:'' || element.rating ===4 ?four:'' || element.rating >=4.1 ? fournhalf:'' }
                    </Flex>
                    <Link fontSize='xs' color='#dd6b20'>WRITE A REVIEW</Link>
                 
                    </Flex>

                    

                    <Flex mt='10px'mb='10px' color='#b93025' >
                    <Text fontSize='2xl'>Sale Start At</Text><Text  fontSize='xs'> INR </Text><Text fontSize='2xl'>{element.price}</Text>
                    </Flex>
                     
                     <Text>Color:</Text>
                    <Flex gap='10px' mt='10px' mb='20px'>
                    <Image border='1px solid gray' boxSize='80px' src={element.image} alt='Dan Abramov' />
                    <Image border='1px solid gray' boxSize='80px' src={element.clr1} alt='Dan Abramov' />
                    <Image border='1px solid gray' boxSize='80px' src={element.clr2} alt='Dan Abramov' />
                    </Flex> 
                     

                    <Link>Wait & Save</Link>
                       <Text w='80%'textAlign='left'>Choose from any of the Delivery Dates below and Save Big! In general,
                         a later Delivery Date means greater Savings!</Text>
                       <Text as='b'> Please choose your preferences</Text> 
                      
                       
                      
                        <Flex gap='10px' mt='25px' mb='25px' w='80%' flexDirection={{base:'column',md:'row'}}>
                            <Button borderRadius='4px' w='250px'>
                              BUY NOW
                            </Button>
                            <Button borderRadius='4px' bg='#27865f' w='250px' color='white' leftIcon={<MdAddShoppingCart size='20px' />}>
                              Add to Cart
                            </Button>
                       </Flex> 
                         </Box> 

                   </Flex>
                     
            
                    )
                })




            } 



         </Box>
    )
}

export default ProductDetail;