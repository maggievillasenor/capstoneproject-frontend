import { Container } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import Link from "next/link";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

export default function Layout ({ children }) {
    return (
        <>
            <Header title="Ma Chérie">
                <Link href="/">Home</Link>
                <Link href="/catalog">Catalog</Link>
                <Link href="/admin">Admin</Link>
                <Link href="/checkout">
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={4}>
                            <ShoppingCartIcon />
                        </StyledBadge>
                    </IconButton>
                </Link>
            </Header>
            <Container fixed>
                <main>{ children }</main>
            </Container>
            <Footer></Footer>
        </>
    );
}