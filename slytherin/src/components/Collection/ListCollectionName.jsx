import React from 'react'

class ListCollectionName extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        const {isLoading,nameColls}=this.props.listName;
        if(isLoading){
            return(
                <div className="col-lg-2 col-md-2 col-sm-2">
                    <div id="list-shop">
                        <div className="content" >
                            <div className="load-wrapp"align="center">
                                <div className="load-10">
                                    <div className="bar"></div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                  
            );
        }
        const list=nameColls.data.map((name,index) => {
            if(nameColls.errorCode===1){
                if(name.mabosuutap==this.props.idColl){
                    return( <li className="p-b-li" key={index}><a href={'/slytherin/bosuutap/'+name.mabosuutap} className="font-info-bottom" style={{fontWeight:'500',color:'#007bff'}}>{name.tenbosuutap}</a></li>)
                }else{
                    return( <li className="p-b-li" key={index}><a href={'/slytherin/bosuutap/'+name.mabosuutap} className="font-info-bottom">{name.tenbosuutap}</a></li>)
                }
            } 
        })
        return(
            <div className="col-lg-2 col-md-2 col-sm-2">
                <div id="list-shop">
                    <span className="text-bold-shop">Bộ sưu tập</span><br/><br/>
                    <ul >
                        {list}
                    </ul>
                </div>
            </div>
        );
    }
}
export default ListCollectionName;