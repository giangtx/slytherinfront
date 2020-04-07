import React, {Component} from 'react'
import HeaderCom from './Home/HeaderCom'
import FooterCom from './Layout/FooterCom';
import SlideShow from './Home/SlideShow';
import HomeCollection from './Home/HomeCollection'
import HomeImage from './Home/HomeImage';
class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <HeaderCom></HeaderCom>
                <SlideShow></SlideShow>
                <HomeCollection></HomeCollection>
                <HomeImage></HomeImage>
                <FooterCom></FooterCom>
            </div>
        );
    }
}
export default Home;