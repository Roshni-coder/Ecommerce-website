import React from 'react';
import { Link } from 'react-router-dom';
import { Box,Typography,styled } from '@mui/material';
const Image = styled('img')({
    width: 'auto',
    height: 150,
});

const Text = styled(Typography)`
    font-size: 14px;
`;
const Component = styled(Box)`
    margin-top: 10px;
    background: #FFFFFF;
    width:100%;
    padding-left:5px;
`;
function AllProducts({products}) {
  return (
    <Component style={{display:'flex',flexWrap:'wrap', alignItems:'center'}}>
        {products.map(product => (
                    <Link to={`product/${product.id}`} style={{ textDecoration: 'none'
                     }} key={product.id}>
                        <Box  style={{padding:15,border:'1px solid lightgray',textAlign:'center',width:'225px',margin:5,borderRadius:2,marginTop:10 }}>
                            <Image src={product.url} alt="product" />
                            <Text style={{ fontWeight: 600, color: '#212121' }}>{product.title.shortTitle}</Text>
                            <Text style={{ color: 'green' }}>{product.discount}</Text>                
                            <Text style={{ color: '#212121', opacity: '.6' }}>{product.tagline}</Text>
                        </Box>
                    </Link>
                ))}
    </Component>
  )
}

export default AllProducts