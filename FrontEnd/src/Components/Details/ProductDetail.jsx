import { Typography,Table,TableBody,TableRow,TableCell,Box,styled } from "@mui/material";
import LocalOffer from '@mui/icons-material/LocalOffer';

const SmallText = styled(Box)`
font-size:14px;
vartical-align:baseline;
&>p{
font-size:14px;
margin-top:10px;
}
`
const StyledBedge = styled(LocalOffer)`
margin-right:10px;
color:#00CC00;
font-size:14px;

`
const CollumText = styled(TableRow)`
font-size:14px;
vartical-align:baseline;
&>td{
font-size:14px;
margin-top :10x;
}
`

const getProductDetails = ({product}) => {
 const date = new Date(new Date().getTime()+(5 * 24 * 60 * 60 *1000))
  return (
    <>
      <Typography>{product.title.longTitle}</Typography>
      <Typography style={{ margin: 5, color: "#878787", fontSize: 14 }}>
        8 Rating & 1 Review
      </Typography>
      <Typography>
        <Box component="span" style={{ fontSize: 28, fontWeight: 600 }}>
          ₹{product.price.cost}
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#878787" }}>
          <strike>₹{product.price.mrp}</strike>
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "green" }}>
          {product.discount}
        </Box>
      </Typography>
      <Typography>Available Offers</Typography>
      <SmallText>
        <Typography><StyledBedge />Bank Offer : 10% off up to ₹749 on HDFC Bank Credit Card Transactions.T&C</Typography>
        <Typography><StyledBedge />Bank Offer : 5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C</Typography>
        <Typography><StyledBedge />Bank Offer : 10% off up to ₹1,250 on HDFC Bank Credit Card Transactions. Min Txn Value: ₹7,499T&C</Typography>
        <Typography><StyledBedge />Special Price : Get extra 88% off (price inclusive of cashback/coupon)T&C</Typography>

      </SmallText>
      <Table>
        <TableBody>
          <CollumText>
            <TableCell style={{color:'#878787'}}>
              Delivery
            </TableCell>
            <TableCell style={{fontWeight:600}}>
              Delevery by {date.toDateString()} | ₹40
            </TableCell>
          </CollumText>
          <CollumText>
            <TableCell style={{color:'#878787'}}>
              Warranty
            </TableCell>
            <TableCell>
              No Warranty
            </TableCell>
          </CollumText>
          <CollumText>
            <TableCell style={{color:'#878787'}}>
            Seller
            </TableCell>
            <TableCell>
             <Box component="span"style={{color:'#2874f0'}}>
              SuperComNet
             </Box>
             <Typography >GST invoice available</Typography>
             <Typography >View more Seller starting From</Typography>
            </TableCell>
          </CollumText>
          <CollumText>
            <TableCell style={{color:'#878787'}}>
              Description
            </TableCell>
            <TableCell>
              {product.description}
            </TableCell>
          </CollumText>
        </TableBody>
      </Table>
    </>
  );
};
export default getProductDetails;
