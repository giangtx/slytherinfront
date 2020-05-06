import React from 'react';
class ImageInfo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            imageInfo:{},
            isLoading:true,
        }
        //this.changeIdcollec=this.changeIdcollec.bind(this)
    }
    componentDidMount(){
        this.setState({isLoandding:true});
        const token = localStorage.getItem('token');
        var url='';
        var headerauth=''
        if (token !== null) {
            url='/api/v1/auth/hinhanh/';
            headerauth="Bearer " + token
        }else{
            url='/api/v1/public/hinhanh/';
            headerauth=''
        }
        fetch(url+this.props.matchParam.imageId,{
            method: 'get',
            headers: {
                Accept: 'Application/json',
                "Content-type": "Application/json",
                Authorization: headerauth
            }
        })
        .then(response=>response.json())
        .then(data => this.setState({
            imageInfo:data,
            isLoading:false
        },() => {  
            this.props.changeIdColl(this.state.imageInfo.data.mabosuutap)
        }));    
    }
    likeHandle = () =>{
        const token = localStorage.getItem('token');
        if (token !== null) {
            fetch('/api/v1/auth/thich', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: "Bearer " + token
                },
                body: JSON.stringify({
                    mahinhanh: this.props.matchParam.imageId,
                }),
            })
            .then(response=>response.json())
            .then(data => this.setState({
                imageInfo:data,
                isLoading:false
            },() => {  
                this.props.changeIdColl(this.state.imageInfo.data.mabosuutap)
            }));  
        }else{
            alert("bạn phải đăng nhập để sử dụng chức năng này!")
        }
    }
    render(){
        const {imageInfo,isLoading}=this.state;

        if(isLoading){
            return(
                <div className="content" >
                    <div className="load-wrapp"align="center">
                        <div className="load-10">
                            <div className="bar"></div>
                        </div>
                    </div>
                </div>
                
                
            );
        }
        if(imageInfo.errorCode!=1){
            return(
                <div className="content" >
                    <div className="load-wrapp"align="center">
                        <div className="load-10">
                            <div className="bar"></div>
                        </div>
                    </div>
                </div>   
            );
        }
        return(
            <div>
                <img className="picture-info" src={'/image/background/'+imageInfo.data.tenhinhanh} alt=""/>
                    <div className="col-lg-12" style={{padding:'0px'}}>
                        <div className="icon-like">
                            {imageInfo.data.trangthaithich===1 
                                ? <button id="like-image" onClick={this.likeHandle}>
                                    <img src='/image/icon/like-like.png'/>
                                </button>
                                : <button id="like-image" onClick={this.likeHandle}>
                                    <img src='/image/icon/like.png'/>
                                </button>}
                            
                            <span>Thích</span>
                            <span style={{marginLeft:'25px'}}>{imageInfo.data.solike} lượt thích</span>
                            <span style={{marginLeft:'25px'}}>{imageInfo.data.sobinhluan} bình luận</span><br/>
                            <span>Ngày đăng: </span>
                        </div>
                        <div className="image-info-header-text">
                            <span>Thông tin hình ảnh</span><br/>
                        </div>
                        <div className="image-info-text">
                            <div id="avatar-poster">
                                <div className="row">
                                    <div className="col-lg-1 col-md-1 comment-image">
                                        <img className="avatar-comment" src={imageInfo.data.anhdaidien !=null? '/image/avatarresize/'+ imageInfo.data.anhdaidien : "/image/avatarresize/user.png"} alt=""/>
                                    </div>
                                    <div className="col-lg-11 col-md-11">
                                        <div className="name-poster-image">
                                            <a href="" style={{fontSize:'20px'}}>{imageInfo.data.tendangnhap != null ? imageInfo.data.tendangnhap : "Hệ thống"}</a><br/>
                                            <span>Nguyễn Trường Giang</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <span className="fw-image-info-text">Mô tả hình ảnh: {imageInfo.data.mota}</span><br/>
                            <span>Thể loại: {imageInfo.data.tenbosuutap}</span><br/>
                            <span>Kích cỡ file: {imageInfo.data.kichco}</span><br/>
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