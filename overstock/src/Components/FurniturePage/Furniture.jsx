import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Button, Center,Tag,TagLabel, Heading, IconButton, Image, SimpleGrid, Spinner, Text, useOutsideClick, Stack, Flex, useBreakpointValue } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";




function Furniture(){
  // const [shop, setShop] = useState([])
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
     name:"Sofas & Couches" 
    },
    {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular2.jpg?imwidth=200",
     name:"Sectional Sofas" 
    },
    {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular3.jpg?imwidth=200",
    name:"Living Room Sets" 
    },
    {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular4.jpg?imwidth=200",
    name:"Living Room" 
    },
    {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular5.jpg?imwidth=200",
    name:"LoveSeats" 
    },
   
    {image:"https://ak1.ostkcdn.com/img/mxc/12242020-gnp-furniture-219x219_shop_more_diningrm.jpg?imwidth=200",
    name:"Accent Chairs" 
    },
      //
    {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular8.jpg?imwidth=200",
    name:"Living Room Sets" 
    },
  
    {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular9.jpg?imwidth=200",
     name:"Sectional Sofas" 
    },
    {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular10.jpg?imwidth=200",
    name:"LoveSeats" 
    },
    {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular11.jpg?imwidth=200",
    name:"Living Room Sets" 
    },
    {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular12.jpg?imwidth=200",
    name:"Accent Chairs" 
    },

    {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular13.jpg?imwidth=200",
     name:"Sectional Sofas" 
   },
   //
   {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular14.jpg?imwidth=200",
    name:"Sectional Sofas" 
   },
   {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular15.jpg?imwidth=200",
   name:"Accent Chairs" 
   },
   {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular16.jpg?imwidth=200",
   name:"Living Room Sets" 
   },
   {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular16.jpg?imwidth=200",
   name:"Accent Chairs" 
   },
   {image:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular17.jpg?imwidth=200",
    name:"LoveSeats" 
    },
    {image:"https://ak1.ostkcdn.com/img/mxc/071718_sale_square.svg?imwidth=200",
    name:"Accent Chairs" 
    }
   ]
    return(
    <>       
       <div>
          <Flex style={{width:"100%"}}>
            <Box>
             <Stack spacing={6} style={{textAlign:"justify"}}>
               <Heading as='h5' size='sm'>
                   Kitchen Furniture
              </Heading>
              <Heading as='h5' size='sm'>
                  Patio Furniture
              </Heading>
              <Heading as='h5' size='sm'>
                  Home Office Furniture
              </Heading>
              <Heading as='h5' size='sm'>
                 Small Space Furniture
              </Heading>
              <Heading as='h5' size='sm'>
                 Bathroom Furniture
              </Heading>
              <Heading as='h5' size='sm'>
                  Mattresses
              </Heading>
              <Heading as='h5' size='sm'>
                  Mattresses
              </Heading>
              <Heading as='h5' size='sm'>
                 Recreation Room
              </Heading>
              <Heading as='h5' size='sm'>
                Kids & Toddler Furniture
              </Heading>
              <Heading as='h5' size='sm'>
                Home Gym
              </Heading>
             </Stack>
            </Box>  
            <Box style={{padding:"40px"}}>
              <Image src="https://ak1.ostkcdn.com/img/mxc/12122022_Desktop_Furniture-AshleyFurniture.jpg?imwidth=680" width="600px" height="400px"></Image>
              <Text position="absolute" zIndex="5" top="10" backgroundColor="red" color="white">Extra 15% off, Select Furniture</Text>
            </Box>
            <Box >
                <Image src="https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_MM_01.png?imwidth=320" w={300}></Image>
                <Image src="https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_MM_02.png?imwidth=320" w={300}></Image>
            </Box>
          </Flex>
       </div>
      <SimpleGrid  mt={3} p={5} columns={[2, null, 4]} spacing='15px'>
        {FurniObj.map(data => (
          <>
           <Box w="100%" h="100%" cursor="pointer" bg="white" boxShadow="2xl" p={3} key={data.id}>
             <Center> <Image w="100%" h="60%" src={data.Image} /></Center>
               <h4 size="sm" mt={2} >
                  {data.title}
               </h4>
            </Box>      
          </>
      ))}
      </SimpleGrid>
      <div>
        <Flex style={{gap:"2rem",marginTop:"20px"}}>
          <Box style={{width:"150%"}}>
            <Image src="https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_688x444_BG01.jpg?imwidth=1024"></Image>
          </Box>
          <Box>
            <Heading as='h6' size='md'>How to Keep Your House Warm Without Turning up the Heat</Heading>
            <p style={{textAlign:"justify",fontSize:"15px",marginTop:"10px"}}>As the temperature falls, your home becomes a cozy haven from the cold. Before you reach for the thermostat, find out how to keep your house warm in the fall and winter using interior design. With a few simple swaps, you can maximize heat without running up the electricity bill.</p>
            <Button style={{gap:"2rem",marginTop:"20px", color:"black",border:"1px solid black"}} colorScheme='white'>Read More</Button>
          </Box>
        </Flex>
      </div>
      <div>
        <Flex style={{gap:"2rem",marginTop:"20px"}}>
         <Box>
            <Heading as='h6' size='md'>How to Combat Seasonal Affective Disorder With Design</Heading>
            <p style={{textAlign:"justify",fontSize:"15px",marginTop:"10px"}}>While there's plenty to look forward to this time of year, these colder, darker months can also take a toll on your energy and emotions. As you get your home ready for fall and winter, consider preparing your mind, too. These mood-boosting design tips can help you feel physically and psychologically better in your own space, especially if you experience seasonal affective disorder.</p>
            <Button style={{gap:"2rem",marginTop:"20px", color:"black",border:"1px solid black"}} colorScheme='white'>Read More</Button>
          </Box>
          <Box style={{width:"170%"}}>
            <Image src="https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_688x444_BG02.jpg?imwidth=1024"></Image>
          </Box>
        </Flex>
      </div>
      <div style={{marginTop:"20px"}}>
        <Heading size='lg'>Shop More Furniture</Heading>
          <div>
          <SimpleGrid  mt={3} p={5} columns={[2, null, 6]} spacing='15px'>
        {ShopObj.map(data => (
          <>
           <Box w="100%" h="100%" cursor="pointer" bg="white" boxShadow="2xl" p={3} key={data.id}>
             <Center> <Image w="100%" h="60%" src={data.image} /></Center>
               <h4 size="sm" mt={2} >
                  {data.name}
               </h4>
            </Box>      
          </>
      ))}
      </SimpleGrid>
          </div>
      </div>
    </>
    )
}
export default Furniture;














