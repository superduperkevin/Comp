import React, { Component } from 'react';
import Tree from './Tree';

export default class Navigator extends Component { 
    state = {
      selected: null,
    };

    onSelect = (file) => this.setState({selected: file});


    render() {
        const { selected } = this.state;

        return (
            <div>{selected && selected.type ==='file' && selected.content} </div>
        )
    }
}
