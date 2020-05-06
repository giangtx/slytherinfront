import React from 'react'

class ImageRelated extends React.Component{
    constructor(props){
        super(props);
        this.state={
            imageRelats:{},
            isLoanding:true,
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.idCollec !== prevProps.idCollec) {
            this.setState({isLoandding:true});
            fetch('/api/v1/public/hinhanh/collec/'+this.props.idCollec)
            .then(response => response.json())
            .then(data => this.setState({
                imageRelats:data,
                isLoanding:false
            }))
        }
    }
    render(){
        const {imageRelats, isLoanding}=this.state;
        if(isLoanding){
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
        const listImage=imageRelats.data.map((image,index) =>{
            if(imageRelats.errorCode===1){
                return(
                    <div className="col-lg-6 col-md-2 col-sm-2 pd-l-r-15" key={index}>
                        <a href={'/slytherin/hinhanh/'+image.mahinhanh} title="">
                            <img className="picture-related-info" src={'/image/resize/'+image.resize} alt=""/>
                        </a>
                    </div>
                )
            } 
        });

        return(
            <div className="row">
                <div className="col-lg-12">
                    <div className="image-related-text">
                        <span>Hình ảnh cùng chủ đề</span>
                    </div>
                </div>
                
                {listImage}
            </div>
        );
    }
}
export default ImageRelated;