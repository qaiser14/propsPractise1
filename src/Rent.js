import React, { Component } from 'react'
import './Rent.css'

class Rent extends Component{
    render(){

        let response = this.props.rent_data.map((item, index)=>{
 
            return(
                <div className="greyBox">
                    <h2>{item.property}</h2>
                    <h2>{item.rent}</h2>
                </div>
            )
        })

        return(
            <div>
                {response}
            </div>
        )
    }
}

export default Rent