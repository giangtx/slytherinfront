import React, {Component} from 'react';
import ImageLeftside from './Image/ImageLeftside';
import ImageComments from './Image/ImageComments';
import ImageInfo from './Image/ImageInfo';

class Image extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id="image-form">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8 p-r-30">
                            <ImageInfo></ImageInfo>
                            <ImageComments></ImageComments>
                        </div>
                        <ImageLeftside></ImageLeftside>
                    </div>
                </div>
            </div>
        );
    }
}
export default Image
