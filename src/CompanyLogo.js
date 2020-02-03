import React from 'react'


const imgStyle = {
    width: '150px',
    height: '100px'
}

const CompanyLogo = props => (
     <div className="col-xs-12 col-md-3">
         <a target="_blank" href={props.info[1]}>
             <img src={require(`./images/${props.companyName}-Dollar-to-Rupee-Rate.png`)}
            alt={props.companyName +"--Dollar-to-Rupee-Rate"}
             className="img-rounded center-block" style={imgStyle}/>
         </a>
</div>);

export default CompanyLogo


