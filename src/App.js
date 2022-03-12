import React, { Component } from 'react'
import data from './Data'
import Rent from './Rent'
import Apartment from './Apartment'
import Space from './Space'


class App extends Component{


  state={

      Webdata:data
  }

  render(){
      return(
        <div>
          <Rent rent_data={this.state.Webdata} />
          <Apartment Apartment_data={this.state.Webdata} />
          <Space Space_data={this.state.Webdata} />
        </div>
      )
  }
}

export default App