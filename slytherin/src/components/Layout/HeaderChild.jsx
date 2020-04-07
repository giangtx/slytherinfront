import React, {Component} from 'react'
import HeaderMenu from './HeaderMenu'
class HeaderChild extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
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
                                    <div className="col-md-5" style={{paddingLeft:'0px'}}>
                                        <a href='/Slytherin/dangnhap' id='login-top'>Đăng nhập</a>
                                    </div>
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
export default HeaderChild;