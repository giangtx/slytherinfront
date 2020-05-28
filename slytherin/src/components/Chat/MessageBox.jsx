import React from 'react'
import TitleBox from './TitleBox';
class MessageBox extends React.Component{
    constructor(props){
        super(props);
        this.state={
            message:{
                isLoading:true,
                messages:{
                    data:[]
                }
            }
        }
    }
    // componentDidMount(){
    //     this.setState({
    //         message:{
    //             isLoading:this.props.mess.isLoading,
    //             messages:this.props.mess.messages
    //         }
    //     })
    // }
    componentWillReceiveProps(nextProps){
        if (nextProps.mess !== this.props.mess) {
            this.setState({
                message:{
                    isLoading:nextProps.mess.isLoading,
                    messages:nextProps.mess.messages
                }
            })
        }
    }
    sendHandle = ()=>{
        // this.setState({
        //     message:{
        //         isLoading:true,
        //         messages:{}
        //     }
        // })
        this.update();
        
    }
    update(){
        var message={
            "idmessage": 1,
            "idchat": 1,
            "idsender": 61,
            "content": "hát tiếp đi",
            "namesender": "slytherin",
            "senderimage": "DSC02249.jpg",
            "time": null,
            "typeuser": 1
        }
        this.setState(prevState => ({
            message:{
                isLoading:false,
                messages:{
                    errorCode: 1,
                    message: "ok",
                    data:[...prevState.message.messages.data, message]
                }
            }
          }))
    }
    render(){
        const {isLoading,messages}=this.state.message;
        
        if(isLoading){
            return  <div className="content" >
                        <div className="load-wrapp"align="center">
                            <div className="load-10">
                                <div className="bar"></div>
                            </div>
                        </div>
                    </div> 
        }
        console.log(messages)
        const list = messages.data.map((message,index)=>{
            if(messages.errorCode===1){
                if(message.typeuser===1){
                    return(
                        <div className="message" align="right" key={index}>
                            <div className="row">
                                <div className="col-lg-11" style={{paddingLeft:'5px',paddingRight:'5px'}}>
                                    <div className="message_detail message_detail_user">
                                        <div className="message-div">
                                            <span style={{fontSize:'15px'}}>{message.content}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="avatar-message-chat-div col-lg-1" style={{padding:'0px'}}>
                                    <img className="avatar-message-chat" src={'/image/avatarresize/'+message.senderimage} alt=""/>
                                </div>
                            </div>
                        </div>
                    )
                }else{
                    return(
                        <div className="message" key={index}>
                            <div className="row">
                                <div className="avatar-message-chat-div col-lg-1" style={{padding:'0px'}}>
                                    <img className="avatar-message-chat" src={'/image/avatarresize/'+message.senderimage} alt=""/>
                                </div>
                                <div className="col-lg-11" style={{paddingLeft:'5px',paddingRight:'5px'}}>
                                    <div className="message_detail message_detail_friend">
                                        <div className="message-div">
                                            <span style={{fontSize:'15px'}}>{message.content}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                
            }
        })
        return(
            <div className="col-lg-9 message_box">
                <TitleBox titleBox={this.props.titleBox}></TitleBox>
                <div className="message_content" >
                    {list}
                </div>
                
                <div className="meessage_send_bar">
                    <div className="row">
                        <div className="col-lg-11" style={{paddingRight:'0px'}}>
                            <label className="label_search_chatbox" style={{paddingRight:'0px'}}>
                                <input className="search_chatbox" type="text" placeholder="Tìm kiếm"></input>
                            </label>
                        </div>
                        <div className="col-lg-1" style={{paddingTop:'10px',paddingLeft:'5px'}}>
                            <img className="icon-send" src='/image/icon/paper-plane-blue.png' alt="" onClick={this.sendHandle}/>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}
export default MessageBox