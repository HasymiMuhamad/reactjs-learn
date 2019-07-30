import React, {Component } from 'react'
import Page1 from './singlePage'
import Header from './Header'
import Footer from './Footer'




export default class Data extends Component {

 

  render (){
    return(
      <div>
         <h1>Test</h1>
         <Page1 nama='hasymi' />
         <Header />
         <Footer />
      </div>
     
       
    )
  }
}





