import * as React from 'react';
import { Box , TextField ,InputAdornment , useMediaQuery } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { addSearch } from './store/searchSlice';
import { searchProducts } from './store/productSlice';


export default function SearchArea() {

  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery('(max-width:960px)');
  const [text , setText] = React.useState('')

  const dispatch = useDispatch()

  const search = () =>{
      dispatch(searchProducts(text))
    }
  // Adjust width based on screen size
  const width = isSmallScreen ? '90%' : isMediumScreen ? 400 : 500;
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: width,
          maxWidth: '100%',
          textAlign: 'center',
        //   marginTop:5,
        }}
      >
        <TextField
          fullWidth
          label="Search"
          id="searchField"
          onChange={(e) => setText(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment
                position="end"
                onClick={() => search()}
                sx={{ cursor: 'pointer' }}
              >
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            // height:5, 
            '& .MuiOutlinedInput-root': {
              height:50, 
              borderRadius: '20px', // Change border radius
              '& fieldset': {
                borderColor: 'grey', // Default border color
              },
              '&:hover fieldset': {
                borderColor: 'black', // Border color on hover
              },
              '&.Mui-focused fieldset': {
                borderColor: 'black', // Border color when focused
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: 'black', // Label color when focused
              },
            },
          }}
        />
      </Box>
    </Box>
  );
}

