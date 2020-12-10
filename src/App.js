import React,{Component} from 'react';
 
class App extends Component {


  render() {
   
   const arr =  [
      {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },
    ]

    const name = "Hello World";
    const obj = {name: "Hello World Object"}
    const data = ['We', 'are', 'United']
    const list = [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}]
    const li = list.map((v)=><li>{v.name}</li>)
    const complex = [{company: 'XYZ', jobs: ['Javascript', 'React']}, {company: 'ABC', jobs: ['AngularJs','Ionic']}]
    const com = complex.map((v) =><li>{v.company} {v.jobs[0]} {v.jobs[1]}</li>) 
    return (
      <div>
        <h1>  {name}</h1>
        <h1>  {obj.name}</h1>
        <h1> {data[0]}</h1>
        <h1> {data[1]}</h1>
        <h1> {data[2]}</h1>
        <h1>  {li}</h1>
        <h1>  {com}</h1>
        {arr.map((val)=>{
          return <div >
            <h1>{val.title} }</h1>
            <h1>{val.body}</h1>
            <h1>{val.userId}</h1>
            <h1>{val.id}</h1>
          </div>
        })}
      </div>
      
    )
  }
}
// //Question// Briefly explain with an example what's the difference between import Something from 'package' VS import {Something} from 'package'

// //Answer//we can use both of them but if we use curly braces in main react import line then we don,t need to write extra code 

export default App;