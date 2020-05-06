import React from 'react'

class ForumContent extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        return(
            <div className="col-lg-8">             
                <div className="froum-content">
                    <div className="header-avatar-froum">
                        <div className="row">
                            <div className="avatar-froum-div col-lg-2" style={{padding:'0px'}}>
                                <img className="avatar-froum" src='/image/avatarresize/DSC02249.jpg' alt=""/>
                            </div>
                            <div className="col-lg-10">
                                <a href="others.php?username=" style={{fontWeight:'500'}}>Slytherin</a><br/>
                                <span style={{fontSize:'15px'}}>Ngày đăng: 13/6/2020</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="/Slytherin/hinhanh/" title="">
                            <img class="image-froum" src='/image/resize/image11-min.jpg' alt=""/>
                        </a>
                    </div>
                    <div class="row" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                        <div className="icon-like col-lg-6">
                            <button id="">
                                <img src='/image/icon/like-like.png'/>
                            </button>
                            <span>1000</span>
                        </div>
                        <div className="col-lg-6" align="right" style={{paddingTop:'15px'}}>
                            <span>100 bình luận</span>
                        </div>
                    </div>
                    
                    <div class="describe-image">
                        <span>Mô tả</span><br/>
                    </div>
                </div>               
            </div>
        );
    }
}

export default ForumContent;