import React from 'react'


class ImageComments extends React.Component{
    constructor(props){
        super(props);
        this.state={
            comments:[],
            isLoading:true,
            txtComment:'',
            user:{
                username:'',
                avatar:'',
                id:''
            },
        }
    }
    componentDidMount(){
        const token = localStorage.getItem('token');
        if (token !== null) {
            const payload = JSON.parse(atob(token.split('.')[1]));
            if (payload) {   
                this.setState({
                    user:{
                        username:payload['userName'],
                        avatar:payload['avatar'],
                        id:payload['userId']
                    }
                })
            }
        }else{
            console.log("no token")
        }
        this.setState({isLoandding:true});
        fetch('/api/v1/public/hinhanh/binhluan/'+this.props.imageId)
        .then(response => response.json())
        .then(data => this.setState({
            comments:data,
            isLoading:false
        }))
    }
    handleChange = (event) =>{
        this.setState({
               [event.target.name]: event.target.value   
        });
    }
    commentHandle = () => {
        const token = localStorage.getItem('token');
        if(token!==null){
            fetch('/api/v1/auth/binhluan', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: "Bearer " + token
                },
                body: JSON.stringify({
                    mahinhanh: this.props.imageId,
                    binhluan:this.state.txtComment
                }),
            })
            .then(response=>response.json())
            .then(data => this.setState({
                comments:data,
                txtComment:'',
                isLoading:false
            }));
            
        }else{
            alert("bạn phải đăng nhập để xử dụng chức năng này!")
        }
        
    }
    
    render(){
        const {comments,isLoading}=this.state;
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
        const listComment=comments.data.map((comment,index)=>{
            if(comments.errorCode===1){
                return(
                    <div className="col-lg-12 comment-all" key={index}>
                        <div className="row">
                            <div className="col-lg-1 col-md-1 comment-image">
                                <img className="avatar-comment" src={'/image/avatarresize/'+comment.anhdaidien} alt=""/>
                            </div>
                            <div className="col-lg-11 col-md-11">
                                <div className="username-comment">
                                    <a href="" className="span-username-comment">{comment.tentaikhoan}</a>
                                </div>
                                <div style={{marginTop:'5px'}}>
                                    <span>{comment.binhluan}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } 
        })
        return(
            <div id="comment-form">
                <div className="row" style={{paddingLeft:'0px'}}>
                    <div className="col-lg-1 col-md-1 comment-image">
                        <img className="avatar-comment" src={'/image/avatarresize/'+this.state.user.avatar} alt=""/>
                    </div>
                    <div className="col-lg-11 col-md-11 ">
                        <textarea id="txtComment" className="comment-text" name="txtComment" value= {this.state.txtComment} onChange={this.handleChange} placeholder="Thêm bình luận của bạn"></textarea>
                        <button id="btn-comment" className="btn btn-primary" onClick={this.commentHandle}>Bình luận</button>
                    </div>
                    {listComment}
                </div>
            </div>
        );
    }
}
export default ImageComments;