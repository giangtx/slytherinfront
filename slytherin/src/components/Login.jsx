import React from 'react'
import { withRouter } from 'react-router-dom';
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            txtUsername:"",
            txtPassword:"",
            errorDiv:"",
            tokenjwt:{}
        }
        
    }
    handleChange = (event) =>{
        this.setState({
               [event.target.name]: event.target.value   
        });
    }
    loginClick = () =>{
        if(this.state.txtUsername==="" || this.state.txtPassword===""){
            this.setState({
                errorDiv:<div id="error">
                    <p>Vui lòng điền đủ tên đăng nhập và mật khẩu</p>
                </div>
            })
        }else{
            fetch('/api/v1/public/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: this.state.txtUsername,
                    password: this.state.txtPassword,
                }),
            })
            .then(respone =>respone.json())
            .then(data => this.setState({
                    tokenjwt:data,
                },() => {  
                    if(this.state.tokenjwt.errorCode===401){
                        this.setState({
                            errorDiv:<div id="error">
                                <p>Tên đăng nhập hoặc tài khoản không hợp lệ</p>
                            </div>
                        })
                    }else if(this.state.tokenjwt.errorCode===1){
                        localStorage.setItem('token', this.state.tokenjwt.data.accessToken);
                        this.props.history.push('/slytherin')
                        this.setState({
                            errorDiv:<div id="error">
                                <p>Đăng nhập thành công</p>
                            </div>
                        })
                    }
                }
            ));  
        }

    }
    render(){

        return(
            <div className="padding-login">
                <div className="container-fluid" align="center">
                    <div className="row">
                        <div className="col-md-3">
                        </div>
                        <div className="col-md-6">
                            <div className="padding-sly" style={{paddingBottom:'15px',paddingTop:'50px'}}>
                                <h1 className="site-title" style={{fontSize:'65px'}}>
                                    <a href="/Slytherin">Slytherin</a>
                                </h1>
                                <p className="site-tiny">Khám phá thế giới muôn màu</p>
                            </div>
                            <b style={{fontSize:'23px'}}>Đăng nhập</b>
                            <p style={{marginBottom:'34px',fontSize:'14px'}}>Mừng bạn quay trở lại.</p>
                            <a href="#" style={{textDecoration:'none'}}>
                                <div className="fb-login">
                                    <p id="fb_p"> Facebook </p>
                                </div>
                            </a>
                            <p>OR</p>
                            <div id="para">
                                <p align="left" style={{marginBottom:'0px'}}>Tài khoản </p>
                                <input type="text" id="txtUsername" name="txtUsername" onChange={this.handleChange}style={{height:'40px'}}/> <br/>
                                <p align="left" style={{marginBottom:'0px'}}>Mật khẩu</p>
                                <input type="password" id="txtPassword" name="txtPassword" onChange={this.handleChange} style={{height:'40px'}}/>
                            </div>
                            <div id="btnLogin" onClick={this.loginClick}>
                                <p id="login_p"> Đăng nhập </p>
                            </div>
                            <br/>
                            <p>
                                Bạn chưa có tài khoản ?
                                <a href="dangky">Đăng ký</a>
                            </p>
                            {this.state.errorDiv}
                            <div ></div>
                        </div>
                        <div className="col-md-3">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(Login);