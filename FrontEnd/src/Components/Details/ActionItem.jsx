import { Box, Button, styled } from "@mui/material";
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useContext, useState } from "react";
import { DataContext } from "../../Context/DataProvider"; // Importing user context
import { addToCart } from "../../Redux/actions/cartActions";
import LoginDialog from "../LogIn/Loginialog";
import { Link } from "react-router-dom";

const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 70px',
    [theme.breakpoints.down('lg')]: {
        padding: '20px 40px'
    }
}));

const Image = styled('img')({
    padding: '30px',
    width: '70%'
});

const StyleBtn = styled(Button)(({ theme }) => ({
    width: '48%',
    height: 50,
    borderRadius: '2px',
    [theme.breakpoints.down('lg')]: { width: '46%' },
    [theme.breakpoints.down('sm')]: { width: '48%' }
}));

const ActionItem = ({ product }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { account } = useContext(DataContext); // Access the user login state
    const [quantity, setQuantity] = useState(1);
    const [open, setOpen] = useState(false); // Manage LoginDialog visibility
    const { id } = product;

    const addItemToCart = () => {
        if (account) {
            dispatch(addToCart(id, quantity));
            navigate('/cart');
        } else {
            setOpen(true); // Open LoginDialog if not logged in
        }
    };

    return (
        <LeftContainer>
            <Box style={{ padding: '15px 20px' }}>
                <Image src={product.url} alt="product" />
            </Box>
            <StyleBtn 
                variant="contained" 
                onClick={addItemToCart} 
                style={{ marginRight: 10, background: '#ff9f00' }}
            >
                <Cart />Add to Cart
            </StyleBtn>
            <StyleBtn 
                component={Link} 
                to={account ? '/Payment' : '#'} 
                variant="contained" 
                style={{ background: '#fb541b' }}
                onClick={() => !account && setOpen(true)} // Show LoginDialog if not logged in
            >
                <Flash />Buy Now
            </StyleBtn>
            <LoginDialog open={open} setopen={setOpen} />
        </LeftContainer>
    );
};

export default ActionItem;
