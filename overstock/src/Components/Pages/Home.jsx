import React from 'react'
import { Box,Image,Button,HStack,SimpleGrid,Text,Heading,Link,Flex,Spacer  } from '@chakra-ui/react'


let offer = [
    {img:'https://ak1.ostkcdn.com/img/mxc/12032022_HB_INTL-CAN_1.jpg',
    offer:'https://ak1.ostkcdn.com/img/mxc/11142022_HB_INTL-CAN_1.svg',
     heading:'Select Rugs'},
    {img:'https://ak1.ostkcdn.com/img/mxc/12032022_HB_INTL-CAN_2.jpg',
    offer:'https://ak1.ostkcdn.com/img/mxc/11142022_HB_INTL-CAN_6.svg',
    heading:'select living room furniture' },
    {img:'https://ak1.ostkcdn.com/img/mxc/12032022_HB_INTL-CAN_3.jpg',
    offer:'https://ak1.ostkcdn.com/img/mxc/11142022_HB_INTL-CAN_6.svg',
    heading:'Select dining room furniture' },
    {img:'https://ak1.ostkcdn.com/img/mxc/12032022_HB_INTL-CAN_4.jpg',
    offer:'https://ak1.ostkcdn.com/img/mxc/11142022_HB_INTL-CAN_6.svg',
    heading:'Select home decor' },
    {img:'https://ak1.ostkcdn.com/img/mxc/12032022_HB_INTL-CAN_5.jpg',
    offer:'https://ak1.ostkcdn.com/img/mxc/11142022_HB_INTL-CAN_6.svg',
    heading:'Select bedding' },
    {img:'https://ak1.ostkcdn.com/img/mxc/12032022_HB_INTL-CAN_6.jpg',
    offer:'https://ak1.ostkcdn.com/img/mxc/11142022_HB_INTL-CAN_6.svg',
    heading:'Select bedroom furniture' },
]


let brands = ['https://ak1.ostkcdn.com/img/mxc/111522-NinjaLogo.svg?imwidth=1920',
              'https://ak1.ostkcdn.com/img/mxc/111522-SharkLogo.svg?imwidth=1920',
              'https://ak1.ostkcdn.com/img/mxc/111522-KitchenAidLogo.svg?imwidth=1920',
              'https://ak1.ostkcdn.com/img/mxc/111522-DysonLogo.svg?imwidth=1920',
              'https://ak1.ostkcdn.com/img/mxc/111522-KeurigLogo.svg?imwidth=1920',
              'https://ak1.ostkcdn.com/img/mxc/111522-CuisinartLogo.svg?imwidth=1920',
              'https://ak1.ostkcdn.com/img/mxc/111522-CalphalonLogo.svg?imwidth=1920',
              'https://ak1.ostkcdn.com/img/mxc/111522-HamiltonBeachLogo.svg?imwidth=1920',
              'https://ak1.ostkcdn.com/img/mxc/111522-CasperLogo.svg?imwidth=1920'
 ]

let roomfinds = [
  {img:'https://ak1.ostkcdn.com/img/mxc/11192021-CatSilo-Furniture.png?imwidth=1920',name:'Furniture'},
  {img:'https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-AreaRugs.png?imwidth=1920',name:'Area Rugs'},
  {img:'https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-BedBath.png?imwidth=1920',name:'Bedding'},
  {img:'https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Decor.png?imwidth=1920',name:'Home Decor'},
  {img:'https://ak1.ostkcdn.com/img/mxc/CatSilo-Window-040721.jpg?imwidth=1920',name:'Window Treatments'},
  {img:'https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Kitchen.png?imwidth=1920',name:'Kitchen'},
  {img:'https://ak1.ostkcdn.com/img/mxc/11152022-CatSilo-Outdoor.png?imwidth=1920',name:'Outdoor'},
  {img:'https://ak1.ostkcdn.com/img/mxc/01112021-CatSilo-HomeImp.jpg?imwidth=1920',name:'Home Improvement'},
  {img:'https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Storage.png?imwidth=1920',name:'Storage'},
  {img:'https://ak1.ostkcdn.com/img/mxc/01112021-CatSilo-Mattresses.jpg?imwidth=1920',name:'Mattresses'},
  {img:'https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Lighting.png?imwidth=1920',name:'Lighting'},
  {img:'https://ak1.ostkcdn.com/img/mxc/CatSilo-AllDeals-040721.jpg?imwidth=1920',name:'Shop All Deals'},
]

