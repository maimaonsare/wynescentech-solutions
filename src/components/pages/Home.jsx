import React from 'react';
import './Home.css';
import Advert from '../adverts/Advert';
import Advanced from './Advanced';
import Ongoingcost from './Ongoingcost';

function Home() {
  return (
    <div className='home_content'>
    <div className="home">
        <div className='home_left'>
            <div className='quick_about'>
                <h3>Affordable Website Design and Development Services</h3>
                <div className='service'>
                    <h4>Get Your Website Up and Running 
                        for only <span>$249</span>
                    </h4>
                    <p className='service_descr'>
                        Web designs that makes your brand shine
                    </p>
                    <div className='far_left'>
                        <div className='shopping_cart'>
                            <div>
                            <i className='fa-solid fa-cart-shopping' />
                            </div>
                        </div>
                        <h5>Our Services</h5>
                    </div>
                    <ul className='service_list'>
                        <li><i className='fa fa-chevron-right' />Best Quality Design</li>
                        <li><i className='fa fa-chevron-right' />Responsive Websites</li>
                        <li><i className='fa fa-chevron-right' />Customized Web Designs</li>
                        <li><i className='fa fa-chevron-right' />E-commerce Websites</li>
                        <li><i className='fa fa-chevron-right' />Payment Integration</li>
                        <li><i className='fa fa-chevron-right' />SEO Optimization</li>
                        <li><i className='fa fa-chevron-right' />Guidelines on Hosting Services</li>
                    </ul>                    
                </div>
            </div>
        </div>
        <div className='home_right'>
            <div className='web_packages'>
                <div className='basic'>
                    <h1>Basic Wesite</h1>
                    <div className='contents'>
                        <div className='features'>
                            <h3>Features</h3>
                            <ul>
                                <li><i className='fa fa-chevron-right'></i>1-3 Responsive Pages </li>
                                <li><i className='fa fa-chevron-right'></i>Contact Page</li>
                                <li><i className='fa fa-chevron-right'></i>Laning Page</li>
                                <li><i className='fa fa-chevron-right'></i>Static Website</li>
                            </ul>
                            <p className='disclaimer'>
                                <span>Note:</span>
                                The web design (Upfront Cost) cost is exclusive of 
                                of the Ongoing Costs (Domain Registration, Web & Email Hosting, and Domain & Security SSL/TLS).
                                The Ongoing cost may vary based on the services provider selected.
                            </p>
                        </div>
                        <div className='cost_advert'>
                        <div className='variable_cost'>
                            <h3>Costs</h3>
                            <h4>Upfront Cost:</h4>
                            <ul className='costs'>
                                <li> <i className='fa fa-chevron-right'></i>Web Design</li>
                            </ul>
                            <h4>Ongoing Cost:</h4>
                            <ul className='costs'>
                                <li><i className='fa fa-chevron-right'></i>Domain Registration</li>
                                <li><i className='fa fa-chevron-right'></i>Web and Email Hosting Services</li>
                                <li><i className='fa fa-chevron-right'></i>Domain Security SSL/TLS</li>
                            </ul>
                        </div>
                        <div className='pricing'>
                            <div className='price_target'>
                                <h4>Basic Website Design</h4>
                                <p className='price_descr'>
                                    Get and deploy fast, reliable, and scalable
                                    site @ <span>$99</span>
                                </p>
                            </div>
                            <span className='order'>Order
                                <span className='today'> Today</span> &#8594;
                            </span>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='banner'>
                    <Advert />
                </div>
            </div>
        </div>
    </div>
    <div className='advanced_websites'>
        <Advanced />
    </div>
    <div className="ongoing_cost">
        <Ongoingcost />
    </div>
    </div>
  )
}

export default Home;