import * as React from "react";
// Style
import './SiteSearch.styl'; 

const SiteSearch: React.FunctionComponent = (props:any) => {
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
          <form className="site-search-form">
              <input type="text" placeholder="Search Cult Beauty"/>
              <div className="form-submit-button"></div>
              <div className="clear-float"></div>
          </form>
        
        </>
    );
};

export default SiteSearch