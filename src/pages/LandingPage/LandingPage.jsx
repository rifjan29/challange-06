import React from 'react';
import backgroundHeader from '../../assets/img/background/img_car.jpg';
import logo from '../../assets/img/background/logo.png';
import '../LandingPage/LandingPage.css';
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const LandingPage = () => {
    const navigate = useNavigate();
    const data = useSelector((globalStore) => globalStore);
    useEffect(() => {
        if (data.auth.dataLogin?.email !== "admin@admin.com") 
        navigate("/landing-page");
        // eslint-disable-next-line
      }, []);
    
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top p-3">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav ms-lg-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li className="nav-item px-4">
                        <a className="nav-link " aria-current="page" href="#services">Our Services</a>
                        </li>
                        <li className="nav-item px-3">
                        <a className="nav-link " aria-current="page" href="#why">Why Us</a>
                        </li>
                        <li className="nav-item px-3">
                        <a className="nav-link " aria-current="page" href="#testimonial">Testimonial</a>
                        </li>
                        <li className="nav-item px-3">
                        <a className="nav-link " aria-current="page" href="#faq">FAQ</a>
                        </li>
                        <li className="nav-item px-3">
                        <button type="submit" className="btn btn-success">Register</button>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            <section className="section-header position-relative mt-5">
                <div className="container">
                    <div className="row header-content">
                        <div className="col-lg-7 py-5 align-self-center">
                            <h1 className="pb-2">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                            <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil  kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                            <button type="submit" className="btn btn-success">Mulai Sewa Mobil</button>
                        </div>
                        <div className="col-lg-5 position-absolute bottom-0 end-0 p-0">
                            <img src={backgroundHeader} className="d-lg-block d-none w-100" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 mt-3">
                            <div className="">
                                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                                <p>binarcarrental@gmail.com</p>
                                <p>081-233-334-808</p>
                            </div>
                        </div>
                        <div className="col-lg-3 mt-3">
                            <span>
                                <strong>Our services</strong>
                            </span>
                            <ul className="mt-2">
                                <li className="mb-2"><a href="#why">Why Us?</a></li>
                                <li className="mb-2"><a href="#testimonial">Testimonial</a></li>
                                <li className="mb-2"><a href="#faq">FAQ</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 mt-3">
                            <span>
                                <strong>Connect with us</strong>
                            </span>
                            <div className="d-flex flex-row bd-highlight mb-3 mt-3">
                                <div className="p-1">
                                    <button className="btn btn-primary p-2"> <i data-feather="facebook"></i> </button>
                                </div>
                                <div className="p-1">
                                    <button className="btn btn-primary p-2"> <i data-feather="instagram"></i> </button>
                                </div>
                                <div className="p-1">
                                    <button className="btn btn-primary p-2"> <i data-feather="twitter"></i> </button>
                                </div>
                                <div className="p-1">
                                    <button className="btn btn-primary p-2"> <i data-feather="mail"></i> </button>
                                </div>
                                <div className="p-1">
                                    <button className="btn btn-primary p-2"> <i data-feather="twitch"></i> </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 mt-3 footer-copyright">
                            <p>Copyright Binar 2022</p>
                            <img src="img/logo.png" class="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default LandingPage;