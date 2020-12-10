import react,{Component} from 'react';

class Work extends Component{
    constructor(){
        super()
        this.state={
            message:'Hello World'
        }
    }
    changeMassege(){
        this.setState({
            message:'Hello Pakistan'
        })
    }
    render(){
        return(
            <div>
                <h1 onClick={()=> this.changeMassege}> {this.state.message}</h1>
            </div>
        )
    }
    
}

// the difference between onClick={this.myFunc}, onClick={() => this.myFunc()} & onClick={this.myFunc.bind(this}} and when to use which one


export default Work;