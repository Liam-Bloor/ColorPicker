import * as React from 'react';
import { SideMenu } from './components/SideMenu';
import { ColorPickerCanvas } from './components/ColorPickerCanvas';
import { HoverOverMenu } from './components/HoverOverMenu';
import { PickerTypeMenu } from './components/PickerTypeMenu';
import './App.css';

function App() {
  	return (
  		<div className="app">
			<SideMenu />
			<ColorPickerCanvas />
			<PickerTypeMenu />
		</div>
	);
}

export default App;
