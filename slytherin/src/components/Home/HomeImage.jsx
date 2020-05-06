import React from 'react'

class HomeImage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            images:[],
            isLoading:true
        }
    }
    componentDidMount(){
        this.setState({isLoandding:true});
        fetch('/api/v1/public/hinhanhhomelimit')
        .then(response => response.json())
        .then(data => this.setState({
            images:data,
            isLoading:false
        }))
    }
    render(){
        const {images,isLoading}=this.state;
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
        const listImage=images.data.map((image,index) =>{
            if(images.errorCode===1){
                return(
                    <div className="col-lg-3 col-md-4 col-sm-6 p-l-r-5" key={index}>
                        <a href={'/slytherin/hinhanh/'+image.mahinhanh} title="">
                            <img className="featured-photos-object" src={'/image/resize/'+image.resize} alt=""/>
                        </a>
                    </div>
                )
            }
        });
        
        return(
            <div id="featured-photos">
                <div className="container-fluid">
                    <span className="f-40">HÌNH ẢNH NỔI BẬT</span>
                    <div id="featured-photos-list">
                        <div className="row">
                            {listImage}
                        </div>
                    </div>
                </div>
	        </div>
        );
    }
}
export default HomeImage;