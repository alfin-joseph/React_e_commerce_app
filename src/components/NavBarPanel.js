import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import StoreIcon from '@mui/icons-material/Store';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, useMediaQuery } from '@mui/material';
import SearchArea from './SearchArea';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ResponsiveAppBar() {

  const navigate = useNavigate();
  const counter = useSelector(state => state.cart)
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    navigate('/cart');
  };

  const handleCloseNavMenu = () => {
    navigate('/');
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery('(max-width:960px)');

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ backgroundColor: "white", color: "black" }}>
        <Toolbar disableGutters sx={{ flexDirection: isSmallScreen ? 'column' : 'row' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', width: isSmallScreen ? '100%' : 'auto' }}>
            <StoreIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              EKART
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <MenuItem sx={{ color: "black" }} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">PRODUCTS</Typography>
                </MenuItem>
              </Menu>
            </Box>
            <StoreIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              EKART
            </Typography>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'black', display: { xs: 'none', md: 'block' } }}
            >
              PRODUCTS
            </Button>
            {isSmallScreen &&  
            <Tooltip title="Open cart">
              <IconButton onClick={handleOpenUserMenu} sx={{ fontSize: 20, p: 0 }}>
                <Badge badgeContent={counter.length} color="secondary">
                    <ShoppingCartIcon /> Cart
                </Badge>
              </IconButton>
            </Tooltip>}
          </Box>
          {isSmallScreen && (
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', my: 2 }}>
              <SearchArea />
            </Box>
          )}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {!isSmallScreen && <SearchArea />}
          </Box>
          {!isSmallScreen &&  <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
            <Tooltip title="Open cart">
              <IconButton onClick={handleOpenUserMenu} sx={{ fontSize: 20, p: 0 }}>
                <Badge badgeContent={counter.length} color="secondary">
                        <ShoppingCartIcon /> Cart
                </Badge>
              </IconButton>
            </Tooltip>
          </Box>}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
