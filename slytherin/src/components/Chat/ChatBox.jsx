import React from 'react'
import { Link } from 'react-router-dom';
class ChatBox extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {isLoading,chats} = this.props.listchat;
        var list='';
        if(!isLoading){ 
            list=chats.data.map((chat,index) => {
                if(chats.errorCode===1){
                    if(chat.idchat==this.props.idchat){
                        return(
                            <div className="chatbox-a" key={index}>
                                <Link to={'/Slytherin/chat/'+chat.idchat}  >
                                    <div className="row chatbox chatbox-active" style={{paddingLeft:'15px'}} >
                                        <div className="avatar-chat-div col-lg-3" style={{padding:'0px'}}>
                                            <img className="avatar-chat" src={'/image/avatarresize/'+chat.image} alt=""/>
                                        </div>
                                        <div className="col-lg-9">
                                            <div className="chatbox_p">
                                                <p style={{fontSize:'15px',textTransform:'capitalize'}} >{chat.name}</p>
                                                <p style={{fontSize:'13px'}}>
                                                    <span>{chat.lastmessage} </span>
                                                    <span style={{color:'#868686'}}>.{chat.time}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>   
                            </div>
                            
                        )
                    }
                    else{
                        return(
                            <div className="chatbox-a" key={index}>
                                <Link to={'/Slytherin/chat/'+chat.idchat}  >
                                    <div className="row chatbox chatbox" style={{paddingLeft:'15px'}} >
                                        <div className="avatar-chat-div col-lg-3" style={{padding:'0px'}}>
                                            <img className="avatar-chat" src={'/image/avatarresize/'+chat.image} alt=""/>
                                        </div>
                                        <div className="col-lg-9">
                                            <div className="chatbox_p">
                                                <p style={{fontSize:'15px',textTransform:'capitalize'}} >{chat.name}</p>
                                                <p style={{fontSize:'13px'}}>
                                                    <span>{chat.lastmessage} </span>
                                                    <span style={{color:'#868686'}}>.{chat.time}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>   
                            </div> 
                        )
                    }
                } 
            })
        }
        return(
            <div className="col-lg-3 chat_leftside">
                <div className="row" style={{paddingLeft:'15px'}}>
                    <div className="avatar-chat-div col-lg-3" style={{padding:'0px'}}>
                        <img className="avatar-chat" src={'/image/avatarresize/'+this.props.infor.infouser.avatar} alt=""/>
                    </div>
                    <div className="col-lg-9">
                        <span style={{fontSize:'25px',fontWeight:'500'}}>Chat</span>
                    </div>
                    <label className="label_search_chatbox">
                        <input className="search_chatbox" type="text" placeholder="Tìm kiếm"></input>
                    </label>
                </div>
                {list}
            </div>
        )
    }
}
export default ChatBox;