import React from 'react'
import ChatBox from './Chat/ChatBox';
import MessageBox from './Chat/MessageBox';
class Chat extends React.Component{
    constructor(props){
        super(props);
        this.state={
            chat:{
                isLoading:true,
                chats:{}
            },
            message:{
                isLoading:true,
                messages:{}
            },
            user:{
                isLoading:true,
                infouser:{
                    username:'',
                    avatar:'',
                    id:''
                }
            },
            titleBox:{
                isLoading:true,
                title:{}
            },
        }
    }
    componentDidMount(){
        const token = localStorage.getItem('token');
        if (token !== null) {
            this.callApiChat(token);
            this.callApiMessage(token,this.props.match.params.chatId);
            this.callApiReciver(token,this.props.match.params.chatId);
            const payload = JSON.parse(atob(token.split('.')[1]));
            if (payload) {   
                this.setState({
                    user:{
                        isLoading:false,
                        infouser:{
                            username:payload['userName'],
                            avatar:payload['avatar'],
                            id:payload['userId']
                        }
                    }
                })
            }
        }else{
            console.log("no token")
        }
    }
    componentWillReceiveProps(nextProps){
        if (nextProps.match.params.chatId !== this.props.match.params.chatId) {
            const token = localStorage.getItem('token');
            if (token !== null) {
                this.callApiChat(token);
                this.callApiMessage(token,nextProps.match.params.chatId);
                this.callApiReciver(token,nextProps.match.params.chatId);
                const payload = JSON.parse(atob(token.split('.')[1]));
                if (payload) {   
                    this.setState({
                        user:{
                            isLoading:false,
                            infouser:{
                                username:payload['userName'],
                                avatar:payload['avatar'],
                                id:payload['userId']
                            }
                        }
                    })
                }
            }else{
                console.log("no token")
            }
        }
    }
    callApiChat(token){
        fetch('/api/v1/auth/chat/getAll',{
            method: 'get',
            headers: {
                Accept: 'Application/json',
                "Content-type": "Application/json",
                Authorization: "Bearer " + token
            }
        })
        .then(response => response.json())
        .then(data => this.setState({
            chat:{
                isLoading:false,
                chats:data
            }
        }))
    }
    callApiMessage(token,idchat){
        this.setState({
            message:{
                isLoading:true
            }
        });
        fetch('/api/v1/auth/message/getAll/'+idchat,{
            method: 'get',
            headers: {
                Accept: 'Application/json',
                "Content-type": "Application/json",
                Authorization: "Bearer " + token
            }
        })
        .then(response => response.json())
        .then(data => this.setState({
            message:{
                isLoading:false,
                messages:data
            }
        }))
    }
    callApiReciver(token,idchat){
        fetch('/api/v1/auth/chat/getRecive/'+idchat,{
            method: 'get',
            headers: {
                Accept: 'Application/json',
                "Content-type": "Application/json",
                Authorization: "Bearer " + token
            }
        })
        .then(response => response.json())
        .then(data => this.setState({
            titleBox:{
                isLoading:false,
                title:data
            }
        }))
    }
    render(){
        return(
            <div>
                <div id="chat_room">
                    <div className="container-fluid">
                        <div className="row">
                            <ChatBox infor={this.state.user} listchat={this.state.chat} idchat={this.props.match.params.chatId}></ChatBox>
                            <MessageBox mess={this.state.message} titleBox={this.state.titleBox}></MessageBox>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}
export default Chat;