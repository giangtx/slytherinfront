import React from 'react'
class TitleBox extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {isLoading,title}=this.props.titleBox;
        if(isLoading){
            return(
                <div></div>
            );
        }
        return(
            <div className="row message_title" style={{paddingLeft:'15px'}}>
                <div className="avatar-chat-div col-lg-3" style={{padding:'0px'}}>
                    <img className="avatar-chat" src={'/image/avatarresize/'+title.data.image} alt=""/>
                </div>
                <div className="col-lg-9">
                    <span className="title-message-box">{title.data.name}</span>
                </div>
            </div>
        )
    }
}
export default TitleBox;