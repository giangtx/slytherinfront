import React from 'react'

class ImageSponsored extends React.Component{
    constructor(props){
        super(props);
        this.state={
            imageSpon : {},
            isLoading : true
        }
    }
    componentDidMount(){
        this.setState({isLoading : true});
        fetch('/api/v1/public/hinhanh/spon')
        .then(response => response.json())
        .then(data => this.setState({
            imageSpon : data,
            isLoading : false
        }))
    }
    render(){
        const {imageSpon,isLoading}=this.state;
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
        const listImage=imageSpon.data.map((image,index) => {
            if(imageSpon.errorCode===1){
                return(
                    <div className="col-lg-6 col-md-2 col-sm-2 pd-l-r-15" key={index}>
                        <a href={'/slytherin/hinhanh/' +image.mahinhanh }title="">
                            <img className="picture-info" src={'/image/resize/' + image.resize}alt=""/>
                        </a>
                        
                    </div>   
                )
            }
        })
        return(
            <div className="row">
                <div className="col-lg-12">
                    <div className="image-sponsored-text">
                        <span>Hình ảnh được tài trợ</span>
                    </div>
                </div>
                {listImage} 
            </div>
        );
    }
}
export default ImageSponsored;