import React from "react";
import Logo from "../../images/logovault.png";
import Dashboard from "../../images/dashboard.png";
import Analytics from "../../images/analytics.png";
import Stake from "../../images/stake.png";
import Bond from "../../images/bond.png";
import Chart from "../../images/chart.png";
import Documentation from "../../images/documentation.png";
import Pass from "../../images/pass.png";
import Tweet from "../../images/tweet.png";
import Game from "../../images/game.png";
import Share from "../../images/share.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";


import "./Leftbar.css";

const Leftbar = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="left">
      <Container>
        <Row className="logorow">
          <Col lg={2} md={2} sm className="d-flex justify-content-center">
            {" "}
            <img className="imgvault" src={Logo} alt="" srcset="" />{" "}
          </Col>
          <Col lg={10} md={10} sm>
            <h1 className="vaultpassheading">VAULT PASS</h1>
          </Col>
        </Row>
      </Container>
      <List
        sx={{ width: "100%" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        // subheader={
        //   <ListSubheader component="div" id="nested-list-subheader">
        //     Nested List Items
        //   </ListSubheader>
        // }
      >
        <ListItemButton>
          <ListItemIcon>
            <img src={Dashboard} alt="" srcset="" />
          </ListItemIcon>
          <ListItemText primary="Dashboard" className="vaulttext" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
          <img src={Analytics} alt="" srcset="" />
          </ListItemIcon>
          <ListItemText primary="Analytics" className="vaulttext" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
          <img src={Stake} alt="" srcset="" />
          </ListItemIcon>
          <ListItemText primary="Stack" className="vaulttext" />
        </ListItemButton>
      
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
          <img src={Bond} alt="" srcset="" />
          </ListItemIcon>
          <ListItemText primary="Bond" className="vaulttext" />
          {/* {open ? <ExpandLess /> : <ExpandMore />} */}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton>
             <Container>
              <Row className="bonddiscount">
                  <Col>Bond discounts</Col>
                </Row>
             </Container>
            </ListItemButton>
            <ListItemButton >
            <Container>
              <Row className="insidebond">
                <Col md={8}>XIV-BNB LP</Col>
                <Col md={4}>-16.28%</Col>
                
              </Row>
            </Container>
            </ListItemButton>
            <ListItemButton >
            <Container>
              <Row className="insidebond">
                <Col md={8}>PASS-BNB LP</Col>
                <Col md={4}>-16.28%</Col>
                
              </Row>
            </Container>
            </ListItemButton>
            <ListItemButton >
            <Container>
              <Row className="insidebond">
                <Col md={8}>XIV</Col>
                <Col md={4}>-16.28%</Col>
                
              </Row>
            </Container>
            </ListItemButton>
            <ListItemButton >
            <Container>
              <Row className="insidebond">
                <Col md={8}>BNB</Col>
                <Col md={4}>-16.28%</Col>
                
              </Row>
            </Container>
            </ListItemButton>
            <ListItemButton >
            <Container>
              <Row className="insidebond">
                <Col md={8}>BUXD</Col>
                <Col md={4}>-16.28%</Col>
                
              </Row>
            </Container>
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton>
          <ListItemIcon>
          <img src={Pass} alt="" srcset="" />
          </ListItemIcon>
          <ListItemText primary="Buy PASS" className="vaulttext" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
          <img src={Chart} alt="" srcset="" />
          </ListItemIcon>
          <ListItemText primary="Pie Chart" className="vaulttext" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
          <img src={Documentation} alt="" srcset="" />
          </ListItemIcon>
          <ListItemText primary="Documentation" className="vaulttext" />
        </ListItemButton>
      </List>
      <div className="iconsbottom mt-5">
        <img src={Tweet} alt="" srcset="" />
        <img src={Game} alt="" srcset="" />
        <img src={Share} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Leftbar;
