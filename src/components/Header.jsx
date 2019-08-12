import React, { Component } from 'react';


class Header extends Component {
    render() {
        if (this.props.data) {
            var networks = this.props.data.social.map((network) => {
                return <li key={network.name} ><a href={network.url} target="_blank"><i className={network.className}></i></a></li>
            });
        }
        return (
            <div>
                <header id="home">

                    <nav id="nav-wrap">

                        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                        <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>

                        <ul id="nav" className="nav">
                            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                            <li><a className="smoothscroll" href="#about">Tentang Kami</a></li>
                            <li><a className="smoothscroll" href="#resume">Pelayanan</a></li>
                            <li><a className="smoothscroll" href="#portfolio">Agenda</a></li>
                            <li><a className="smoothscroll" href="#testimonials">Jaringan</a></li>
                            <li><a className="smoothscroll" href="#contact">Contact US</a></li>
                        </ul>

                    </nav>

                    <div className="row banner">
                        <div className="banner-text">
                            <h1 className="responsive-headline" style={{ fontFamily: 'Georgia' }}>CU Pancur Kasih</h1>
                            <h3>layanan CU berbasis web sangat membantu untuk para nasabah maupun calon nasabah</h3>
                            <hr />
                            <ul className="social">
                                {networks}
                            </ul>
                        </div>
                    </div>

                    <p className="scrolldown">
                        <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                    </p>

                </header>
            </div>
        );
    }
}

export default Header;
