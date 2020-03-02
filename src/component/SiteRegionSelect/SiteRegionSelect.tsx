import * as React from "react";
// Style
import './SiteRegionSelect.styl'; 
// Json
import regions from '../../json/regions';

//
// Function
//

const SiteRegionSelect: React.FunctionComponent = (props:any) => {
    // Set States
    const [getRegions, setRegions] = React.useState(regions);
    const [getActiveRegion, setActiveRegion]= React.useState({ id:'gb', label:'United Kingdom', currency:{ code:'GBP',symbol:'£' }});

    //
    // Use Effect
    //

    React.useEffect(() => {
        // No Functionality  
    },[]);
  
    // Return
    return (
        <>
            {/** Overlay */}
            <div className="site-region-overlay"></div>
            {/** Panel */}
            <div className="site-region-panel">
                <div className="panel-close-button">
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <line y1="0" x1="20" y2="20" x2="0" stroke-width="1.5" stroke="#000" fill="none"></line>
                            <line y1="0" x1="0" y2="20" x2="20" stroke-width="1.5" stroke="#000" fill="none"></line>
                        </g>
                    </svg>
                </div>
                <div className="clear-float"></div>
                <h1>Shipping Country</h1>
                <div className="panel-active">
                    <img className="active-flag" src={`https://d10qoa1dy3vloz.cloudfront.net/public/img/flags/${getActiveRegion.id.toLowerCase()}.svg?m=2laxyi`}></img>
                    <div className="active-text">
                        Shipping to: <b>{getActiveRegion.label}</b> {getActiveRegion.currency.code} {getActiveRegion.currency.symbol}
                    </div>
                </div>
                <div className="panel-search">
                    <form className="search-form">
                        <div className="form-icon"></div>
                        <input type="text" placeholder="Search for country"/>
                    </form>
                </div>
                <div className="panel-region-list">
                    <div className="list-scroll">
                        {getRegions && getRegions.map((value,index) => {
                            return(
                                <span key={index}>
                                    { value['can_ship'] === "true" && 
                                        <div className="scroll-item">
                                            <img className="item-image" src={`https://d10qoa1dy3vloz.cloudfront.net/public/img/flags/${value.id.toLowerCase()}.svg?m=2laxyi`}></img>
                                            <div className="item-label">{value.label}</div>
                                            {value.currency && 
                                                <>
                                                    <div className="item-currency">EUR {value.currency.symbol[0]}</div>                
                                                </>
                                            }
                                            {!value.currency && 
                                                <>
                                                    <div className="item-currency">GBP £</div>                     
                                                </>
                                            }
                                            <div className="clear-float"></div>
                                        </div>
                                    }
                                </span>
                            )
                        })}
                    </div>
                </div>
            </div> 
        </>
    );
};

export default SiteRegionSelect