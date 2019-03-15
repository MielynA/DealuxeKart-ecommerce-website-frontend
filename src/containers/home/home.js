import React from 'react';

import '../../styles/homepage.css';


class Home extends React.Component {








    render() {
        return (
            <React.Fragment>

                <div id="myCarousel" className="carousel slide" data-ride="carousel">

                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>


                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            <img src={require('../../images/chainwallet.jpg')} alt=""></img>
                            <div className="carousel-caption">
                                <h3>Chain Wallet</h3>
                                <p>The atmosphere in New York is lorem ipsum.</p>
                            </div>
                        </div>

                        <div className="item">
                            <img src={require('../../images/handletote.jpg')} alt=""></img>
                            <div className="carousel-caption">
                                <h3>Handle tote bag</h3>
                                <p>Thank you, Chicago - A night we won't forget.</p>
                            </div>
                        </div>

                        <div className="item">
                            <img src={require('../../images/totebagpink.jpg')} alt=""></img>
                            <div className="carousel-caption">
                                <h3>Tote Bag Pink</h3>
                                <p>Even though the traffic was a mess, we had the best time.</p>
                            </div>
                        </div>
                    </div>


                    <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>



                <div className='container'>
                    <h2>Welcome to DealuxeKart</h2>
                    <h5>Best Seller</h5>
                    <div className='row'>
                        <div className='col-12'>
                            <p><strong>Best Seller</strong></p>
                            <a href="#demo">
                                <img className='bestseller ' src={require('../../images/blackhandbag.jpg')} alt=''></img></a>
                            <a href="#demo">
                                <img className='bestseller' src={require('../../images/crossbody.jpg')} alt=''></img></a>
                            <a href="#demo">
                                <img className='bestseller' src={require('../../images/shoulderbag.jpg')} alt=''></img></a>
                            <a href="#demo">
                                <img className='bestseller' src={require('../../images/fringebucket.jpg')} alt=''></img></a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home; 