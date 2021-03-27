import * as React from 'react';

export function SideMenu() {
    return (
        <div className="sideMenu">
			<div>
				<h1 className="sideMenuHeader">
					Colour Picker
				</h1>
				<p>
					by Liam Bloor
				</p>
			</div>


			<div className = 'hexInput'>
				<p>Hex code</p>
				<div className = 'inline'>
					<p>#</p>
					<input className = 'inputBox' type = 'text' value = '1bb9e4' />
				</div>
			</div>

			<div className = 'rgbInput'>
				<div className = 'inline'>
					<p>R </p>
					<input className = 'inputRange' type = 'range' />
					<input className = 'inputBox rgbBox' type = 'text' />
				</div>
				<div className = 'inline'>
					<p>G </p>
					<input className = 'inputRange' type = 'range' />
					<input className = 'inputBox rgbBox' type = 'text' />
				</div>
				<div className = 'inline'>
					<p>B </p>
					<input className = 'inputRange' type = 'range' />
					<input className = 'inputBox rgbBox' type = 'text' />
				</div>
			</div>


        </div>
);
}