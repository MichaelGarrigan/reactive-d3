
import React, { Component } from 'react';
import LinkedListController from './LinkedListController.jsx';
import './LinkedListEditor.css';
import LinkedListElement from './LinkedListElement';

const dataConfig = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  fill: 'white',
  stroke: 'blue',
  strokeWidth: ''
};

export default class LinkedListEditor extends Component {
  state = {
    list: [20],
    listData: []
  }


  addData = (event) => {
    //prevState.list.push(Math.random() * 10)
    event.preventDefault();
    this.setState(prevState => ({
      list: [...prevState.list, Math.floor(Math.random() * 100)]
    }));
  }

  removeData = () => {

    this.setState(prevState => ({
      list: prevState.list.slice(0, prevState.list.length - 1)
    }));
  }


  render() {
    let offsetSeed = [20, 20];
    return (
      <div className='linked-list-editor-wrapper'>
        <h2 className="linked-list-title">Linked List Editor</h2>

        <div className="ll-svg-wrapper">
          <p>Data:<span>{JSON.stringify(this.state.list)}</span></p>
          <div className='linked-list-editor-flex'>
            <svg
              className="linked-list-svg"
              height='500'
              width='960'
            >
              {
                this.state.list.map((item, idx) => {
                  let offset;
                  if (idx === 0) offset = [...offsetSeed];
                  else {
                    offsetSeed[0] += 180;
                    offset = [...offsetSeed];
                  }

                  return (
                    <LinkedListElement
                      key={item}
                      value={item}
                      size={100}
                      offset={offset}
                    />
                  );
                })
              }
            </svg>
            <LinkedListController
              addData={this.addData}
              removeData={this.removeData}
            />
          </div>
        </div>
      </div>
    );
  }
}
