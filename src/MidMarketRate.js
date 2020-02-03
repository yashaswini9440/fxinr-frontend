import React from 'react'
import './style.scss'
import { Popover,PopoverHeader, PopoverBody} from 'reactstrap';

var labelStyle={
    paddingRight: '20px',
    fontWeight: 'bold',
    paddingTop:'10px'
}

var rowStyle= {
    marginBottom:'10px',
    flex : '1'
}

var flexStyle ={
    display:'flex',
    flexDirection:'row',
    flexWrap: 'wrap'
}


class MidMarketRate extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = {
            popoverOpen: false
        };
    }

    handleChange(e) {
        this.props.onIntendedAmountChange(e.target.value);
    }
    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }

    render() {
        const intendedAmount = this.props.intendedAmount;
        return (
            <div className="container-fluid">
                <div className="panel-group">
                    <div className="panel-heading">
                        <div className="row" style={flexStyle}>
                            <div className="col-sm-12 col-md-4">
                                <div className="panel panel-success header-box" id="rupeeRate" style={rowStyle}>
                                    <div className="panel-heading">Mid market exchange rate of rupee
                                        <span  id="infoSign" className="glyphicon glyphicon-info-sign" onMouseEnter={this.toggle}
                                               onClick={this.toggle}
                                        onMouseLeave={this.toggle}></span>
                                        <Popover placement="right-end" isOpen={this.state.popoverOpen} target="infoSign" toggle={this.toggle}>
                                            <PopoverBody>The mid-market rate is the mid-point between the buy and the sell prices of the two currencies
                                                to an exchange rate – what the buyer is prepared to pay and what the seller is prepared to sell for.</PopoverBody>
                                        </Popover>
                                    </div>
                                    <h4 className="card-title">{this.props.rupeeFxRate}</h4>
                                    <small className="card-subtitle">updated {this.props.rupeeLastUpdated} minutes ago</small>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4">
                                <div className="panel panel-success header-box" style={rowStyle}>
                                    <div className="panel-heading">Convert Amount </div>
                                        <label style={labelStyle}><h4>Enter USD </h4>
                                         </label>
                                        <input type="number" value={intendedAmount} className="inputBoxStyle" onChange={this.handleChange}
                                             id="intendedTrasferAmount" min="0" />
                                        <div>    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};




export default MidMarketRate