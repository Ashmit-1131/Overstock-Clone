import axios from "axios"
import {useState} from "react"
import {Box,Button, Spacer,Input} from "@chakra-ui/react"
let proobj = {
      name: "",
      image: "",
      img1:'',
      img2:'',
      img3:'',
      img4:'',
      img5:'',
      img6:'',
      img7:'',
      img8:'',
      img9:'',
      img10:'',
      categories:"",
      type:'',
      price:"",
      prints:"",
      discount:"",
      rating:"",
      clr1:'',
      clr2:'',
      specs:"",
      details:""
}

let Admin = () => {
let [prodata,setprodata] = useState(proobj)

let handelchange = (e) => {
let {name,value,type} = e.target;
//console.log(name,value,type)
let valpro = type === "number" ? Number(value) : value;
//console.log(valpro)
setprodata({...prodata,[name]:valpro})
}

let addproduct = () => {
    console.log(prodata)
   axios.post(`http://localhost:4000/product`,{
    name: prodata.name,
    image: prodata.image,
    img1:prodata.img1,
    img2:prodata.img2,
    img3:prodata.img3,
    img4:prodata.img4,
    img5:prodata.img5,
    img6:prodata.img6,
    img7:prodata.img7,
    img8:prodata.img8,
    img9:prodata.img9,
    img10:prodata.img10,
    type:prodata.type,
    prints:prodata.type,
    categories:prodata.categories,
    price:prodata.price,
    discount:prodata.discount,
    rating:prodata.rating,
     clr1:prodata.clr1,
     clr2:prodata.clr2,
     specs:prodata.specs,
    details:prodata.details
   })
   setprodata(proobj)
}

let {name,image,img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,prints,
categories,price,discount,rating,clr1,clr2,type,
specs,details}=prodata;
   return(
      <Box m='auto'>
         <h1>Add Product</h1>
         <Button style={{width:"200px",height:"50px",marginBottom:'30px'}} onClick={addproduct}bg='green.300' >Submit</Button><br />
         
             <Input placeholder="name" type="text" name="name" value={name}  onChange={handelchange} /><br />
             <Input placeholder="image" type="link" name="image" value={image} onChange={handelchange}/><br />
             <Input placeholder="img1" type="link" name="img1" value={img1} onChange={handelchange}/><br />
             <Input placeholder="img2" type="link" name="img2" value={img2} onChange={handelchange}/><br />
             <Input placeholder="img3" type="link" name="img3" value={img3} onChange={handelchange}/><br />
             <Input placeholder="img4" type="link" name="img4" value={img4} onChange={handelchange}/><br />
             <Input placeholder="img5" type="link" name="img5" value={img5} onChange={handelchange}/><br />
             <Input placeholder="img6" type="link" name="img6" value={img6} onChange={handelchange}/><br />
             <Input placeholder="img7" type="link" name="img7" value={img7} onChange={handelchange}/><br />
             <Input placeholder="img8" type="link" name="img8" value={img8} onChange={handelchange}/><br />
             <Input placeholder="img9" type="link" name="img9" value={img9} onChange={handelchange}/><br />
             <Input placeholder="img10" type="link" name="img10" value={img10} onChange={handelchange}/><br />
             <Input placeholder="categories" type="text" name="categories" value={categories} onChange={handelchange}/><br />
             <Input placeholder="type" type="text" name="type" value={type} onChange={handelchange}/><br />
             <Input placeholder="price" type="number" name="price" value={price} onChange={handelchange}/><br />
             <Input placeholder="discount" type="text" name="discount" value={discount} onChange={handelchange}/><br />
             <Input placeholder="rating" type="number" name="rating" value={rating} onChange={handelchange}/><br />
             <Input placeholder="Print/pattern/Solid" type="text" name='prints' value={prints} onChange={handelchange}/><br />
             <Input placeholder="clr1" type="text" name="clr1" value={clr1} onChange={handelchange}/><br />
             <Input placeholder="clr2" type="text" name="clr2" value={clr2} onChange={handelchange}/><br />
             <textarea name="specs" placeholder="specs" value={specs} cols="30" rows="10"  onChange={handelchange}></textarea>
             <textarea name="details" placeholder="details" value={details} cols="30" rows="10"  onChange={handelchange}></textarea>
          
      </Box>
   )
}

export default Admin ;