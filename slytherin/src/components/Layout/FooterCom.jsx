import React, {Component} from 'react'
class FooterCom extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="info-bottom">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="padding-sly">
                                <h1 className="site-title">
                                    <a href="#">Slytherin</a>
                                </h1>
                                <p className="site-tiny">Khám phá thế giới muôn màu</p>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-6" style={{marginBottom:'30px'}}>
                                    <span className="font-bold-bottom">Liên hệ với chúng tôi</span><br/><br/>
                                    <div className="font-info-bottom">
                                        <span>Bạn có câu hỏi gì không?</span><br/>
                                        <span>Hãy cho chúng tôi biết tại cửa hàng ở 12 Tây Sơn Hà Nội hoặc liên lạc với chúng tôi qua số điện thoại 099099099</span><br/>
                                    </div>
                                    <div className="p-t-logo">
                                        <a className="p-r-logo" href="https://www.facebook.com/">
                                            <img className="icon-logo" src='/image/icon/fb-logo.png' alt=""/>
                                        </a>
                                        <a className="p-r-logo" href="https://www.google.com/">
                                            <img className="icon-logo" src='/image/icon/google-plus.png' alt=""/>
                                        </a>
                                        <a className="p-r-logo" href="">
                                            <img className="icon-logo" src='/image/icon/inta-logo.png' alt=""/>
                                        </a>
                                        <a className="p-r-logo" href="">
                                            <img className="icon-logo" src='/image/icon/sky-logo.png' alt=""/>
                                        </a>
                                        <a className="p-r-logo" href="">
                                            <img className="icon-logo" src='/image/icon/twitter-logo.png' alt=""/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-4">
                                    <span className="font-bold-bottom">Bộ sưu tập</span><br/><br/>
                                    <div >
                                        <ul >
                                            <li className="p-b-li"><a href="#" className="font-info-bottom ">Động vật</a></li>
                                            <li className="p-b-li"><a href="#" className="font-info-bottom">Thiên nhiên</a></li>
                                            <li className="p-b-li"><a href="#" className="font-info-bottom">Công nghệ</a></li>
                                            <li className="p-b-li"><a href="#" className="font-info-bottom">Trò chơi</a></li>
                                            <li className="p-b-li"><a href="#" className="font-info-bottom">Đồ ăn</a></li>
                                        </ul>

                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-4">
                                    <span className="font-bold-bottom">Liên kết</span><br/><br/>
                                    <div >
                                        <ul >
                                            <li className="p-b-li"><a href="#" className="font-info-bottom ">Tìm kiếm</a></li>
                                            <li className="p-b-li"><a href="#" className="font-info-bottom">Về chúng tôi</a></li>
                                            <li className="p-b-li"><a href="#" className="font-info-bottom">Liên hệ chúng tôi</a></li>
                                            <li className="p-b-li"><a href="#" className="font-info-bottom">Facebock</a></li>
                                        </ul>

                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-4">
                                    <span className="font-bold-bottom">Trợ giúp</span><br/><br/>
                                    <div >
                                        <ul >
                                            <li className="p-b-li"><a href="#" className="font-info-bottom">Kiểm tra</a></li>
                                            <li className="p-b-li"><a href="#" className="font-info-bottom">Bộ sưu tập</a></li>
                                            <li className="p-b-li"><a href="#" className="font-info-bottom">Hình ảnh</a></li>
                                            <li className="p-b-li"><a href="#" className="font-info-bottom">Download</a></li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-l-r-bt">
                    <div className="row">
                        <div className="col-lg-6">
                            <span className="font-info-bottom">© 2018 Slytherin. Tất cả các quyền được bảo lưu.</span>
                        </div>
                        <div className="col-lg-6">
                            <span className="font-info-bottom">Khu vực và các quốc gia: Việt Nam, Thái Lan, Singapore, Lào, Nhật Bản</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default FooterCom;