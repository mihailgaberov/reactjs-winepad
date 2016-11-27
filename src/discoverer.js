/**
 * Created by Mihail on 11/27/2016.
 */
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';
import Logo from './components/Logo';

ReactDOM.render(
	<div style={ {padding: '20px'} }>
		<h1>Discoverer Tool</h1>

		<h2>Logo</h2>
		<div style={ {display: 'inline-block', background: 'purple'} }>
			<Logo/>
		</div>

		<h2>Button</h2>
		<div>Button with onClick: <Button onClick={() => alert('Ouch!')}>Click me</Button></div>
		<div>A link: <Button href="http://mihail-gaberov.eu">Follow me</Button></div>
		<div>Custom class name: <Button className="custom">I do nothing</Button></div>
	</div>,
	document.getElementById('pad')
);
