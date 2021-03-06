import { FC, ReactElement, useState } from 'react';
import {  AppBar, Toolbar, IconButton, Typography, Menu, Box, Tooltip, MenuItem, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';

interface Props {
  options: [string, string, boolean][];
};

const Navbar: FC<Props> = ({ options }): ReactElement => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = (url: string) => {
    navigate(url);
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" sx={{background: "#1A2238",}}>
      <Toolbar variant="dense" >
        {options.length === 0 
          ? 
            null 
          :
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenMenu} sx={{ padding: '20px', color: 'white' }}>
                  <MenuIcon />  
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
              >
                {options.map((option) => (
                    option[2] === true ? 
                    <MenuItem key={option[1]} onClick={() => handleCloseMenu(option[1])}>
                      <Typography textAlign="center">{option[0]}</Typography> 
                    </MenuItem>                  
                     :
                    
                    <a key={option[1]} href={option[1]} >
                      <MenuItem  onClick={() => setAnchorEl(null)}>
                        <Typography textAlign="center">{option[0]}</Typography>
                      </MenuItem>
                    </a>
                ))}
              </Menu>
            </Box>
        }   
        <Box sx={{display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'space-between', padding: 0, margin: 0, alignItems: 'center'}}>
          <Button onClick={() => navigate('/')} style={{color: 'white', textTransform: 'none'}}>
            <Typography variant="h6" color="inherit" component="div">
              Data Structure Visualization (ds-visualization.js)
            </Typography>
          </Button>
          
          <IconButton sx={{color: 'white'}} onClick={() => window.open('https://github.com/Yuuuuuu-xue/ds-visualization.js', '_blank')}>
            Github
            &nbsp;&nbsp;
            <GitHubIcon /> 
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
};

export default Navbar;