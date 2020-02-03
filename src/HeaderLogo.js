import React from 'react'
import './style.scss'

const HeaderLogo = (props) =>(
    <div className="container-fluid" id="fxinr-header">
        <div className="row" >
            <div className="col-md-4 col-xs-4">
                <div className="logo" id="logo">
                    <a  href="http://fxinr.com"><img src={require("./images/logo_30.png")} alt="fxinr"/></a>
                </div>
            </div>
            <div className="col-md-8 col-xs-8">
                <div className="verticalLine">
                    <h4 id="text-center">Compare Forex Rate From USD to INR</h4>
                </div>
            </div>
        </div>
    </div>
);

export default HeaderLogo;