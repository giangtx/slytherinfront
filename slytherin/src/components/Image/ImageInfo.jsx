import React, {Component} from 'react'
import ImageSponsored from './ImageSponsored'
import ImageRelated from './ImageRelated'

class ImageInfo extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <img className="picture-info" src='/image/background/image1.jpg' alt=""/>
                    <div className="col-lg-12" style={{padding:'0px'}}>
                        <div className="icon-like">
                            <button id="like-image">
                                <img src='/image/icon/like.png'/>
                            </button>
                            <span>Thích</span>
                            <span style={{marginLeft:'25px'}}>100 lượt thích</span>
                            <span style={{marginLeft:'25px'}}>100 bình luận</span><br/>
                            <span>Ngày đăng: </span>
                        </div>
                        <div className="image-info-header-text">
                            <span>Thông tin hình ảnh</span><br/>
                        </div>
                        <div className="image-info-text">
                            <div id="avatar-poster">
                                <div className="row">
                                    <div className="col-lg-1 col-md-1 comment-image">
                                        <img className="avatar-comment" src='/image/avatarresize/DSC02249.jpg' alt=""/>
                                    </div>
                                    <div className="col-lg-11 col-md-11">
                                        <div className="name-poster-image">
                                            <a href="">Slytherin</a><br/>
                                            <span>Nguyễn Trường Giang</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <span className="fw-image-info-text">Mô tả hình ảnh: </span><br/>
                            <span>Thể loại: </span><br/>
                            <span>Kích cỡ file: </span><br/>
                            <span>Độ phân giải: </span><br/>
                            <span className="fw-image-info-text">Cam kết: </span><br/>
                            <div style={{paddingLeft:'15px'}}>
                                <span>✓ Miễn phí cho mục đích sử dụng cá nhân và thương mại</span><br/>
                                <span>✓ Không yêu cầu ghi nhận</span>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}
export default ImageInfo;