let treading = [
  {img:'https://ak1.ostkcdn.com/img/mxc/10272022-MOPS-HP-Frame1.jpg?imwidth=1920',
  name:'home gifts',dis:'Gift-ready home goods for everyone on your list.'},
  {img:'https://ak1.ostkcdn.com/img/mxc/10272022-MOPS-HP-Frame2.jpg?imwidth=1920',
  name:'kitchen appliances',dis:'Small but mighty tools that make food prep a breeze.'},
  {img:'https://ak1.ostkcdn.com/img/mxc/10272022-MOPS-HP-Frame3.jpg?imwidth=1920',
  name:'christmas trees',dis:'The perfect place to put those perfect gifts.'},
  {img:'https://ak1.ostkcdn.com/img/mxc/10272022-MOPS-HP-Frame4.jpg?imwidth=1920',
  name:'holiday decor',dis:'Deck your halls with the season’s festive finest.'},
  {img:'https://ak1.ostkcdn.com/img/mxc/10272022-MOPS-HP-Frame5.jpg?imwidth=1920',
  name:'faux fur blankets',dis:'Snuggle-up with guilt-free throws that are ultra cozy.'},
  {img:'https://ak1.ostkcdn.com/img/mxc/10272022-MOPS-HP-Frame6.jpg?imwidth=1920',
  name:'serveware',dis:'Serve up a festive feast with stylish & functional serving essentials.'},
  {img:'https://ak1.ostkcdn.com/img/mxc/10272022-MOPS-HP-Frame7.jpg?imwidth=1920',
  name:'jute rugs',dis:'Natural style meets unbeatable durability in this classic rug material.'},
  {img:'https://ak1.ostkcdn.com/img/mxc/10272022-MOPS-HP-Frame8.jpg?imwidth=1920',
  name:'small space furniture',dis:'Give yourself breathing room with furniture both pint-sized & pretty.'},
]


let featuredBrand = [
  {img:'https://ak1.ostkcdn.com/img/mxc/HP_C_Mod_33581952.jpg?imwidth=1920',
  offer:'extra 20% off',
   heading:'Select Rugs'},
  {img:'https://ak1.ostkcdn.com/img/mxc/HP_C_Mod_16543020.jpg?imwidth=1920',
  offer:'extra 15% off',
  heading:'select living room furniture' },
  {img:'https://ak1.ostkcdn.com/img/mxc/HP_C_Mod_30923284.jpg?imwidth=1920',
  offer:'extra 15% off',
  heading:'Select dining room furniture' },
  {img:'https://ak1.ostkcdn.com/img/mxc/HP_C_Mod_33639553.jpg?imwidth=1920',
  offer:'extra 15% off',
  heading:'Select home decor' },
]

let style = [
  {img:'https://ak1.ostkcdn.com/img/mxc/030822-SBS-Farmhouse.jpg?imwidth=1920',
 h:'Farmhouse',
 h2:'Shop by Popular Farmhouse Categories'},
  {img:'https://ak1.ostkcdn.com/img/mxc/030822-SBS-MidCenMod.jpg?imwidth=1920',
  h:'Mid-Century Modern',
  h2:'Reto meets modern chic in these lines and vibrant tones' },
  {img:'https://ak1.ostkcdn.com/img/mxc/030822-SBS-Traditional.jpg?imwidth=1920',
  h:'Traditional',
  h2:"Cozy design, clean and classic, give this style it's signature appeal" }
]

let treadingSearch = [
  'Mugs','Blankets','Cookies cutters','Air Fryers','Kitchen Mixers',
  'Lamps','Towels','Tree Skirts','Garland','Fall Wreaths',
  'Chrismas Trees','Fireplaces'
]

