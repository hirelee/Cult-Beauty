import * as React from "react";
// Style
import './SiteTopBar.styl'; 

// Types
type TestProps = {
    test:String
}

//
// Function
//

const SiteTopBar: React.FunctionComponent<TestProps> = (props:any) => {
    // Set States
    const [getActiveRegion, setActiveRegion]= React.useState({ id:'gb', label:'United Kingdom', currency:{ code:'GBP',symbol:'£' }});
    const [getToggleRegions, setToggleRegions] = React.useState(false);

    //
    // Use Effect
    //

    React.useEffect(() => {
        // No Functionality  
    },[]);
  
    // Return
    return (
        <>
            <div className="site-top-bar">
                <div className="site-top-bar-content">
                    <div className="top-bar-region-select-button">
                        <img className="button-flag" src={`https://d10qoa1dy3vloz.cloudfront.net/public/img/flags/${getActiveRegion.id.toLowerCase()}.svg?m=2laxyi`}></img>
                        <div className="button-text">
                            Shipping to: <b>{getActiveRegion.label}</b> {getActiveRegion.currency.code} {getActiveRegion.currency.symbol} <div className="text-icon"></div>
                        </div>
                    </div>

                    <div className="top-bar-links">
                        <ol>
                            <li className="links-help"><div className="icon"></div><b>Help</b></li>
                            <li>FAQs</li>
                            <li>Shipping</li>
                            <li>Returns</li>
                        </ol>
                    </div>
                    <div className="clear-float"></div>
                </div>
            </div>
        </>
    );
};

export default SiteTopBar