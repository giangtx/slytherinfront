import React from 'react'

class ForumRightbar extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        return(
            <div className="col-lg-4">
                <div className="row" style={{paddingLeft:'15px'}}>
                    <div className="avatar-froum-div col-lg-3" style={{padding:'0px'}}>
                        <img className="avatar-froum" src='/image/avatarresize/DSC02249.jpg' alt=""/>
                    </div>
                    <div className="col-lg-9">
                        <span style={{fontSize:'15px'}}>Bạn chưa đăng nhập</span>
                    </div>
                </div>
                <div id="top-like">
                    <div className="title-toplike">
                        <span >Ảnh nhiều lượt thích</span>
                    </div>
                    <div className="image-top-like-all">
                        <div className="row">
                            <div className="col-lg-5">
                                <img class="image-top-like" src='/image/resize/cat_winter_fluffy_snow_99366_3840x2160-min.jpg' alt=""/>
                            </div>
                            <div class="col-lg-5">
                                <span>0 lượt thích</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ForumRightbar;