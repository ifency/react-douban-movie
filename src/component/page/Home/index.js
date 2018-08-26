import React, {Component} from 'react';
import List from '../../common/List';
import Search from '../../common/Search';
import {playing} from '../../../api/api.js';
import './index.scss';

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            homeList: []
        }
    }
    componentDidMount(){
        /*playing().then(res=>{
            console.log(res);
            res.subjects.map((item,index)=>{
                let count=item['collect_count'];
                item['collect_count']=count/10000<1 ? count : (count/10000).toFixed(1)+'万';
            })
            this.setState({
                homeList:res.subjects
            })
        })*/
    }
    render(){
        return (
            <div className="home">
                <div class="home-top">
                    <Search placeholder="电影/电视剧/影人"></Search>
                </div>
                <List list={this.state.homeList}/>    
            </div>
        )
    }
}

export default Home;