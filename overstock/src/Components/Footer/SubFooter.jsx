import { SimpleGrid ,Box } from "@chakra-ui/react";


export default function SubFooter({data}){
    
    return (
        <SimpleGrid spacing={4}>
            {data && data.map((elem)=>{
                return <Box textStyle={"h2"}>{elem.name}</Box>
            })}
        </SimpleGrid>
    )
}