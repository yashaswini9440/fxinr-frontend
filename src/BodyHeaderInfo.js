import React from 'react'
import './style.scss'


const BodyHeaderInfo = (props) =>(
        <div className="panel-heading">
            <div className="row">
                <div className="hidden-xs hidden-sm col-xs-6 col-md-3">
                </div>
                <div className="hidden-xs hidden-sm col-xs-6 col-md-3">
                </div>
                <div className="hidden-xs hidden-sm col-xs-12 col-md-3">
                    <div className="row">
                        <h2>Fx Rate</h2>
                    </div>
                    <div className="row">
                        <small>last updated: {props.lastUpdated} </small>
                    </div>
                </div>
                <div className="hidden-xs hidden-sm col-xs-12 col-md-3">
                    <h2>Receivable Amount</h2>
                </div>
            </div>
        </div>
)
export default BodyHeaderInfo