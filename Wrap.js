/**
 * Created by Mihail on 11/27/2016.
 */
'use strict';

import React from 'react';

class Wrap extends React.Component {
	render() {
		return <div>{this.props.children}</div>;
	}
}
export default Wrap;
