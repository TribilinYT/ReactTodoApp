import React, { Component} from 'react'

class ListItems extends Component {
    constructor(props){
        super(props)
        this.props=props
    }

    render() {
        const items = this.props.items
        const listItems = items.map(item=>{
            return(
                <div key={item.key}>
                    <input  
                        type="text"
                        id={item.key}
                        value={item.text}
                        onChange={(e)=>{
                            this.props.setUpdate(e.target.value, item.key)
                        }}
                    />
                    <span>
                        <button 
                        onClick={()=>{this.props.deleteItem(item.key )}} 
                        >
                            X
                        </button>
                    </span>
                </div>
            )
        })
        return(
            <div>
            {listItems}
            </div>
        )
    }

}

export default ListItems