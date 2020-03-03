import * as React from "react";
// Style
import './AccountAddressBook.styl'; 

//
// Function
//

const AccountAddressBookComp: React.FunctionComponent<{}> = () => {
  // Set States
  const [getState, setState] = React.useState(null);

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
        <div className="account-address-book">
            <div className="address-book-defaults">
                <h1>DEFAULT ADDRESSES</h1>
                <div className="address-column">
                    <div className="address-divide-shipping"></div>
                    <h2>SHIPPING ADDRESS</h2>
                    <div className="address">
                        <div className="address-line">Lee Marshall</div>
                        <div className="address-line">5 Schumann Close</div>
                        <div className="address-line">Browns Wood</div>
                        <div className="address-line">Milton Keynes</div>
                        <div className="address-line">MK7 8DL</div>
                        <div className="address-line">T: 07742148289</div>
                        <div className="address-edit-button">EDIT</div>
                    </div>
                </div>
                <div className="address-column">
                    <h2>BILLING ADDRESS</h2>
                    <div className="address-divide-billing"></div>
                    <div className="address">
                        <div className="address-line">Lee Marshall</div>
                        <div className="address-line">5 Schumann Close</div>
                        <div className="address-line">Browns Wood</div>
                        <div className="address-line">Milton Keynes</div>
                        <div className="address-line">MK7 8DL</div>
                        <div className="address-line">T: 07742148289</div>
                        <div className="address-edit-button">EDIT</div>
                    </div>
                </div>
                <div className="clear-float"></div>
            </div>
            <div className="address-additional">
                <h1>ADDITIONAL ADDRESSES</h1>
                <div className="address-additional-divide"></div>
                <div className="address-empty">
                    You have no additional addresses.
                </div>
            </div>
            <div className="add-address-button">ADD A NEW ADDRESS</div>
        </div>
    </>
  );
};

export default AccountAddressBookComp
