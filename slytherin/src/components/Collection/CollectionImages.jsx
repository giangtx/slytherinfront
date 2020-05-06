import React from 'react'

class CollectionImages extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    render(){
        const {isLoading,images}=this.props.listImage;
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
        const list=images.data.map((image,index) => {
            if(images.errorCode===1){
                return(
                    <div className="col-lg-4 col-md-6 col-sm-12" key={index} style={{padding:'0px'}}>
                        <a href={'/Slytherin/hinhanh/'+image.mahinhanh} title="">
                            <div className="image-background-form">
                                <img className="image-background" src={'/image/resize/'+image.resize} alt=""/>
                            </div>
                        </a>
                    </div>
                )
            } 
        })
        return(
            <div className="col-lg-10 col-md-10 col-sm-10">
                <div className="box-list">
                    <div className="row">
                        {list}
                    </div>
                </div>
            </div>
        );
    }
}
export default CollectionImages;