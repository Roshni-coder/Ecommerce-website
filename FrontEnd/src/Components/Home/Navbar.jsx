import { Box, styled,Typography } from '@mui/material'
import React from 'react'
import { NavData } from '../../Consone/Data'

const NavDataBox = styled(Box)`
display:flex;
margin: 65px 12px 0 12px;
justify-content:space-around;
text-align:center;
background:#fff;
width:98.50%;
`;
const Component = styled(Box)`
padding :10px 8px;

`

const Text = styled(Typography)`
font-size:12px;
font-weight:500;
font-family:arial;
`
export default function NavBar() {
    return (
        <NavDataBox >
            {
                NavData.map(data => (
                    <Component>
                        <img src={data.url} alt="nav" style={{width:50}} />
                        <Text>{data.text}</Text>
                    </Component>
                ))
            }
        </NavDataBox>
    )
}
