import React from 'react'

class SlideShow extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        return(
            <div className="container-fluid" style={{paddingRight:'0px',paddingLeft:'0px'}}>
                <div id="demo" className="carousel slide" data-ride="carousel">
                    <ul className="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" className="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                        <li data-target="#demo" data-slide-to="3"></li>
                    </ul>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="new-arrivals">
                                <div id="new-arrivals-text">
                                    <div id="new-arrivals-box">
                                        <span>Khám phá thế giới thông qua đôi mắt của nhiếp ảnh gia</span><br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="new-arrivals1">
                                <div id="new-arrivals-text">
                                    <div id="new-arrivals-box">
                                        <span>Cùng tìm kiếm những bức ảnh tuyệt vời cho bạn</span><br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="new-arrivals2">
                                <div id="new-arrivals-text">
                                    <div id="new-arrivals-box">
                                        <span>Khám phá thế giới thông qua đôi mắt của nhiếp ảnh gia</span><br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="new-arrivals3">
                                <div id="new-arrivals-text">
                                    <div id="new-arrivals-box">
                                        <span>Khám phá thế giới thông qua đôi mắt của nhiếp ảnh gia</span><br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a className="carousel-control-prev" href="#demo" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#demo" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>

                </div>
            </div>
        );
    }
}
export default SlideShow;