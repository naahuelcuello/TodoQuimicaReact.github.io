import React from 'react'
import CartWidget from './CartWidget';
import "./NavBar.css";
import { Link, NavLink } from 'react-router-dom';
import { Menu,MenuButton,MenuList,MenuItem,Flex,Box,Spacer} from '@chakra-ui/react';


function ContainerFluidExample() {
  return (
    <div className='BgPropio'>
        <Flex>
            <Box p='4' as={Link} to='/'>
                <h4> TODO QUIMICA</h4>
            </Box>
            <Spacer />
            <Box p='4'>
                <Menu> 
                    <MenuButton >
                        <Box className='ButtonCategory'>
                            <h4>Categorias</h4>
                        </Box>
                    </MenuButton>
                    <MenuList>
                        <MenuItem as={Link} to='/'>Home</MenuItem>
                        <MenuItem as={Link} to='/categoria/Medicion'>Medición</MenuItem>
                        <MenuItem as={Link} to='/categoria/Volumetrico'>Volumetrico</MenuItem>
                    </MenuList>
                </Menu>
            </Box>

            <Box p='4'>
                <div className='cart'>
                    <CartWidget/>
                </div> 
            </Box>
        </Flex>
    </div>
  );
}

export default ContainerFluidExample;