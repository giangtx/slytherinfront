import React from 'react'
import ForumContent from './Forum/ForumContent'
import ForumRightbar from './Forum/ForumRightbar'

class Forum extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        return(
            <div id="froum-all">
                <div className="container-fluid" style={{padding:'0px'}}>
                    <div className="row">
                        <ForumContent></ForumContent>
                        <ForumRightbar></ForumRightbar>
                    </div>
                </div>
            </div>
        );
    }
}

export default Forum;