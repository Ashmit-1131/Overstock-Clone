import React,{useState,useEffect} from 'react';
import axios from 'axios'
import { Box,Image,Button,HStack,SimpleGrid,Text,Heading,Flex,Spacer,VStack, Accordion, AccordionItem,Stack, AccordionButton, AccordionPanel, AccordionIcon,Checkbox,
} from '@chakra-ui/react'
import {ChevronDownIcon} from '@chakra-ui/icons'
import { BsChevronDown,BsStarFill,BsStarHalf,BsStar,BsTextIndentRight } from "react-icons/bs";
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {store} from '../../redux/store';
import {getProducts} from '../../redux/Products/product.actions.js'; //**** */
import {addtocart} from '../../redux/Cart/cart.action.js'

import SideDrower from './sideDrower';

const ProductPg = () => {
    const [display,setdisplay]=useState(false)


let four =[<BsStarFill  size='13px'/>,<BsStarFill size='13px'/>,<BsStarFill size='13px'/>,<BsStarFill size='13px'/>,<BsStar size='13px'/>]
let five=[<BsStarFill  size='13px'/>,<BsStarFill size='13px'/>,<BsStarFill size='13px'/>,<BsStarFill size='13px'/>,<BsStarFill  size='13px'/>]
let fournhalf = [<BsStarFill  size='13px'/>,<BsStarFill size='13px'/>,<BsStarFill size='13px'/>,<BsStarFill size='13px'/>,<BsStarHalf size='13px'/>]
let two= [<BsStarFill  size='13px'/>,<BsStarFill  size='13px'/>,<BsStar size='13px'/>,<BsStar size='13px'/>,<BsStar size='13px'/>]
let one= [<BsStarFill  size='13px'/>,<BsStar size='13px'/>,<BsStar size='13px'/>,<BsStar size='13px'/>,<BsStar size='13px'/>]
let three = [<BsStarFill  size='13px'/>,<BsStarFill size='13px'/>,<BsStarFill size='13px'/>,<BsStar size='13px'/>,<BsStar size='13px'/>]
let threenhalf= [<BsStarFill  size='13px'/>,<BsStarFill size='13px'/>,<BsStarFill size='13px'/>,<BsStarHalf size='13px'/>,<BsStar size='13px'/>]

  const Product = useSelector((store) => store.productManager.Products);
  const dispatch = useDispatch();


useEffect (() => {
  getProducts(dispatch)
},[])


const filterRating = (e,n) => {
   if(e.target.checked){
    let newdata = Product.filter((ele)=> ele.rating >= n)
    setProduct(newdata)
   }else if(!e.target.checked){
    getdata()
   }
   setdisplay(false)
}

const PrintsRating = (e,str)=> {
    if(e.target.checked){
        let newdata = product.filter((ele)=> ele.prints === str)
        if(newdata.length>0){
          setProduct(newdata)
        }
       }else if(!e.target.checked){
        getdata()
       }
       setdisplay(false)
}

const handeldisplay = () => {
    setdisplay(!display)
}






  return (
     <Box pt='150px' position='relative'>
 <Flex m='auto' gap='10px' >
    <Box w='25%'  display={{base:'none',md:'block'}} height='100vh' position='fixed'>
    
<Accordion allowMultiple>
    <AccordionItem>
    
      <AccordionButton justifyContent='space-between' >
        <Text>Price</Text>
        <AccordionIcon />
      </AccordionButton>
   
    <AccordionPanel pb={4} textAlign='start'>
       
       <Checkbox>
      Under INR 427288
    </Checkbox>
    <Checkbox>
    Under INR 427288 - INR 75662
    </Checkbox>
    <Checkbox>
    Under INR 75662 -INR 1475662
    </Checkbox>
    <Checkbox>
    Under INR 1475662
    </Checkbox>
  
    </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
    
    <AccordionButton justifyContent='space-between' >
      <Text>Prints</Text>
      <AccordionIcon />
    </AccordionButton>
 
  <AccordionPanel  textAlign='start'>
     
    <Checkbox onChange={(e)=> PrintsRating(e,'Solid') }>
    Solid
  </Checkbox><br />
  <Checkbox onChange={(e)=> PrintsRating(e,'pattern') }>
   Pattern
  </Checkbox>
  </AccordionPanel>
      </AccordionItem>
      
      <AccordionItem>
    
    <AccordionButton justifyContent='space-between' >
      <Text>Customer Ratings</Text>
      <AccordionIcon />
    </AccordionButton>
 
  <AccordionPanel pb={4} textAlign='start' >
     
    <Checkbox onChange={(e)=> filterRating(e,4) }>
   <Flex gap='5px' alignItems='center'> {four}4 & up</Flex>
  </Checkbox><br />
  <Checkbox onChange={(e)=> filterRating(e,3) }>
   <Flex gap='5px' alignItems='center'> {three}  3 & up</Flex>
  </Checkbox><br />
  <Checkbox onChange={(e)=> filterRating(e,2) }>
   <Flex gap='5px' alignItems='center' >{two}  2 & up</Flex>
  </Checkbox><br />
  <Checkbox onChange={(e)=> filterRating(e,1) }>
   <Flex gap='5px' alignItems='center'>{one}  1 & up</Flex>
  </Checkbox><br />
  </AccordionPanel>
      </AccordionItem>
            </Accordion>
            
            </Box>

         <Box w={{base:'100%',md:"75%"}} ml={{base:'',md:'25%'}}>
        <Box display={{base:'block',md:'none'}} border='1px solid gray' onClick={()=>setdisplay(!display)}
         bg='white' p='5px' w='100% ' position='fixed' top='90px'> 

           <Flex  alignItems='center' p='5px' > <Text as='b' fontSize='20px'>Filter </Text><BsTextIndentRight size='25px'/></Flex>
        {/* Here */}
          <Box display={display?'block':'none'} >
          <SideDrower 
          filterRating={filterRating} 
          PrintsRating={PrintsRating}
           one={one} two={two} 
           three={three} four={four}
          />
          </Box>
        </Box>
          <SimpleGrid columns={{base:'2',md:'3'}} spacing='10px' w='96%' margin='auto' >

                {Product.map((ele)=>(
// *****************************************************************************//
                   
                   
                   <Box key={ele.id} border='1px solid gray' onClick={()=>dispatch(addtocart(ele))} >
                   
                         <Link to={`/product_page/${ele.id}`}>
                         <Box w='100%' >
                         <Image w='100%' h='90%' src={ele.image} alt={ele.image}/>
                         </Box>
                         <Flex p='10px' textAlign='left' gap='5px'>
                            <Box fontSize={{base:'sm',md:'lg'}}>
                            {ele.rating !=="" && ele.rating > 2 ?<Text as='b' color='red'>Sale Start at INR {ele.price}</Text>:<Text as='b'>Starting at INR {ele.price}</Text>}
                            
                             <Flex gap='5px' mt='5px' mb='5px' color='#f39019'>
                             {ele.rating===1?one:'' ||ele.rating===2?two:'' ||ele.rating ===3?three:''|| ele.rating >=3.1 && ele.rating<4 ?threenhalf:'' || ele.rating ===4 ?four:'' || ele.rating >=4.1 ? fournhalf:'' }
                             </Flex>

                            <Text fontSize={{base:'12px',md:'sm'}}>{ele.name}</Text>

                            </Box>
                         </Flex>
                         </Link>
                        
                    </Box>
                   
                ))}
            </SimpleGrid> 
            
         </Box>

            
        </Flex>
     </Box>
  )
}

export default ProductPg
