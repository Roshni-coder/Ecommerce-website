
import SliderBar from "./SliderBar"
import {Box,styled} from '@mui/material'



const Component =styled(Box)`
display:flex;
`

const LeftComponent =styled(Box)`
width:83%;

`
const RightComponent =styled(Box)`
background:white;
padding:5px;
padding-top:18px;
text-align:center;
margin-top:10px;
margin-left:5px;
width:17%
`


const MidSlide =({products,title,timer})=>{

    const adURL = 'https://rukminim2.flixcart.com/fk-p-flap/530/810/image/fc822dc700322fcd.jpg?q=20';
    return (
        <Component>
            <LeftComponent><SliderBar products={products} title="Deal of the Day" timer={true}/></LeftComponent>
        </Component>
    )
}
export default MidSlide;