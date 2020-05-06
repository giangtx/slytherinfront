import React from 'react'
class HomeCollection extends React.Component{
    constructor(props){
        super(props);
        this.state={
            collec:[],
            isLoading:true
        }
    }
    componentDidMount(){
        this.setState({isLoading:true});
        fetch('/api/v1/public/bosuutaplimit')
        .then(response => response.json())
        .then(data => this.setState({
            collec:data,
            isLoading:false
        }));
    }
    render(){
        const {collec,isLoading}=this.state;
        if(isLoading){
            return(
                <div className="content" >
                    <div className="load-wrapp"align="center">
                        <div className="load-10">
                            <div className="bar"></div>
                        </div>
                    </div>
                </div>
                
                
            );
        }
        const listColl = collec.data.map((coll,index) =>{
            if(collec.errorCode===1){
                return(
                    <div className="col-lg-4 col-md-6 col-sm-12 p-l-r-bst" key={index}>
                        <a href={'/slytherin/bosuutap/'+coll.mabosuutap} title="">
                            <div className="grid">
                                <figure className="effect-marley">
                                    <img src={'/image/'+coll.anhbosuutap}/>
                                    <figcaption>
                                        <h2>{coll.tenbosuutap}</h2>
                                        <p>{coll.mota}</p>
                                    </figcaption>
                                </figure>
                            </div>
                        </a>
                    </div>
                )
            }   
        });
        
        
        return((
            <div id="product-list">
                <div className="container-fluid">
                    <span className="f-40">BỘ SƯU TẬP NỔI BẬT</span>
                    <div className="row" style={{marginTop:'30px'}}>
                        {listColl}
                    </div>
                </div>
            </div>)
        );
    }
}
export default HomeCollection;