import * as React from "react";
// Style
import './SiteNavigation.styl'; 
// Json
import navigation from "../../json/navigation";

// // Types
// type TestProps = {
//     test:String
// }

//
// Function
//

const SiteNavigation: React.FunctionComponent = (props:any) => {
    // Set State
    const [getNavigation, setNavigation] = React.useState(navigation);

    //
    // Use Effect
    //

    React.useEffect(() => {
        // No Functionality  
    },[]);
    
    const loadPage = async (href:string) => {
        alert(href);
    }

    // Return
    return (
        <>
            <nav>
                <ul>
                    {getNavigation && getNavigation.map((value, index) => {
                        return( 
                            // Parent
                            <li key={index} onClick={() => loadPage(value.href)}>{value.text}</li>
                            // Child - To Be Built Out
                        )
                    })}
                </ul>
            </nav>
            <div className="clear-float"></div>
        </>
    );
};

export default SiteNavigation