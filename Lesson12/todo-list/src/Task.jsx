import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Task = ({ id, done, text, onChange, onDelete }) => {
 
    return (
        <li className={classNames('list-item', { 'list-item_done' : done })}>
            <input 
                type="checkbox"
                className="list-item__checkbox"
                defaultChecked={done}
                onChange={() => onChange(id)}
            />
            <span className="list-item__text">{text}</span>
            <button className="list-item__delete-btn" onClick={() => onDelete(id)}></button>
        </li>
    );

};

Task.propTypes = {
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.isRequired,
    onChange: PropTypes.func.isRequired,

}

export default Task;

