import React, { Component } from "react";
import { Container, Row } from "reactstrap";

class Footer extends Component {
  constructor(props) {  
    super(props);  
    this.state = {  
        footerText: " "  
    };
  } 

  render() {
    return (
      <footer className="footer">
        <Container fluid={true}>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="https://thomasmaestas.net">
                https://thomasmaestas.net
              </a>
            </li>{" "}
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
              >
                 _
              </a>
            </li>{" "}
          </ul>
          <hr />
          <div className="copyright">
            © {new Date().getFullYear()} made with{" "}
            <i className="tim-icons icon-heart-2" /> by{" "}
            <a href="#" color="lightblue">
              Thomas
            </a>{" "}
            for a better web.
          </div>
        </Container>
        
        { this.state.footerText }
      </footer>
    );
  }
}

export default Footer;
