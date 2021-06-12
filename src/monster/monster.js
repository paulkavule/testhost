import {Component} from 'react'
import MonsterCard from '../components/monster-card'
class Monster extends Component{
    constructor(){
        super()
        this.state= {
            monsters : [],
            filter :''
        }
    }  
    
    onButtonClick = () => {
      
    }

    componentDidMount(){
        var url = 'https://jsonplaceholder.typicode.com/users';
        fetch(url).then(async (resp) => {
            const result = await resp.json();
            // const result = JSON.parse(result);
            this.setState({monsters:result})
            console.log(result);
        })
    }
    onTextChange = (e) => {
        let _filter = e.target.value;
        this.setState({filter:_filter})

       
    }
    render(){
        const {monsters, filter } = this.state;
        let filtered =  monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(filter.toLowerCase())
        })
        
        return (<div>
           
            <div className='App'>
                <p><label></label><input type='text' value={this.state.filter} onChange={(e) => this.onTextChange(e)}/>
                </p>
                {/* <button onClick={this.onButtonClick}>Click</button> */}
                <MonsterCard monsters={filtered}/>
            </div>
        </div>)
    }
}

export default Monster;