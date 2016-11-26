/**
 * Created by Mihail on 11/26/2016.
 */
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo';

React.render(
	<h1>
		<Logo /> Welcome to the app!
	</h1>,
	document.getElementById('app')
);