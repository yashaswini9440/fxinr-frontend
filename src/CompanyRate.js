
import React from 'react'
import CompanyInfo from './CompanyInfo'
import CompanyLogo from './CompanyLogo'
import FxRate from "./FxRate"
import "./style.scss"


var panelStyle = {
    borderColor: 'rgb(172, 193, 204)'
}

class CompanyRate extends React.Component {

    render(){
        return (
        <div className="panel panel-custom-color" style={panelStyle}>
        <div className="panel-heading panel-heading-custom"> <h3 className="panel-title">{this.props.companyName}</h3></div>
        <div className="panel-body">
            <div className="row" name="company">
             <CompanyLogo companyName={this.props.companyName} info={this.props.info}/>
             <CompanyInfo companyName={this.props.companyName} transferCost={this.props.transferCost}
                          transferTime={this.props.transferTime} />
              <FxRate fxRate={this.props.fxRate} rateMoment={this.props.rateMoment}
                      companyName={this.props.companyName} intendedAmount={this.props.intendedAmount}/>
            </div>
        </div>
        </div>)
    }
}
export default CompanyRate
