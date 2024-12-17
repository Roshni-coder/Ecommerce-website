import { Box, Typography, styled } from '@mui/material';

export const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
`;

export const Heading = styled(Typography)`
  color: #878787;
`;

export const Container = styled(Box)`
  padding: 15px 24px;
  background: #fff;
  & > p {
    margin-bottom: 20px;
    font-size: 14px;
  }
`;

export const Price = styled(Box)`
  float: right;
`;

export const Discount = styled(Typography)`
  color: green;
  font-weight: 500;
`;
