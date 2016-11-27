/**
 * Created by Mihail on 11/27/2016.
 */
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo'

ReactDOM.render(
	<div style={ {padding: '20px'} }>
		<h1>Discoverer Tool</h1>

		<h2>Logo</h2>
		<div style={ {display: 'inline-block', background: 'purple'} }>
			<Logo/>
		</div>
	</div>,
	document.getElementById('pad')
);
