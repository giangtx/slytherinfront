import React from 'react'
import ImageSponsored from './ImageSponsored'
import ImageRelated from './ImageRelated'

class ImageLeftside extends React.Component{
    constructor(props){
        super(props)
       
    }
    render(){
        return(
            <div className="col-lg-4">
                <div className="image-sponsored">
                    <ImageSponsored></ImageSponsored>
                    <ImageRelated idCollec={this.props.idCollec} matchParam={this.props.matchParam}></ImageRelated>
                </div>
            </div>
        );
    }
}
export default ImageLeftside;