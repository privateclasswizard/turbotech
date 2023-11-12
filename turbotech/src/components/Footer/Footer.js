import React from "react";
import "../../assets/css/Footer.css";
import Tech from "../../assets/icon/Tech.svg";
import Text from "../../assets/icon/text.svg";
import Facebook from "../../assets/icon/Facebook.svg";
import Twitter from "../../assets/icon/Twitter.svg";
import Instagram from "../../assets/icon/Instagram.svg";
import Linkedin from "../../assets/icon/Linkedin.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="containeFooter">
        <div className="logoFooter">
          <img src={Tech} className="Tech" alt="TechLogo"></img>
          <img src={Text} className="Text" alt="TextLogo"></img>
        </div>
        <div className="navegarFooter">
          <h4 className="NavegarTitulo">Navegar</h4>
          <br />
          <div>
            <ul className="list-group-flush">
              <li className="list-group-item">
                <a href="/" className="nav-link">
                  link1
                </a>
              </li>
              <li className="list-group-item">
                <a href="/" className="nav-link">
                  link2
                </a>
              </li>
              <li className="list-group-item">
                <a href="/" className="nav-link">
                  link3
                </a>
              </li>
              <li className="list-group-item">
                <a href="/" className="nav-link">
                  link4
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="contatofodder">
          <h4 className="ContatoTitulo">Contato</h4>
          <div>
            <p className="Telefone">(27) 99999-9999</p>
            <p className="Endereço">
              Av. Turbo, 1458 - Santana, Cariacica - ES, 29781-396
            </p>
          </div>
        </div>
        <div className="redesSociaisfodder">
          <h4 className="socialtitulo">Social</h4>
          <div className="socialincos">
            <a href="/">
              <img src={Facebook} alt="Facebook Logo" />
            </a>
            <a href="/">
              <img src={Twitter} alt="Twitter Logo" />
            </a>
            <a href="/">
              <img src={Instagram} alt="Instagram Logo" />
            </a>
            <a href="/">
              <img src={Linkedin} alt="Linkedin Logo" />
            </a>
          </div>
        </div>
      </div>
      <div className="rodapecopyR">
        <div className="rodapecopyRText1">
        <span>© 2023 Turbo Tech. Todos os direitos reservados</span>
        </div>
        <div className="rodapecopyRText2">
        <span className="foguetetext">🚀 Acelerada pela Turbo Partners</span>
        </div>

      </div>
    </div>
  );
}
export default Footer;
