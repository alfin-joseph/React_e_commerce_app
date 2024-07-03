import { Box ,Grid , Card , CardMedia , CardContent , Typography ,CardActions , Button} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "./store/cartSlice";

export function Cart(){
    const products = useSelector(state=>state.cart)
    const dispatch = useDispatch()
    const removeToCart = (id) =>{
      dispatch(remove(id))
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
                <CardContent sx={{height:75 , overflow:"hidden"}}> ,
                    <Typography gutterBottom variant="h6" component="div" sx={{color:"black"}}>
                      {product.title}
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>
                    <Button size="small" sx={{color:"black" , border:"2px solid black"}} onClick={()=>removeToCart(product.id)}>Remove</Button>
                    {/* <Button size="small">Learn More</Button> */}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
       )
}