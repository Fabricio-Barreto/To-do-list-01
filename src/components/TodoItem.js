import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

export default class TodoItem extends Component {
    render() {
        const { title, handleDelete, handleEdit } = this.props;
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6>{title}</h6>
                <div className="todo-icon">
                    <span className="mx-2 text-success"><FontAwesomeIcon icon={faPen} onClick={handleEdit} /></span>
                    <span className="mx-2 text-danger"><FontAwesomeIcon icon={faTrash} onClick={handleDelete} /></span>
                </div>
            </li>
        )
    }
}
