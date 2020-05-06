import React from 'react'
import ListCollectionName from './Collection/ListCollectionName';
import CollectionImages from './Collection/CollectionImages';

class Collection extends React.Component{
    constructor(props){
        super(props);
        this.state={
            imageColl:{
                isLoading:true,
                images:{}
            },
            nameColl:{
                isLoading:true,
                nameColls:{}
            }
        }
    }
    componentDidMount(){
        this.callApiNames()
        if(this.props.match.params.collId!=null){
            this.callApiImagesWithParam();
        }else{
            this.callApiImages();
        }
        
    }
    callApiImagesWithParam(){
        this.setState({
            imageColl:{
                isLoading:true
            }
        });
        fetch('/api/v1/public/bosuutap/'+this.props.match.params.collId)
        .then(response => response.json())
        .then(data => this.setState({
            imageColl:{
                isLoading:false,
                images:data
            },
        }))
    }
    callApiImages(){
        this.setState({
            imageColl:{
                isLoading:true
            }
        });
        fetch('/api/v1/public/bosuutap')
        .then(response => response.json())
        .then(data => this.setState({
            imageColl:{
                isLoading:false,
                images:data
            },
        }))
    }
    callApiNames(){
        this.setState({
            nameColl:{
                isLoading:true
            }
        });
        fetch('/api/v1/public/bosuutap/name')
        .then(response => response.json())
        .then(data => this.setState({
            nameColl:{
                isLoading:false,
                nameColls:data
            },
        }))
    }
    render(){
        return(
            <div id="form-right-shop">
                <div className="container-fluid">
                    <div className="row">
                        <ListCollectionName listName={this.state.nameColl} idColl={this.props.match.params.collId}></ListCollectionName>
                        <CollectionImages listImage={this.state.imageColl}></CollectionImages>
                    </div>
                </div>
            </div>
        );
    }
}
export default Collection;