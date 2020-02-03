import React from 'react'
import CompanyRate from './CompanyRate.js'
import MidMarketRate from "./MidMarketRate";
import BodyHeaderInfo from "./BodyHeaderInfo";
import HeaderLogo from'./HeaderLogo';
import './style.scss'

class Home extends  React.Component {

    constructor(){
        super();
        this.handleIntendedAmountChange = this.handleIntendedAmountChange.bind(this);
        this.state = {fxRates:{},
            loading: true,
          intendedAmount:1000}
    }


    componentDidMount(){
            let config = {
                method: 'GET',
                redirect:'follow',
                cache: 'default',
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            };
            fetch("https://zqn3yxrvpb.execute-api.us-east-1.amazonaws.com/prod/getRates",config)
                .then(response => {return response.text()})
                .then(val => {return val})
                .then( val => JSON.parse(val))
                .then(val => {this.setState({fxRates:val, loading:false})
            })
    }

    handleIntendedAmountChange(intendedAmount){
        this.setState({intendedAmount : intendedAmount});
    }

    render() {
        if (this.state.loading) {
            return (
                <div>
                    <HeaderLogo/>
                <div id="progress" className="progress">
                   <div id="progressbar" className="progress-bar progress-bar-striped progress-bar-animated active" role="progressbar"
                        aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">

                   </div>
                 </div>
                </div>
            );
         }
         else {
            const rates = this.state.fxRates.rates.map((rate) => {
                    let name = rate.company;
                    return <CompanyRate key={rate.company} companyName={rate.company}
                                        info={this.state.fxRates.info[name]}
                                        fxRate={rate.fxRate}
                                        intendedAmount={updateAmount(rate.fxRate, this.state.intendedAmount)}
                                        transferCost={getChargesForIntendedAmount(name.toLowerCase(), this.state.intendedAmount)}
                                        transferTime={this.state.fxRates.info[name][0]}
                                        rateMoment={this.state.fxRates.predictRates[name].rateMoment}/>
                }
            );
            const intendedAmount = this.state.intendedAmount;
            return (
                <div>
                    <HeaderLogo/>
                    <MidMarketRate rupeeFxRate={this.state.fxRates.rupee.fxRate}
                                   rupeeLastUpdated={this.state.fxRates.rupeeLastUpdated}
                                   intendedAmount={intendedAmount}
                                   onIntendedAmountChange={this.handleIntendedAmountChange}/>
                    <div className="container-fluid">
                        <div className="panel-group">
                            <BodyHeaderInfo lastUpdated={this.state.fxRates.lastUpdated}/>
                            {rates}
                        </div>
                    </div>
                </div>
            )
        }
     }
}

function updateAmount(fxrate,intendedAmount) {
    var totalAmount = intendedAmount * fxrate;
    return totalAmount.toFixed(2);
}


function getChargesForIntendedAmount(company,amount) {
    var ratesMap = getRates();
    var rates = ratesMap[company];
    for( var rate in rates) {
        var vals = rates[rate][0].split("-");
        if(isNaN(parseInt(vals[1]))) {
            if(company.trim() === "transferwise"){
                return 0.009*amount;
            }
            return rates[rate][1];
        }
        else if((parseInt(vals[0],10) <= parseInt(amount,10)) &&
            (parseInt(vals[1],10) >= parseInt(amount,10)) ) {
            return rates[rate][1];
        }
    }
    return "N/A";
}

function getRates() {
    var rates = {};
    var xooomRates = [["0-500",2.99],["501-1000",4.99],["1001-X",0]];
    rates["xoom"] = xooomRates;
    var remitlyRates = [["0-999",3.99],["1000-X",0]];
    rates["remitly"] = remitlyRates;
    rates["remitly economy"] = remitlyRates;
    var remit2indiaRates = [["0-500",3.00],["501-999",5.00],["1001-X",0]];
    rates["remit2india"] = remit2indiaRates;
    var iciciRates = [["0-999",3.00],["1000-X",0]];
    rates["icici"] = iciciRates;
    var wuRates = [["0-1000",4.00],["1000-X",0]];
    rates["western union"] = wuRates;
    var axisRates = [["0-X",0]];
    rates["axis"] = axisRates;
    var transfastRates = [["0-X",0]];
    rates["transfast"] = transfastRates;
    var transferWise = [["0-300",2.70],["301-X",0]];
    rates["transferwise"] = transferWise;
    var ria = [["0-X",0]];
    rates["ria"] = transferWise;
    return rates;
}
export default  Home