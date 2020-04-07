import React, {Component} from 'react'
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
        fetch('/api/v1/bosuutaplimit')
        .then(response => response.json())
        .then(data => this.setState({collec:data,isLoading:false})
        );
    }
    render(){
        const {collec,isLoading}=this.state;
        if(isLoading){
            return(
                <p>Loading....</p>
            );
        }
        const listColl=collec.map((coll,index) =>{
            return(
                <div className="col-lg-4 col-md-6 col-sm-12 p-l-r-bst">
                    <a href="/Slytherin/bosuutap" title="">
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