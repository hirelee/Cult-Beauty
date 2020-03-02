import * as React from "react";
// Style
import './AccountPage.styl'; 
// Components
import AccountMenuComp from "../../../component/AccountMenuComp/AccountMenuComp";
import AccountAddressBookComp from "../../../component/AccountAddressBookComp/AccountAddressBookComp";
// Json
import SiteNavigation from "../../../component/SiteNavigation/SiteNavigation";
import SiteSearch from "../../../component/SiteSearch/SiteSearch";
import SiteRegionSelect from "../../../component/SiteRegionSelect/SiteRegionSelect";
import SiteTopBar from "../../../component/SiteTopBar/SiteTopBar";
import SiteFooter from "../../../component/SiteFooter/SiteFooter";
import SiteHeader from "../../../component/SiteHeader/SiteHeader";

// Types
type TestProps = {
    test:String
}

//
// Function
//

const AccountPage: React.FunctionComponent<TestProps> = (props:any) => {
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
            <SiteHeader test=""/>
            <div className="account-page">
                <div className="account-page-free-shipping">
                    <b>FREE SHIPPING</b> <i>on all orders over £15</i>
                </div>
                <div className="account-page-content">
                    <div className="page-menu">
                        <AccountMenuComp/>
                    </div>
                    <div className="page-view">
                        <AccountAddressBookComp/>
                    </div>
                    <div className="clear-float"></div>
                </div>
            </div>
            <SiteFooter/>
        </>
    );
};

export default AccountPage