import React, {Component} from 'react'
import ImageSponsored from './ImageSponsored'
import ImageRelated from './ImageRelated'

class ImageComments extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="comment-form">
                <div className="row" style={{paddingLeft:'0px'}}>
                    <div className="col-lg-1 col-md-1 comment-image">
                        <img className="avatar-comment" src='/image/avatarresize/DSC02249.jpg' alt=""/>
                    </div>
                    <div className="col-lg-11 col-md-11 ">
                        <textarea id="txtComment" className="comment-text" name="" placeholder="Thêm bình luận của bạn"></textarea>
                        <button id="btn-comment" className="btn btn-primary">Bình luận</button>
                    </div>
                    
                    <div className="col-lg-12 comment-all">
                        <div className="row">
                            <div className="col-lg-1 col-md-1 comment-image">
                                <img className="avatar-comment" src='/image/avatarresize/DSC02249.jpg' alt=""/>
                            </div>
                            <div className="col-lg-11 col-md-11">
                                <div className="username-comment">
                                    <a href="" class="span-username-comment">Người bình luận</a>
                                </div>
                                <div style={{marginTop:'5px'}}>
                                    <span>Test bình luận</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ImageComments;