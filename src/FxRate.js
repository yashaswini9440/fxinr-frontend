import React from 'react'
import "./style.scss"
import { Popover, PopoverBody} from 'reactstrap';

const FxRate = (props) => (
    <div>
    <div className="col-xs-6 col-md-3" name="fxRate">
        <h2>${props.fxRate.toFixed(2)}
        <Indicator rateMoment={props.rateMoment} companyName={props.companyName.replace(/\s/g, '')}/>
    </h2>
</div>
   <TransferAmount intendedAmount={props.intendedAmount}/>
    </div>
)

const TransferAmount = (props) => (
    <div className="col-xs-6 col-md-3" name="transferAmount">
        <h2>{props.intendedAmount}</h2>
    </div>
)

class Indicator extends React.Component{

    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            popoverOpen: false
        };
    }

    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }
    render() {
        if (this.props.rateMoment === 1) {
            return (

                <i id={'arrowSuccess'+this.props.companyName} className="glyphicon glyphicon-arrow-up text-success"
                   onClick={this.toggle}
                onMouseEnter={this.toggle}
                onMouseLeave={this.toggle}>
                <Popover placement="right-end" isOpen={this.state.popoverOpen} target={'arrowSuccess'+this.props.companyName}
                         toggle={this.toggle}>
                    <PopoverBody>There is high chance of {this.props.companyName} increasing the dollar value for next update</PopoverBody>
                </Popover>
                </i>
                )
        }
        else if (this.props.rateMoment === -1) {
            return (
                <i id={'arrowSuccess'+this.props.companyName} className="glyphicon glyphicon-arrow-down text-danger"
            onClick={this.toggle}
            onMouseEnter={this.toggle}
            onMouseLeave={this.toggle}>
        <Popover placement="right-end" isOpen={this.state.popoverOpen} target={'arrowSuccess'+this.props.companyName}
            toggle={this.toggle}>
        <PopoverBody>There is high chance of {this.props.companyName} decreasing the dollar value for next update</PopoverBody>
        </Popover>
        </i>)
        }
        else {
            return (<div></div>);
        }
    }

}


export default FxRate