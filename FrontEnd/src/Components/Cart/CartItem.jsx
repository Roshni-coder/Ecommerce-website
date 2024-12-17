import { Box, styled, Typography ,Button} from "@mui/material";
import React from "react";
import { addElipsis } from "../../Utils/common-utils";
import { removeFromCart } from "../../Redux/actions/cartActions";
import { useDispatch } from "react-redux";
const Components = styled(Box)`
  border-top: 1px solid #f0f0f0;
  display: flex;
  background:#fff;
`;
const LeftComponent = styled(Box)`
  margin: 20px;
  display:flex;
  flex-direction:column;
`;
const SmallText = styled(Typography)`
  color: #878787;
  font-size: 14px;
  margin-top: 10px;
`;
const Remove = styled(Button)`
margin-top:20px;
font-size:16px;
color:#fff;
background:#2874f0;
`

function CartItem({ item }) {
 const dispatch = useDispatch();
  const removeItemFromCart=(id)=>{
    dispatch(removeFromCart(id));
  }
  return (
    <Components>
      <LeftComponent>
        <img src={item.url} alt="product" style={{height:150,width:110,padding:20 }} />
      </LeftComponent>
      <Box style={{margin:20}}>
        <Typography>{addElipsis(item.title.longTitle)}</Typography>
        <SmallText>Seller:RetailNet</SmallText>
        <Typography style={{marginTop:10}}>
          <Box component="span" style={{ fontWeight:600, fontSize:18 }}>
            ₹{item.price.cost}
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box component="span" style={{ color: "#878787", fontSize:18 }}>
            <strike>₹{item.price.mrp}</strike>
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box component="span" style={{ color: "green", fontWeight: 400, fontSize:13 }}>
            {item.discount}
          </Box>
        </Typography>
        <Remove onClick={()=>removeItemFromCart(item.id)}>Remove</Remove>
      </Box>
    </Components>
  );
}

export default CartItem;
