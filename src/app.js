/**
 * Created by Mihail on 11/26/2016.
 */
'use strict';

import CRUDStore from './flux/CRUDStore';
import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo';
import Whinepad from './components/Whinepad';
import schema from './schema';

CRUDStore.init(schema);

ReactDOM.render(
	<div>
		<div className="app-header">
			<Logo/> Welcome to Whinepad!
		</div>
		<Whinepad />
	</div>,
	document.getElementById('pad')
);