import React from 'react'
import HeaderMenu from '../Layout/HeaderMenu';
import { withRouter } from 'react-router-dom';
class HeaderCom extends React.Component{
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
        const {isLoading,userInfo}=this.state;
        var userHeader="";
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
            userHeader=
                            <div className="col-md-4" style={{paddingLeft: '0px'}}>
                                <a href='/Slytherin/hoso' id="account-name">{userInfo.data.tendangnhap}</a>
                                <span onClick={this.logoutHandle} style={{cursor: "pointer"}}>/Đăng xuất</span>
                            </div>
        }else{
            userHeader=<div className="col-md-4" style={{paddingLeft: '0px'}}>
                                <a href='/slytherin/dangnhap' id='login-top'>Đăng nhập</a> 
                            </div>
        }
        return(
            <div>
                <div className="container-fluid" id="div-top">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6" id="hello-span">
                            <span >Chào mừng các bạn đến với website</span>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6" align="right">
                            <div className="p-t-logo">
                                <div className="row">
                                    <div className="col-lg-8" style={{paddingRight : '0px'}}>
                                        <div id="search">
                                            <div className="row">
                                                <div className="col-lg-11 col-md-11 col-sm-11" style={{padding: '0px'}}>
                                                    <input type="text" name="txtSearch" id="txtSearch"/>
                                                </div>
                                                <div id="btn-search" className="col-lg-1 col-md-1 col-sm-1" style={{paddingLeft: '5px'}}>
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
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="padding-sly">
                                <h1 className="site-title">
                                    <a href="/Slytherin">Slytherin</a>
                                </h1>
                                <p className="site-tiny">Khám phá thế giới muôn màu</p>
                            </div>
                        </div>
                    </div>
                </div>
                <HeaderMenu></HeaderMenu>
            </div>
        );
    }
}
export default withRouter(HeaderCom);