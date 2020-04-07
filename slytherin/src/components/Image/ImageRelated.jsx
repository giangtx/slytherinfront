import React, {Component} from 'react'

class ImageRelated extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div className="col-lg-12">
                    <div className="image-related-text">
                        <span>Hình ảnh cùng chủ đề</span>
                    </div>
                </div>
                <div className="col-lg-6 col-md-2 col-sm-2 pd-l-r-15">
                    <a href="" title="">
                        <img className="picture-related-info" src='/image/resize/image11-min.jpg' alt=""/>
                    </a>
                </div>
            </div>
        );
    }
}
export default ImageRelated;