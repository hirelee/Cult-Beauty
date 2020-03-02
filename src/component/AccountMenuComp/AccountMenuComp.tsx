import * as React from "react";
// Style
import './AccountMenuComp.styl'; 

//
// Function
//

const AccountMenuComp: React.FunctionComponent<{}> = () => {
  // Set States
  const [getMenu, setMenu] = React.useState(null);

  //
  // Use Effect
  //

  React.useEffect(() => {
    // No functionality
  },[]); 

  //
  // Return
  //

  return (
    <>      
        <div className="account-menu">
            <h2>MY ACCOUNT</h2>
            <ol>
                <li>Account Dashboard</li>
                <li>Account Information</li>
                <li className="li-active">Address Book</li>
                <li>Credit Cards and Payment</li>
                <li>My Orders</li>
                <li>My Product Reviews</li>
                <li>Wishlist</li>
                <li>Newsletter Subscriptions</li>
                <li>My Beauty Preferences</li>
                <li>Refer A Friend and Get £10 Off</li>
            </ol>
        </div>

    </>
  );
};

export default AccountMenuComp
