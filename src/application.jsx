import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';
import Component from 'react-es6-component';
import MenuItem from './menu/MenuItem';
import MenuBar from './menu/MenuBar';

class Application extends Component {
  static propTypes = { }
  render(){
    return (
      <MenuBar ref="menuBar">
        <MenuItem label="File">
          <MenuItem label="New" icon="images/document_empty.png" shortcut="Ctrl+N"></MenuItem>
          <MenuItem label="Open..." icon="images/folder_vertical_open.png" shortcut="Ctrl+O"></MenuItem>
          <MenuItem label="Open Recent">
            <MenuItem label="File 1"></MenuItem>
            <MenuItem label="File 2"></MenuItem>
            <MenuItem label="File 3"></MenuItem>
            <MenuItem label="File 4"></MenuItem>
          </MenuItem>
          <MenuItem label="Acquire"></MenuItem>
          <MenuItem label="Close" icon="images/cancel.png" shortcut="Ctrl+W"></MenuItem>
          <MenuItem separator={true}></MenuItem>
          <MenuItem label="Save" icon="images/file_save_as.png" shortcut="Ctrl+S"></MenuItem>
          <MenuItem label="Save As..." icon="images/save_close.png" shortcut="Ctrl+Shift+S"></MenuItem>
          <MenuItem separator={true}></MenuItem>
          <MenuItem label="Print..." icon="images/printer.png" shortcut="Ctrl+P"></MenuItem>
          <MenuItem separator={true}></MenuItem>
          <MenuItem label="Exit"></MenuItem>
        </MenuItem>
        <MenuItem label="Edit">
          <MenuItem label="Undo" shortcut="Ctrl+Z" style={{width:250}}></MenuItem>
          <MenuItem label="Redo" shortcut="Ctrl+Y"></MenuItem>
          <MenuItem separator={true}></MenuItem>
          <MenuItem label="Cut" shortcut="Ctrl+X"></MenuItem>
          <MenuItem label="Copy" shortcut="Ctrl+C"></MenuItem>
          <MenuItem label="Paste" shortcut="Ctrl+V"></MenuItem>
          <MenuItem separator={true}></MenuItem>
          <MenuItem label="Select All" shortcut="Ctrl+A"></MenuItem>
          <MenuItem label="Deselect" shortcut="Ctrl+D"></MenuItem>
        </MenuItem>
        <MenuItem label="View">
          <MenuItem label="Zoom In" shortcut="Ctrl++" style={{width:250}}></MenuItem>
          <MenuItem label="Zoom Out" shortcut="Ctrl+-"></MenuItem>
          <MenuItem separator={true}></MenuItem>
          <MenuItem label="Reset Zoom"></MenuItem>
        </MenuItem>
      </MenuBar>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Application></Application>, document.getElementById("app"));
});
