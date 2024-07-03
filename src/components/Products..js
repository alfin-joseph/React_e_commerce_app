import { Box ,Grid , Card , CardMedia , CardContent , Typography ,CardActions , Button} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "./store/productSlice";
import { add } from "./store/cartSlice";

export function Products(){
    const dispatch = useDispatch();
    const {data:products} = useSelector(state => state.products)
    useEffect(()=>{
        dispatch(getProducts())
   },[]);
   
   const addToCart=(product)=>{
    //dispatch add action 
    dispatch(add(product))
   }

    return(
        <Box sx={{ flexGrow: 1 , padding:5}}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 3, md: 4, lg: 4 }}>
          {products.map((product, index) => (
            <Grid item xs={1} sm={1} md={1} lg={1} key={index}>
             <Card sx={{ maxWidth: 345 }}>
                <Box sx={{height:150,width:"100%"}}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        // height="250"
                        // width="50"
                        image={product.image}
                        sx={{
                            height: '150px', // Let the image height be auto
                            width: '100px', // Let the image width be auto
                            minWidth: '100%',
                            minHeight: '100%',
                            objectFit: 'contain', // Ensures the entire image is visible within the container
                            borderRadius: '8px', // Optional: Add border radius
                        }}
                    /> 
                </Box>     
                <CardContent> 
                    <Typography gutterBottom variant="h6" component="div" sx={{color:"black" , height:73 , overflow:"hidden"}}>
                      {product.title}
                    </Typography>
                    <Typography  component="div" sx={{color:"black"}}>
                      INR :{product.price}
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>
                    <Button size="small" sx={{color:"black" , border:"2px solid black"}} onClick={()=>addToCart(product)}>Add to cart</Button>
                    {/* <Button size="small">Learn More</Button> */}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
       )
}