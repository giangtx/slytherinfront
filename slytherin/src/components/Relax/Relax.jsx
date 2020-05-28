import React from 'react'
import './css/relax.css'
class Relax extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.testfunt();
    }
    testfunt = () =>{
        
    }
    render(){
        return(
            <div className="relax" ref="testfun">bân</div>
        )
    }
}
export default Relax;
