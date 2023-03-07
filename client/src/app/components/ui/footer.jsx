import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../imgs/logo.png";
import telegram from "../../../imgs/telegram.png";
import youtube from "../../../imgs/youtube.png";
import vk from "../../../imgs/vk.png";
import dzen from "../../../imgs/dzen.png";
import { useSelector } from "react-redux";
import { getSwitchStatus } from "../../store/theme";
import useTheme from "../hooks/useTheme";

const Footer = () => {
    const status = useSelector(getSwitchStatus());

    const { bg } = useTheme(status);

    return (
        <div className={`${bg} text-light mt-4`}>
            <div className="footer-container d-flex flex-column flex-lg-row justify-content-between">
                <div className="d-flex flex-column justify-content-center align-items-center me-xl-0">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center align-items-lg-start gap-3">
                    <div className="d-flex flex-column align-items-center align-items-lg-start">
                        <h4>Мы в социальных сетях: </h4>
                        <div className="d-flex gap-2">
                            <a href="#">
                                <img src={youtube} alt="youtube" />
                            </a>
                            <a href="#">
                                <img src={vk} alt="vk" />
                            </a>
                            <a href="#">
                                <img src={telegram} alt="telegram" />
                            </a>
                            <a href="#">
                                <img src={dzen} alt="dzen" />
                            </a>
                        </div>
                    </div>

                    <h4>Акции</h4>
                    <h4>Новости</h4>
                </div>
                <div className="d-flex flex-column align-items-center align-items-lg-start footer-element-about">
                    <h4>О нас:</h4>
                    <span>История компании</span>
                    <span>Наш коллектив</span>
                    <span>Адреса магазинов</span>
                </div>
            </div>
            <div className="text-center">
                <i>
                    Изображения музыкальных инструментов взяты с сайта{" "}
                    <a href="https://www.muztorg.ru/">
                        https://www.muztorg.ru/
                    </a>
                </i>
            </div>
        </div>
    );
};

export default Footer;
