
import React, { Component } from 'react';
import './LinkedListEditor.css';

export default class LinkedListController extends Component {
  render() {
    return (
      <div className='linked-list-controller-wrapper'>
        <span>data:</span>
        <input type="text" className="linked-data-input" />
        <button type="submit" onClick={e => this.props.addData(e)}>Add</button>
        <button type="submit" onClick={() => this.props.removeData()}>Remove</button>
      </div>
    );
  }
}
