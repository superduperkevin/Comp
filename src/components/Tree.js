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
        nodes: 
    }

    getRootNodes = () => {
        const { nodes } = this.state;
        return values(nodes).filter(node => node.isRoot === true);
    }
}