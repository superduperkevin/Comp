import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Node from './Node'

const employees = {
    'TalentPath': {
        path: '/TalentPath',
        type: 'folder',
        isRoot: true,
        children: ['/TalentPath/Mackeever','/TalentPath/Jeff']
    },
    '/TalentPath/Mackeever': {
        path: '/TalentPath/Mackeever',
        type: 'file',
        children: []
    },
    '/TalentPath/Jeff': {
        path: '/TalentPath/Jeff',
        type: 'folder',
        children: ['/TalentPath/Jeff/Andrew', '/TalentPath/Jeff/Nicole']
    },
    '/TalentPath/Jeff/Andrew': {
        path: '/TalentPath/Jeff/Andrew',
        type: 'folder',
        children: ['/TalentPath/Jeff/Andrew/Ivy', '/TalentPath/Jeff/Andrew/Kevin']
    }, 
    '/TalentPath/Jeff/Nicole': {
        path: '/TalentPath/Jeff/Nicole',
        type: 'file',
        children: []
    }
}

export default class Tree extends React.Component {
    state = {
        nodes: employees,
    }
    getRootNodes = () => {
        const { nodes } = this.state;
        return values(nodes).filter(node => node.isRoot === true);
      }
    
      getChildNodes = (node) => {
        const { nodes } = this.state;
        if (!node.children) return [];
        return node.children.map(path => nodes[path]);
      }  
    
      onToggle = (node) => {
        const { nodes } = this.state;
        nodes[node.path].isOpen = !node.isOpen;
        this.setState({ nodes });
      }
    
      onNodeSelect = node => {
        const { onSelect } = this.props;
        onSelect(node);
      }
}