const Home = () => {
  return (
    <Box >

          <Box mb='100px' position='relative' >
          <Image  height="500px" width="551" m='auto' top='10px' src='https://ak1.ostkcdn.com/img/mxc/12122022-HP-A1-INTL-V2-1400x550_DSK-INTL-2.svg' alt='overstock' />
          <Image position='absolute' zIndex='-10' top='0px' src='https://ak1.ostkcdn.com/img/mxc/12122022-HP-A1-INTL-V2-1400x550_DSK-INTL-min.jpg' ></Image>
          </Box>
           
          <Text fontSize='3xl' fontWeight='bold' textAlign='center' mb='50px' mt='50px' >Limited-Time Deals</Text>

           <SimpleGrid columns={{base:'3',md:'6'}} spacing={5} w='98%' m='auto' >
            {offer.map((ele,i)=>(
                   <Box key={i} position='relative' textAlign='center'>
                    <Image  src={ele.offer} alt={ele.offer} />
                    <Image position='absolute' zIndex='-10'top='0px' src={ele.img} alt={ele.img} />
                    <Text as='b'>{ele.heading}</Text>
                   </Box>
            ))}
          </SimpleGrid>

          <Text fontSize='3xl' fontWeight='bold' textAlign='center'  mb='50px' mt='50px' >Brands we Love</Text>
          <SimpleGrid columns={{base:'2',md:'3'}} spacing={5} w='95%' m='auto' mt='50px'>
            {brands.map((ele,i)=>(
                   <Link key={i}><Image src={ele} alt={ele} /></Link>
               
            ))}
          </SimpleGrid>

          
          <Box position='relative'm='auto' mb='100px' mt='50px' w='98%'>
          <Image  height="500px" width="551" m='auto' src='https://ak1.ostkcdn.com/img/mxc/12122022-SB-LivingRoomFurniture-1400x550_Promo1.svg?imwidth=1920' alt='overstock' />
          <Image w='100%' top='0px' position='absolute' zIndex='-10'  src='https://ak1.ostkcdn.com/img/mxc/12122022-SB-LivingRoomFurniture-1400x550_Promo1.jpg?imwidth=1920' />
          </Box>


          <Text fontSize='3xl' fontWeight='bold' textAlign='center' mt='50px' mb='50px'>Beautiful Finds for Every Room</Text>
          <SimpleGrid columns={{base:'3',md:'6'}} spacing={5} w='98%' m='auto'>
            {roomfinds.map((ele,i)=>(
                   <Box key={i} textAlign='center' mb='5px'>
                    <Image src={ele.img} alt={ele.img} />
                    <Text fontSize='xl'>{ele.name}</Text>
                   </Box>
            ))}
          </SimpleGrid>
         
          <Text fontSize='3xl' fontWeight='bold' textAlign='center' mb='50px' mt='50px' >Trending This Season</Text>

          <Flex width='98%' m='auto' overflow='auto' >
          {treading.map((ele,i)=>(
                   <Box key={i} bg='#F5F5F5' minW='25%' m='10px'>
                    <Image w='100%' h='300px' src={ele.img} alt={ele.img} />
                    <Box p='10px'>
                    <Text fontSize='xl' fontWeight='bold'>{ele.name}</Text>
                    <Text fontSize='ms'>{ele.dis}</Text>
                    </Box>
                   </Box>
            ))}
          </Flex>

          <Box position='relative'm='auto' mb='100px' mt='50px' w='98%'>
          <Image  height="500px" width="551" m='auto' top='10px' src='https://ak1.ostkcdn.com/img/mxc/12122022-SB-BedroomFurniture-1400x550_Promo2.svg?imwidth=1920' alt='overstock' />
          <Image w='100%' top='0px' position='absolute' zIndex='-10'  src='https://ak1.ostkcdn.com/img/mxc/12122022-SB-BedroomFurniture-1400x550_Promo2.jpg?imwidth=1920' />
          </Box>
           
          <Box position='relative'm='auto' mb='100px' mt='50px' w='98%'>
           <Image src='https://ak1.ostkcdn.com/img/mxc/030822-RIUpdate-Dsk.jpg?imwidth=1920' alt='bed'/>
           <Image position='absolute' m='auto' top='10px' src='https://ak1.ostkcdn.com/img/mxc/030822-RIUpdate-Dsk.svg?imwidth=1920' alt='overstock' />
           </Box>

           <Text fontSize='3xl' fontWeight='bold' textAlign='center' mb='50px' >Overstock Featured Brands</Text>
           <SimpleGrid columns={{base:'2',md:'4'}} spacing={5} m='auto' w='98%' >
            {featuredBrand .map((ele,i)=>(
                   <Box key={i}  textAlign='center' bg='#f1f3f4'>
                    <Image  src={ele.img} alt={ele.img} />
                    <Text>{ele.offer}</Text>
                    <Text as='b'>{ele.heading}</Text>
                   </Box>
            ))}
          </SimpleGrid>
         
          <Text fontSize='3xl' fontWeight='bold' textAlign='center' mb='50px' mt='50px' >We've Got Your Style</Text>
          <SimpleGrid columns={{base:'1',md:'3'}} spacing={5} m='auto' w='98%' >
            {style.map((ele,i)=>(
                   <Box key={i} bg='#f1f3f4'>
                    <Image  src={ele.img} alt={ele.img} />
                    <Box p='10px'>
                    <Text fontSize='2xl' fontWeight='bold' >{ele.h}</Text>
                    <Text fontSize='lg' >{ele.h2}</Text>
                    </Box>
                   </Box>
            ))}
          </SimpleGrid>

          <Link><Button bg='#2f3337' color='white' display='block' m='auto' mt='50px' p='10px' w='150px'>See All Styles</Button></Link>
            
          <Text fontSize='3xl' fontWeight='bold' textAlign='center' mb='50px' mt='50px' >Trending Searches</Text>
             <SimpleGrid columns={{base:'2',md:'3'}} spacing={5} w='98%' m='auto'>
                {treadingSearch.map((ele,i)=>(
                  <Box key={i} textAlign='center' bg='#f1f3f4' p='10px'><Link><Text fontSize='lg' as='b'>{ele}</Text></Link></Box>
                ))}
              </SimpleGrid>


    </Box>

    
  )
}

export default Home
