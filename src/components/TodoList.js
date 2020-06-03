import React, { Component } from 'react'
import TodoItem from './TodoItem';
import { Link } from 'react-router-dom';

export default class TodoList extends Component {
    render() {
        const { items, clearList, handleDelete, handleEdit} = this.props;

        return (
                <ul className='list-group my-5'>
                    <h3 className='text-capitalize text-center text-white'>todo list</h3>

                    {
                        items.map(item =>{
                            return <TodoItem key={item.id} title={item.title} 
                            handleDelete={()=> handleDelete(item.id)} handleEdit={()=> handleEdit(item.id)}  />;                          
                        })
                    }

                    <button type="button" className="btn btn-danger btn-block text-capitalize mt-5" onClick={clearList}>clear List</button>
                    <Link to="/" className="btn btn-info btn-block text-capitalize mt-5">back</Link>
                    
                </ul>
        );
    }
}
