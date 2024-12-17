import { InputBase, Box, styled, List, ListItem ,ListItemText} from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";
import React, { useState,useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {getProducts} from '../../Redux/actions/productactions'
import {Link} from 'react-router-dom'

const SearchContainer = styled(Box)`
background:#fff;
width:50%;
border-radius:2px;
margin-left:30px;
display:flex;
`;

const InputSearchBase = styled(InputBase)`
padding-left:20px;
width:100%;
font-size:unset;
`;
const SearchIconWrraper = styled(Box)`
  color: #2874f0;
  padding-top: 7px;
  padding-right: 10px;
  display:flex;
`;
const Listwrapper = styled(List)`
position:absolute;
background:#FFFFFF;
color:#000;
margin-Top:36px

`

export default function Search() {
  const [text ,setText] = useState('');

  const {products} = useSelector(state => state.getProducts);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProducts());
  },[dispatch]);

  const getText=(text)=>{
   setText(text);
  }
    return (
      <SearchContainer>
        <InputSearchBase placeholder="Search for product,brand and more" 
        onChange={(e)=>getText(e.target.value)}
        />
        <SearchIconWrraper>
          <SearchIcon />
        </SearchIconWrraper>
        { text && 
  <Listwrapper>
    {
      products
        .filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase()))
        .map((product, index) => (
          <ListItem key={index}>
            <Link to={`/product/${product.id}`}
            onClick={()=>setText('')}
            style={{textDecoration:'none',color:'inherit'}}>
            {product.title.longTitle}
            {console.log(product.title.longTitle)}
            </Link>
          </ListItem>
        ))
    }
  </Listwrapper>
}

        
      </SearchContainer>
      
    );
}
