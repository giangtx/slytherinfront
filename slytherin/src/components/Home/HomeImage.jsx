import React, {Component} from 'react'

class HomeImage extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="featured-photos">
                <div className="container-fluid">
                    <span className="f-40">HÌNH ẢNH NỔI BẬT</span>
                    <div id="featured-photos-list">
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-sm-6 p-l-r-5">
                                <a href="hinhanh/" title="">
                                    <img className="featured-photos-object" src='/image/resize/a1-min.jpg' alt=""/>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 p-l-r-5">
                                <a href="hinhanh/" title="">
                                    <img className="featured-photos-object" src='/image/resize/a2-min.jpg' alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
	        </div>
        );
    }
}
export default HomeImage;