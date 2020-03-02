import * as React from "react";
// Style
import './SiteFooter.styl'; 
import SiteNavigation from "../SiteNavigation/SiteNavigation";

const SiteFooter: React.FunctionComponent = (props:any) => {
    // Set State
    // const [getNavigation, setNavigation] = React.useState(navigation);

    //
    // Use Effect
    //

    React.useEffect(() => {
        // No Functionality  
    },[]);
    
    // Return
    return (
        <>
            <div className="site-footer">
                <div className="site-footer-content">
                    <SiteNavigation/>
                    <div className="site-footer-contact">
                        <div className="contact-left">
                           <div className="left-mail-icon"></div>Contact us
                        </div>
                        <div className="contact-right">
                            <div className="right-telephone-icon"></div>
                            <div className="right-item">
                                <b>UK</b> 0800 108 8822
                            </div>
                            <div className="right-item">
                                <b>International</b> +44 203 471 3000
                            </div>
                        </div>
                        <div className="clear-float"></div>
                    </div>
                    <div className="site-footer-join">
                        <div className="join-content">
                            <h2>
                                <span className="h2-brown">{'{'}</span>
                                JOIN
                                <span className="h2-brown">{'}'}</span>
                            </h2>
                            <h1>THE CULT</h1>
                            <p>Be first to hear about our latest launches Never miss out on exciting offers & competitions Gain expert advice for looking red-carpet ready... <br/>24/7. <span className="link-underline">View our privacy policy</span></p>
                            <form className="join-form">
                                <input type="text" placeholder="Enter your email..."/><button className="form-submit-button">SIGN UP</button>
                            </form>
                        </div>
                    </div>
                    <div className="site-footer-social">
                        <div className="social-content">
                            <h2>
                                <span className="h2-brown">{'{'}</span>
                                GET
                                <span className="h2-brown">{'}'}</span>
                            </h2>
                            <h1>SOCIAL</h1>
                            <div className="social-links">
                                <div className="social-link link-facebook"></div>
                                <div className="social-link link-twitter"></div>
                                <div className="social-link link-pinterest"></div>
                                <div className="social-link link-instagram"></div>
                                <div className="social-link link-youtube"></div>
                            </div>
                            <div className="social-column">
                                <div>FAQs</div>
                                <div>Returns</div>
                                <div>Shipping</div>
                                <div>Payments</div>
                                <div>Promotions</div>
                                <div>Contact Us</div>
                            </div>
                            <div className="social-column">
                                <div>Experts</div>
                                <div>Glossary</div>
                                <div>Sitemap</div>
                            </div>
                            <div className="social-column">
                                <div>Terms & Conditions</div>
                                <div>Checkout Security</div>
                                <div>Privacy Policy</div>
                                <div>Cookie Policy</div>
                                <div>Modern Slavery Policy</div>
                            </div>
                            <div className="social-column">
                                <div>About Us</div>
                                <div>Careers</div>
                                <div>Affiliates</div>
                                <div>Refer A Friend</div>
                            </div>
                            <div className="clear-float"></div>
                            <p>Cult Beauty is the insider’s guide to the world's best beauty products. From skin care to make up, each of the beauty products is chosen by our world-class expert panel for its efficacy and stand-alone brilliance.</p>
                            <div className="social-legal">© Copyright 2007-2020 Cult Beauty</div>
                        </div>

                    </div>
                    <div className="clear-float"></div>
                </div>
            </div>   
        </>
    );
};

export default SiteFooter