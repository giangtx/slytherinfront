import React from 'react';
import HeaderMenu from './HeaderMenu';
import { withRouter } from 'react-router-dom';
class HeaderChild extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoading:true,
            userInfo:{}
        }
    }
    componentDidMount(){
        this.setState({
            isLoading:true
        })
        const token = localStorage.getItem('token');
        if (token !== null) {
            fetch('/api/v1/auth/info',{
                method: 'get',
                headers: {
                    Accept: 'Application/json',
                    "Content-type": "Application/json",
                    Authorization: "Bearer " + token
                }
            })
            .then(response => response.json())
            .then(data => this.setState({
                isLoading:false,
                userInfo:data
            }))
        }else{
            console.log("no token")
        }
    }
    logoutHandle =() => {
        try {
            localStorage.removeItem('token');
            this.props.history.push('/')
          } catch (e) {
            console.log(e.message)
            console.log('lỗi tiếp')
          }
    }
    render(){
        const {isLoading,userInfo} = this.state;
        var userHeader = "";
        if(isLoading){
            userHeader=<div className="content" >
                            <div className="load-wrapp"align="center">
                                <div className="load-10">
                                    <div className="bar"></div>
                                </div>
                            </div>
                        </div>
                            
            
        }  
        if (userInfo.errorCode==1) {
            userHeader = <div className="col-md-4" style={{paddingLeft: '0px',paddingRight:'0px'}}>
                            <a href='/Slytherin/hoso' id="account-name" style={{marginLeft:"0px"}}>{userInfo.data.tendangnhap}</a>
                            <span onClick={this.logoutHandle} style={{cursor: "pointer"}}>/Đăng xuất</span>
                        </div>
        }else{
            userHeader = <div className="col-md-4" style={{paddingLeft: '0px'}}>
                            <a href='/slytherin/dangnhap' id='login-top'>Đăng nhập</a> 
                        </div>
        }
        return(
            <div>
                <div className="container-fluid" id="div-top-shop">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-3" id="hello-span">
                            <span >Chào mừng các bạn đến với website</span>
                        </div>
                        <div className="col-lg-5 col-md-4 col-sm-4">
                            <div className="site-title-shop" align="center">
                                <a href="/Slytherin">Slytherin</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-5 col-sm-3" align="right">
                            <div className="p-t-logo">
                                <div className="row">
                                    <div className="col-lg-7" >
                                        <div id="search">
                                            <div className="row">
                                                <div className="col-lg-10 col-md-10 col-sm-10" style={{padding:'0px'}}>
                                                    <input type="text" className="txtSearch" id="txtSearch"/>
                                                </div>
                                                <div id="btn-search" className="col-lg-2 col-md-2 col-sm-2" style={{paddingLeft:'5px'}}>
                                                    <img className="image-search" src='/image/icon/search-gay.png' alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {userHeader}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <HeaderMenu></HeaderMenu>
            </div>
        );
    }
}
export default withRouter(HeaderChild);