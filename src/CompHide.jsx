import React from "react";

const CompHide =()=>{
    return (
        <div>
            <h3 className="hide">Hide Details ^</h3>
        <div>
            <span className="apy">APY</span><span className="nine">9.0%</span>
        </div > 
            <ul className="ul">
                <li>Calculated based on current rates</li>
                <li>All figures are estimates provied for your convenience only, and by no means represent guarented returns.</li>
            </ul>
        </div>
    );
}
export default CompHide;