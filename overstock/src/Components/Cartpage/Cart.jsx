import { Box ,Image ,Select,Text,Button} from "@chakra-ui/react";
import { useContext } from "react";
import { useDispatch,useSelector } from "react-redux/es/exports";
import { AuthContext } from "../AuthContextt/AuthContext";


export default function Cart(){

    const cart = useSelector((state)=>state);
    const dispatch = useDispatch();
    const {person} = useContext(AuthContext);
    const arr = [1,2,3,4,5]
    const total = (cart === undefined) ? 0 : cart.reduce((acc,el)=> acc+Number(el.price),0) ;
    //const total = cart.reduce((acc,el)=> acc+Number(el.price),0) || 0;
    const removeMe = (el)=>{
        dispatch({type:"REMOVE",payload:el})
    }
    const checkOut = ()=>{
        alert("order placed")
        dispatch({type:"EMPTY",payload:[]});
    }

    return (
        <Box pt={"8rem"}>
            <Box fontSize="22px" fontWeight={500} pt={10} pb={10} pl={10} textAlign={"left"}>Shopping Cart</Box>
            <Box display={"flex"} gap={10} pl="15px">
                <Box w="70%">
                    {cart && cart.map((item)=>{
                        return (
                            <>
                                <Box border={"1px solid #EAEAEA"} display="flex" p={"1rem"}>
                                    <Image w="300px" h="100%" src={item.img}/>
                                    <Box pl={"1rem"}>
                                        <Text fontSize={14} mt="10px" textAlign="left">{item.details}</Text>
                                        <Text fontSize={14} mt="10px" textAlign="left">{item.author}</Text>
                                        <Text fontSize={18} mt="10px" fontWeight={"bold"} textAlign="left">INR {item.price}</Text>
                                        <Select mt="10px">
                                            {arr.map((el)=>{
                                                return (<option>{el}</option>)
                                            })}
                                        </Select>
                                        <Button mt="20px" colorScheme={"whiteAlpha.800"}
                                        variant="outline"
                                        onClick={()=>removeMe(item)}>Remove</Button>
                                    </Box>
                                </Box>
                            </>
                        )
                    })}
                </Box>
                <Box w="30%" border={"1px solid #EAEAEA"} p="10px" h="200px">
                    <Text>Item Total</Text>
                    <Text mt="10px" textAlign={"left"} fontSize="18px" fontWeight={"bold"}>Your Total : {total}</Text>
                    <Button mt="10px" w="180px"
                    backgroundColor="black" color={"white"}
                    disabled={person.isAuth===false}
                    onClick={checkOut}
                    >Checkout</Button>
                    <Text>{(!person.isAuth)?"Please SignUp to place an order":"place order"}</Text>
                </Box>
            </Box>
        </Box>
    )
}