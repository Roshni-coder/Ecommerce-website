
import React from 'react'
import {Box, styled,Typography} from "@mui/material"
import { Link } from 'react-router-dom';

const Component = styled(Box)`
background:#fff;
display:flex;
width:100%;
`
const Image = styled('img')({
    width: 'auto',
    height: 600,
});

const Text = styled(Typography)`
    font-size: 14px;
`;
function Product({products}) {
  return (
    <>
    <Component>
    {products.map(product => (
                    <Link to={`product/${product.id}`} style={{ textDecoration: 'none'
                     }} key={product.id}>
                        <Box textAlign='center' margin='5px' style={{padding:15,border:'1px solid lightgray' }}>
                            <Image src={product.url} alt="product" />
                            <Text style={{ fontWeight: 600, color: '#212121' }}>{product.title.shortTitle}</Text>
                            <Text style={{ color: 'green' }}>{product.discount}</Text>                
                            <Text style={{ color: '#212121', opacity: '.6' }}>{product.tagline}</Text>
                        </Box>
                    </Link>
                ))}
    </Component>
    </>
  )
}

export default Product