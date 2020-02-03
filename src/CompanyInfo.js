
import React from 'react'

function CompanyInfo(props) {
    return(
    <div className="col-xs-12 col-md-3" name="companyInfo">
        <input type="hidden" name="companyId" value={props.companyName}/>
            <div className="col-xs-12">
                <div className="col-xs-6 text-right" name="transferCost">Transfer Cost : </div>
                <div className="col-xs-6 text-left nopadding" name="transferCost"><b>{props.transferCost}</b> $</div>
            </div>
            <div className="col-xs-12">
                <div className="col-xs-6 text-right" name="transferCost">Transfer Time : </div>
                <div className="col-xs-6 text-left nopadding" name="transferTime"><b>{props.transferTime}</b></div>
            </div>
    </div>);
}
export default CompanyInfo