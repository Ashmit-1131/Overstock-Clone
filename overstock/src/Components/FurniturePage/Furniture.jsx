import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Button,Link, Center,Tag,TagLabel, Heading, IconButton, Image, SimpleGrid, Spinner, Text, useOutsideClick, Stack, Flex, useBreakpointValue } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";




function Furniture(){

  const FurniObj=[
    {Image:"https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_PopCat_1.jpg?imwidth=400",
     title:"Living room Furniture"
    },
    {Image:"https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_PopCat_2.jpg?imwidth=400",
     title:"Dining room Furniture"
    },
    {
      Image:"https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_PopCat_3.jpg?imwidth=400",
      title:"Bedroom Furniture"
    },
    {
      Image:"https://ak1.ostkcdn.com/img/mxc/09292022_furniture_PopCat_5.jpg?imwidth=400",
      title:"Mattresses"
    },
    {
      Image:"https://ak1.ostkcdn.com/img/mxc/09292022_furniture_PopCat_8.jpg?imwidth=400",
      title:"Kitchen Furniture"
    },
    {
      Image:"https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_PopCat_4.jpg?imwidth=400",
      title:"Small Space Furniture"
    },
    {
      Image:"https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_PopCat_5.jpg?imwidth=400",
      title:"Home Office Furniture"
    },
    {
      Image:"https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_PopCat_6.jpg?imwidth=400",
      title:"Patio Furniture"
    },
    {
      Image:"https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_PopCat_7.jpg?imwidth=400",
      title:"Entryway Furniture"
    },
    {
      Image:"https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_PopCat_8.jpg?imwidth=400",
      title:"Bathroom Furniture"
    },
    {
      Image:"https://ak1.ostkcdn.com/img/mxc/09292022_furniture_PopCat_11.jpg?imwidth=400",
      title:"Recreation Room Furniture"
    },
    {
      Image:"https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_PopCat_missing_1.jpg?imwidth=400",
      title:"Kids & Toddler Room Furniture"
    }
  ]
   const ShopObj =[
    {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular1.jpg?imwidth=200",
      link:'product_page',   name:"Sofas & Couches" 
    },
    {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular2.jpg?imwidth=200",
      link:'product_page',   name:"Sectional Sofas" 
    },
    {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular3.jpg?imwidth=200",
     link:'product_page',   name:"Living Room Sets" 
    },
    {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular4.jpg?imwidth=200",
     link:'product_page',   name:"Living Room" 
    },
    {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular5.jpg?imwidth=200",
     link:'product_page',   name:"LoveSeats" 
    },
   
    {image:"https://ak1.ostkcdn.com/img/mxc/12242020-gnp-furniture-219x219_shop_more_diningrm.jpg?imwidth=200",
     link:'product_page',   name:"Accent Chairs" 
    },
      //
    {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular8.jpg?imwidth=200",
     link:'product_page',   name:"Living Room Sets" 
    },
  
    {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular9.jpg?imwidth=200",
      link:'product_page',   name:"Sectional Sofas" 
    },
    {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular10.jpg?imwidth=200",
     link:'product_page',   name:"LoveSeats" 
    },
    {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular11.jpg?imwidth=200",
     link:'product_page',   name:"Living Room Sets" 
    },
    {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular12.jpg?imwidth=200",
     link:'product_page',   name:"Accent Chairs" 
    },

    {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular13.jpg?imwidth=200",
      link:'product_page',   name:"Sectional Sofas" 
   },
   //
   {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular14.jpg?imwidth=200",
     link:'product_page',   name:"Sectional Sofas" 
   },
   {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular15.jpg?imwidth=200",
    link:'product_page',   name:"Accent Chairs" 
   },
   {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular16.jpg?imwidth=200",
    link:'product_page',   name:"Living Room Sets" 
   },
   {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular16.jpg?imwidth=200",
    link:'product_page',   name:"Accent Chairs" 
   },
   {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular17.jpg?imwidth=200",
     link:'product_page',   name:"LoveSeats" 
    },
    {image:"https://ak1.ostkcdn.com/img/mxc/071718_sale_square.svg?imwidth=200",
     link:'product_page',   name:"Accent Chairs" 
    }
   ]
    return(
    <Box pt='180px' w='98%' m='auto' >       
       <Box w="98%" m="auto" gap="20px">
          <Flex>
            <Box w="30%" textAlign="left" p="10px" display={{base:"none", md:"block"}}>
               <Heading as="h5" size="lg" marginBottom="15px">Featured Categories</Heading>
               <Heading as='h5' size='sm' marginBottom="8px">
                  Living Room Furniture
               </Heading>
               <Heading as='h5' size='sm' marginBottom="8px">
                  Dining Room Furniture
               </Heading>
               <Heading as='h5' size='sm' marginBottom="8px">
                  Bedroom Furniture
               </Heading>
               <Heading as='h5' size='sm' marginBottom="8px">
                   Kitchen Furniture
               </Heading>
              <Heading as='h5' size='sm' marginBottom="8px">
                  Patio Furniture
              </Heading>
              <Heading as='h5' size='sm' marginBottom="8px">
                  Home Office Furniture
              </Heading>
              <Heading as='h5' size='sm' marginBottom="8px">
                 Small Space Furniture
              </Heading>
              <Heading as='h5' size='sm' marginBottom="8px">
                 Bathroom Furniture
              </Heading>
              <Heading as='h5' size='sm' marginBottom="8px">
                  Mattresses
              </Heading>
              <Heading as='h5' size='sm' marginBottom="8px">
                 Recreation Room
              </Heading>
              <Heading as='h5' size='sm' marginBottom="8px">
                Kids & Toddler Furniture
              </Heading>
              <Heading as='h5' size='sm' marginBottom="8px">
                Home Gym
              </Heading>
            </Box>  
            <Box w={{base:"100%", md:"70%"}} m="auto">
             <Flex direction={{base:"column", md:"row"}}  w="100%">
              <Box  w={{base:"100%",md:"60%"}}>
              <Image src="https://ak1.ostkcdn.com/img/mxc/12122022_Desktop_Furniture-AshleyFurniture.jpg?imwidth=680" w="90%"></Image>
              <Text position="absolute" zIndex="2" top="60" width="100px" height="100px" fontSize="15x" fontWeight="bold" backgroundColor="red" color="white">Extra 15% off, Select Furniture</Text>
             </Box>
             <Box w={{base:"70%",md:"40%"}} bg="gray.200" gap="20px">
              <SimpleGrid columns={{base: 1,sm: 2,md: 1,lg: 1,}} >
                <Image src="https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_MM_01.png?imwidth=320" w="90%" marginTop="20px" marginBottom="20px" bg="EAEAEA"></Image>
                <Image src="https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_MM_02.png?imwidth=320" w="90%" marginTop="20px" marginBottom="20px" bg="EAEAEA"></Image>
              </SimpleGrid>
             </Box>
             </Flex> 
            </Box>
          </Flex>
       </Box>
      <SimpleGrid  mt={3} p={5} columns={{base: 2,sm: 2,md: 4,lg: 4,}} spacing='15px'>
        {FurniObj.map((data,id) => (
           <Box w="100%" h="100%" cursor="pointer" bg="white" boxShadow="2xl" p={3} key={id}>
             <Center> <Image w="100%" h="60%" src={data.Image} /></Center>
               <Heading size="xs" mt={2} >
                  {data.title}
               </Heading>
            </Box>      
         ))}
      </SimpleGrid>
      <Flex w="98%" m="auto" direction={{base:"column", md:"row"}} gap="10px" mb="20px">
        <Box w={{base:"100%",md:"40%"}}>
           <Image src="https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_688x444_BG01.jpg?imwidth=1024" w="100%"></Image>
        </Box>
        <Box w={{base:"100%",md:"60%"}} textAlign="left" p="30px">
          <Heading as='h4' size='md'>How to Keep Your House Warm Without Turning up the Heat</Heading>
          <Text w="80%">As the temperature falls, your home becomes a cozy haven from the cold. Before you reach for the thermostat, find out how to keep your house warm in the fall and winter using interior design. With a few simple swaps, you can maximize heat without running up the electricity bill.</Text>
          <Button colorScheme='black' variant='outline'>
                Read More
          </Button>
        </Box>
      </Flex>
      <Flex w="98%" m="auto" direction={{base:"column", md:"row"}} gap="10px" mb="50px">
        <Box w={{base:"100%",md:"60%"}} textAlign="left" p="10px" >
          <Heading as='h4' size='md'>How to Combat Seasonal Affective Disorder With Design</Heading>
          <Text w="80%">While there's plenty to look forward to this time of year, these colder, darker months can also take a toll on your energy and emotions. As you get your home ready for fall and winter, consider preparing your mind, too. These mood-boosting design tips can help you feel physically and psychologically better in your own space, especially if you experience seasonal affective disorder.</Text>
          <Button colorScheme='black' variant='outline'>
                Read More
          </Button>
        </Box>
        <Box w={{base:"100%",md:"40%"}}>
           <Image src="https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_688x444_BG02.jpg?imwidth=1024" w="100%"></Image>
        </Box>
      </Flex>
      <Box>
        <Heading size='lg'>Shop More Furniture</Heading>
          <Box>
          <SimpleGrid  mt={3} p={5} columns={{base: 2,sm: 3,md: 4,lg: 6,}} spacing='15px'>
            {ShopObj.map((data,id) => (
           <Link href='/product_page'> 
           <Box w="100%" h="100%" cursor="pointer" bg="white" boxShadow="2xl" p={3} key={id}>
           <Center> <Image w="100%" h="60%" src={data.image} /></Center>
             <Heading size="xs" mt={2} >
                {data.name}
             </Heading>
          </Box>  
           </Link>    
          ))}
      </SimpleGrid>
          </Box>
      </Box>
    </Box>
    )
}
export default Furniture;














