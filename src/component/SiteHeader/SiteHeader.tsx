import * as React from "react";
// Style
import './SiteHeader.styl'; 
import SiteTopBar from "../SiteTopBar/SiteTopBar";
import SiteRegionSelect from "../SiteRegionSelect/SiteRegionSelect";
import SiteSearch from "../SiteSearch/SiteSearch";
import SiteNavigation from "../SiteNavigation/SiteNavigation";

// Types
type TestProps = {
    test:String
}

//
// Function
//

const SiteHeader: React.FunctionComponent<TestProps> = (props:any) => {
    // Set States
    const [getActiveRegion, setActiveRegion]= React.useState({ id:'gb', label:'United Kingdom', currency:{ code:'GBP',symbol:'£' }});
    const [getToggleRegions, setToggleRegions] = React.useState(false);
    const [getUserCookie, setUserCookie] = React.useState({ firstName:'Lee', lastName:'Marshall'});

    //
    // Use Effect
    //

    React.useEffect(() => {
        // No Functionality  
    },[]);
  
    // Return
    return (
        <>
            <SiteTopBar test=""/>
            { getToggleRegions && <SiteRegionSelect/>}
            <div className="header">
                <div className="header-container">
                    <div className="header-site-logo"></div>
                    <div className="header-account-menu">
                        <ol>
                            <li className="menu-greeting">Hi, {getUserCookie.firstName}!</li>
                            <li><div className="menu-icon menu-icon-user"></div>My Account</li>
                            <li><div className="menu-icon menu-icon-heart"></div>Wishlist</li>
                            <li><div className="menu-icon menu-icon-logout"></div>Logout</li>
                        </ol>
                    </div>
                    <SiteSearch/>
                    <div className="clear-float"></div>
                    <div className="header-bag-count">
                        <div className="count-icon">
                            <div className="count-icon-number">0</div>
                            <img src="https://d10qoa1dy3vloz.cloudfront.net/public/img/icon-bag.svg?m=2kzr3t"></img>
                        </div>
                        <div className="count-text">
                            <div className="text-large">ITEMS</div>
                            <div className="text-small">IN YOUR BAG</div>
                        </div>
                    </div>
                    <div className="clear-float"></div>
                </div>
            </div>
            <SiteNavigation/>
        </>
    );
};

export default SiteHeader