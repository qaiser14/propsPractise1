import React, { Component } from 'react'
import './Rent.css'

class Apartment extends Component{
    render(){

        let response = this.props.Apartment_data.map((item, index)=>{
            return(
                <div className="Apartment100">
                    <p className="Ahdg1">{item.display}</p>
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

export default Apartment