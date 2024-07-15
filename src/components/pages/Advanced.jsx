import React from 'react';
import './Advanced.css';

function Advanced() {
  return (
    <div className='premium_packages'>
        <h1>Advanced Web Packages</h1>
        <p>The advanced website section has adjustments that is an update of 
            the basic webpages.
        </p>
        <div className='the_packages'>
            <div className='package_name business'>
                <div className='title'>
                    <h3>Small Business Website</h3>
                    <div className='underline'>
                        <span className='tl'></span>
                        <span className='tr'></span>
                    </div>
                </div>
                <div className='items'>
                    <h4>Features</h4>
                    <ul className='pkg_list'>
                        <li><i class="fa-solid fa-angles-right"></i>7-10 Responsive Pages</li>
                        <li><i class="fa-solid fa-angles-right"></i>Dynamic Website</li>
                        <li><i class="fa-solid fa-angles-right"></i>Contact Page</li>
                        <li><i class="fa-solid fa-angles-right"></i>Landing Page</li>
                        <li><i class="fa-solid fa-angles-right"></i>Social Media Integration</li>
                        <li><i class="fa-solid fa-angles-right"></i>Google Analytics</li>
                        <li><i class="fa-solid fa-angles-right"></i>Customer Support Toolkit</li>
                    </ul>
                </div>
                <div className='items'>
                    <h4>Upfront Cost</h4>
                    <ul className='pkg_list'>
                        <li><i class="fa-solid fa-angles-right"></i>Web Design and Development</li>
                        <li><i class="fa-solid fa-angles-right"/>Starting from $215 </li>
                    </ul>
                </div>
                <div className='subcribe_go'>
                    <a href=''>
                        <span>Place Order</span>
                        <span><i class="fa-solid fa-angles-right"/></span>
                    </a>
                </div>
            </div>
            <div className='package_name ecommerce'>
                <div className='title'>
                    <h3>Advanced/E-Commerce Website</h3>
                    <div className='underline'>
                        <span className='tl'></span>
                        <span className='tr'></span>
                    </div>
                </div>
                <div className='items'>
                    <h4>Features</h4>
                    <ul className='pkg_list'>
                        <li><i class="fa-solid fa-angles-right"></i>10-15 Responsive Pages</li>
                        <li><i class="fa-solid fa-angles-right"></i>Content Management Systems</li>
                        <li><i class="fa-solid fa-angles-right"></i>Order Management System</li>
                        <li><i class="fa-solid fa-angles-right"></i>Live Chat</li>
                        <li><i class="fa-solid fa-angles-right"></i>E-Commerce Tools</li>
                        <li><i class="fa-solid fa-angles-right"></i>Delivery Solutions</li>
                        <li><i class="fa-solid fa-angles-right"></i>Payment Integration</li>
                    </ul>
                </div>
                <div className='items'>
                    <h4>Upfront Cost</h4>
                    <ul className='pkg_list'>
                        <li><i class="fa-solid fa-angles-right"></i>Web Design and Development</li>
                        <li><i class="fa-solid fa-angles-right"/>Starting from $420 </li>
                    </ul>
                </div>
                <div className='subcribe_go'>
                    <a href=''>
                        <span>Place Order</span>
                        <span><i class="fa-solid fa-angles-right"/></span>
                    </a>
                </div>
            </div>
            <div className='package_name corporate'>
                <div className='title'>
                    <h3>Corporate Website</h3>
                    <div className='underline'>
                        <span className='tl'></span>
                        <span className='tr'></span>
                    </div>
                </div>
                <div className='items'>
                    <h4>Features</h4>
                    <ul className='pkg_list'>
                        <li><i class="fa-solid fa-angles-right"></i>15+ Pages</li>
                        <li><i class="fa-solid fa-angles-right"></i>Advanced Functionality</li>
                        <li><i class="fa-solid fa-angles-right"></i>Bespoke Design (Customized from Scratch)</li>
                        <li><i class="fa-solid fa-angles-right"></i>CRM Integration</li>
                        <li><i class="fa-solid fa-angles-right"></i>Database Population</li>
                        <li><i class="fa-solid fa-angles-right"></i>Live Chat</li>
                        <li><i class="fa-solid fa-angles-right"></i>Payment Integration</li>
                    </ul>
                </div>
                <div className='items'>
                    <h4>Upfront Cost</h4>
                    <ul className='pkg_list'>
                        <li><i class="fa-solid fa-angles-right"></i>Web Design and Development</li>
                        <li><i class="fa-solid fa-angles-right"/>Starting from $710 </li>
                    </ul>
                </div>
                <div className='subcribe_go'>
                    <a href=''>
                        <span>Place Order</span>
                        <span><i class="fa-solid fa-angles-right"/></span>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Advanced;