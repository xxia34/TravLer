import React, { Component } from 'react';
import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time
import './App.css';
import Dashboard from './Dashboard'
import ActionBar from './ActionBar'

const App = () => (
  <div>
    <ActionBar />
    <Dashboard />
  </div>
)

export default App