/**
 * Created by Mihail on 11/26/2016.
 */
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo';
import Excel from './components/Excel';

let headers = localStorage.getItem('headers');
let data = localStorage.getItem('data');

if (!headers) {
	headers = ['Title', 'Year', 'Rating', 'Comments'];
	data = [['Test Movie', '2015', '3', 'meh']];
}

ReactDOM.render(
	<div>
		<h1>
			<Logo /> Welcome to the app!
		</h1>
		<Excel headers={headers} initialData={data} />
	</div>,
	document.getElementById('pad')
);