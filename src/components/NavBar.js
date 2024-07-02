import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
    MDBIcon,
  } from "mdb-react-ui-kit";
  import Link from "next/link";
  import { useState } from "react";
  import { useSelector } from "react-redux";

const NavBar = ()=>{
    const [openNav, setOpenNav] = useState(false);
    const cart = useSelector((state) => state.cart);
    const products = useSelector((state) => state.products);

    return (
        <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#" className="text-primary fs-4">
            Gaurab Shopping Mall
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenNav(!openNav)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar open={openNav}>
            <MDBNavbarNav className="d-flex justify-content-around">
              <MDBNavbarItem>
                <Link href="/" className="mx-3 fw-bold">All Products ({products.length})</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link href="/cart" className="fw-bold">CART ({cart.length})</Link>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    )
};

export default NavBar;