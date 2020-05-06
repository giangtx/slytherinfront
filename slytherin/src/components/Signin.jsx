import React from 'react'

class Signin extends React.Component{
    constructor(props){
        super(props);
        this.state={            
            txtUsernameLogin:"",
            txtPasswordLogin:"",
            txtConfirmPassword:"",
            txtEmail:"",
            errorDiv:"",
            response:{}
        }
    }
    signinHandle = () => {
        if(this.state.txtUsernameLogin==="" || this.state.txtPasswordLogin==="" 
            || this.state.txtConfirmPassword==="" || this.state.txtEmail===""){
            this.setState({
                errorDiv:<div id="error">
                    <p>Vui lòng điền đủ thông tin</p>
                </div>
            })
        }else{
            if(this.state.txtPasswordLogin===this.state.txtConfirmPassword){
                fetch('/api/v1/public/signin', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: this.state.txtUsernameLogin,
                        password: this.state.txtPasswordLogin,
                        email:this.state.txtEmail,
                    }),
                })
                .then(respone =>respone.json())
                .then(data => this.setState({
                        tokenjwt:data,
                    },() => {  
                        if(this.state.tokenjwt.errorCode===-1){
                            this.setState({
                                errorDiv:<div id="error">
                                    <p>Tên đăng nhập đã tồn tại</p>
                                </div>
                            })
                        }else if(this.state.tokenjwt.errorCode===1){
                            this.setState({
                                errorDiv:<div id="error">
                                    <p>Đăng ký thành công</p>
                                </div>
                            })
                        }
                    }
                )); 
                
            }else{
                this.setState({
                    errorDiv:<div id="error">
                        <p>Mật khẩu nhập lại không khớp</p>
                    </div>
                })
            }
            
        }
    }
    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value         
        });
    }
    render(){
        return(
            <div className="padding-login" >
                <div className="container-fluid" align="center">
                    <div className="row">
                        <div className="col-md-5" id="boc">
                            <div id="signin-background">
                                <div style={{padding:'40px',textAlign:'left'}}>
                                    <div className="padding-sly" >
                                        <h1 className="site-title" style={{fontSize:'30px'}}>
                                            <a href="/Slytherin" style={{color:'black',paddingRight:'313px',marginRight:'313px'}}>Slytherin</a>
                                        </h1>
                                        <p id="boc-p1">Nơi bắt đầu sự sáng tạo</p>
                                        <p id="boc-p2">Tìm kiếm hàng ngàn bức ảnh miễn phí, độ phân giải cao mà bạn không thể tìm kiếm ở bất cứ nơi đâu</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7" id="signin-p-82">
                            <div className="padding-sly">
                                <h1 className="site-title" style={{fontSize:'55px'}}>
                                    <a href="/Slytherin">Slytherin</a>
                                </h1>
                                <p className="site-tiny">Khám phá thế giới muôn màu</p>
                            </div>
                            <div style={{marginBottom:'25px'}}>
                                <b style={{fontSize:'23px'}}>Đăng ký</b>
                            </div>
                            <div id="para">
                                <p align="left" style={{marginBottom:'0px'}}>Tài khoản Email </p>
                                <input type="text" id="txtEmail" name="txtEmail" onChange={this.handleChange} style={{height:'40px'}}/> <br />
                                <p align="left" style={{marginBottom:'0px'}}>Tên tài khoản </p>
                                <input type="text" id="txtUsernameLogin" name="txtUsernameLogin" onChange={this.handleChange} style={{height:'40px'}}/> <br />
                                <p align="left" style={{marginBottom:'0px'}}>Mật khẩu</p>
                                <input type="password" id="txtPasswordLogin" name="txtPasswordLogin" onChange={this.handleChange} style={{height:'40px'}}/>
                                <p align="left" style={{marginBottom:'0px'}}>Nhập lại mật khẩu</p>
                                <input type="password" id="txtConfirmPassword" name="txtConfirmPassword" onChange={this.handleChange} style={{height:'40px'}}/>
                            </div>
                            <div id="btnSignin">
                                <p id="login_p" onClick={this.signinHandle}> Đăng ký </p>
                            </div>
                            <br/>
                            <p>
                                Bằng việc nhấn nút Đăng ký, bạn đã chấp nhận mọi <a href="#">Điều khoản </a> của Slytherin
                            </p>
                            {this.state.errorDiv}
                            <div id="errorSignin" style={{height:'20px'}}>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
export default Signin;