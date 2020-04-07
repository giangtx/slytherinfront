import React, {Component} from 'react'
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
                    <div className="row">
                        <ImageSponsored></ImageSponsored>
                        <ImageRelated></ImageRelated>
                    </div>
                </div>
            </div>
        );
    }
}
export default ImageLeftside;