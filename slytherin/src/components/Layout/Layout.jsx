import React, {Component} from 'react'
import FooterCom from './FooterCom'
import HeaderChild from './HeaderChild';
class Layout extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <HeaderChild />
                {this.props.children}
                <FooterCom />
            </div>
        );
    }
}
export default Layout;