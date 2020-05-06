import React from 'react'

class HeaderMenu extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div id="nav-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 ">
                            <ul className="nav justify-content-center">
                                <li className="nav-item">
                                    <a className="nav-link active" href="/">Trang chủ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/slytherin/bosuutap">Bộ sưu tập</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/slytherin/diendan">Diễn đàn</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="about.php">Thông tin</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Liên kết</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>     
        );
    }
}

export default HeaderMenu;