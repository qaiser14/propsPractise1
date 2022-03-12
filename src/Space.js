import React, { Component } from 'react'
import './Rent.css'

class Space extends Component{
    render(){

        let response = this.props.Space_data.map((item, index)=>{
            return(
                <div className="spaceBox1">
                    <h2>{item.spaceHdg}</h2>
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

export default Space