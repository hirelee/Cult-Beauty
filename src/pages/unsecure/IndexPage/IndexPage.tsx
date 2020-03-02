import * as React from "react";
import TestComp from "../../../component/TestComp/TestComp";

//
// Function
//

const IndexPage: React.FunctionComponent<{}> = () => {
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
      <h1>Welcome to React Template</h1>
      <TestComp test=""></TestComp>
    </>
  );
};

export default IndexPage
