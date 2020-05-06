import React from 'react';
import ImageLeftside from './Image/ImageLeftside';
import ImageComments from './Image/ImageComments';
import ImageInfo from './Image/ImageInfo';

class Image extends React.Component{
    constructor(props){
        super(props);
        this.state={
            matchParams : props.match.params,
            idColl:0
        }
        this.changeIDColl=this.changeIDColl.bind(this);
    }
    changeIDColl = (newID)=>{
        this.setState({
            idColl:newID
        })
   
    }
    render(){
        return(
            <div id="image-form">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8 p-r-30">
                            <ImageInfo matchParam={this.state.matchParams} changeIdColl={this.changeIDColl}></ImageInfo>
                            <ImageComments {... this.state.matchParams}></ImageComments>
                        </div>
                        <ImageLeftside idCollec={this.state.idColl} matchParam={this.state.matchParams}></ImageLeftside>
                    </div>
                </div>
            </div>
        );
    }
}
export default Image
