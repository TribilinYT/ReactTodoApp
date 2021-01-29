import React from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrashAlt } from '@fortawesome/free-solid-svg-icons'
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      currentItem:{
        text:"",
        id:""
      },
      items:[]
    }
    this.handleInput= this.handleInput.bind(this)
    this.addItem= this.addItem.bind(this)
    this.removeItem= this.removeItem.bind(this)
    this.updateItem=this.updateItem.bind(this)
  }

  handleInput(e){
    const target = e.target.value
    this.setState({
      currentItem:{
        text:target,
        id:Date.now()
      }
    })
  }

  addItem(e){
    e.preventDefault()
    const newItem=this.state.currentItem;
    if(newItem.text!==""){
      const items = [...this.state.items, newItem]
    this.setState({
      items: items,
      currentItem:{
        text:"",
        id:""
      }
    })
  }
  console.log(this.state.items)
  }

  removeItem(key){
    const items= this.state.items
    const filteredItems=items.filter(item=>item.id!==key)
    this.setState({
      items:filteredItems
    })
  }

  updateItem(key){
    const updateItem= prompt("ingrese texto")
    const items = this.state.items
    items.map(item=>{
      if (item.id === key){
        console.log(item.id+" "+key)
        item.text=updateItem
      }
    })
    this.setState({
      items:items
    })
  }

  render() {
    const items= this.state.items
    const listItems = items.map(item=>{
      return(
        <li className="taskItemContainer" key={item.id}>
          <input
            className="taskTextContainer"
            type="text"
            value={item.text}
            readOnly
          />
          <div>
          <span className="buttonEditContainer">
            <FontAwesomeIcon icon={faEdit} onClick={(e)=>{
              e.preventDefault()
              this.updateItem(item.id)
            }}>
              U
            </FontAwesomeIcon>
          </span>
          <span className="buttonRemoveContainer">
            <FontAwesomeIcon icon={faTrashAlt} onClick={(e)=>{
              e.preventDefault()
              this.removeItem(item.id)
            }} >
              X
            </FontAwesomeIcon>
          </span>
          </div>
        </li>
      )
    })

    return(

      <form
      className="taskForm" 
      onSubmit={this.addItem}
      >
        <div className="formHeader">
        <input
          className= "inputTask"
          type="text" 
          onChange={this.handleInput}
          value={this.state.currentItem.text}  
        /> 
        <button className="buttonTask">Add Task</button>
        </div>
        <div className="totalTaskContainer">
        <h2 className="totalTask">Total Tasks:</h2> 
        <span className="totalTaskNumber"
        >
          {this.state.items.length}
        </span>
        </div>
        
        <ol className="taskListContainer">{listItems}</ol>
      </form>
    )
  }
}

export default App;
