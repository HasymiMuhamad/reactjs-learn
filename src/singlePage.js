import React, {Component} from 'react'





export default class Page1 extends Component{

  constructor (props){
    super(props);
    this.state = {nama:'hasymi'}
  }
  
  gantiNama = ()=>{
    this.setState({nama:'Muhamad Hasymi Hilman'});
  }
  
    render(){
        return(
          <div>
             <h1>{this.state.nama}</h1>
            <button onClick={this.gantiNama} > Ganti Nama</button>
          </div>
           
        )
    }
}