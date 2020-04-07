import React, {Component} from 'react'

class ImageSponsored extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div className="col-lg-12">
                    <div className="image-sponsored-text">
                        <span>Hình ảnh được tài trợ</span>
                    </div>
                </div>
                <div className="col-lg-6 col-md-2 col-sm-2 pd-l-r-15">
                    <a href="" title="">
                        <img className="picture-info" src='/image/resize/image10-min.jpg' alt=""/>
                    </a>
                </div>
            </div>
        );
    }
}
export default ImageSponsored;