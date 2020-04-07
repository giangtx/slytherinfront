import React, {Component} from 'react'
import HeaderMenu from '../Layout/HeaderMenu'
class HeaderCom extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div class="container-fluid" id="div-top">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6" id="hello-span">
                            <span >Chào mừng các bạn đến với website</span>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6" align="right">
                            <div className="p-t-logo">
                                <div className="row">
                                    <div className="col-lg-8" style={{paddingRight : '0px'}}>
                                        <div id="search">
                                            <div class="row">
                                                <div className="col-lg-11 col-md-11 col-sm-11" style={{padding: '0px'}}>
                                                    <input type="text" name="txtSearch" id="txtSearch"/>
                                                </div>
                                                <div id="btn-search" className="col-lg-1 col-md-1 col-sm-1" style={{paddingLeft: '5px'}}>
                                                    <img className="image-search" src='/image/icon/search-gay.png' alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4" style={{paddingLeft: '0px'}}>
                                        <a href='dangnhap' id='login-top'>Đăng nhập</a> 
                                    </div>
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
export default HeaderCom;