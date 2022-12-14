import React from 'react'
import Slider from 'react-slick';
import './About.css'

function About() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 2000,
    };

    return (

        <div id='about' style={{ width: '85%', margin: 'auto', paddingTop: '65px' }}>

            <div className="s-heading">
                <h1>About us</h1>
            </div>
            <Slider {...settings}>
                <div className="member">
                    <img src="https://mobirise.com/bootstrap-template/about-us-page-template/assets/images/ayo-ogunseinde-316141-3333x3333.jpg" alt="" />
                    <p className='description'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <h5 style={{margin:"0px 8px", textAlign: "center"}} className="nameMember">Lý Xuân Quý</h5>
                    <h3 className='dev'>Developer</h3>
                </div>
                <div className='member'>
                    <img src="https://mobirise.com/bootstrap-template/about-us-page-template/assets/images/yoann-boyer-316485-1333x1333.jpg" alt="" />
                    <p className='description'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <h5 style={{margin:"0px 8px", textAlign: "center"}} className="nameMember">Phạm Văn Giang</h5>
                    <h3 className='dev'>Developer</h3>
                </div>
                <div className='member'>
                    <img src="https://mobirise.com/bootstrap-template/about-us-page-template/assets/images/yoann-boyer-316485-1333x1333.jpg" alt="" />
                    <p className='description'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <h5 style={{margin:"0px 8px", textAlign: "center"}} className="nameMember">Lê Trung Quý</h5>
                    <h3 className='dev'>Developer</h3>
                </div>
                <div className='member'>
                    <img src="https://mobirise.com/bootstrap-template/about-us-page-template/assets/images/ayo-ogunseinde-316141-3333x3333.jpg" alt="" />
                    <p className='description'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <h5 style={{margin:"0px 8px", textAlign: "center"}} className="nameMember">Phan Thanh Thắng</h5>
                    <h3 className='dev'>Developer</h3>
                </div>

            </Slider>
        </div>
    )
}

export default About