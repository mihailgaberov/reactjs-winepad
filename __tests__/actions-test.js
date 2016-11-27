/**
 * Created by Mihail on 11/27/2016.
 */
jest
	.dontMock('../src/components/Actions')
	.dontMock('../Wrap');

import React from 'react';
import TestUtils from 'react-addons-test-utils';

const Actions = require('../src/components/Actions').default;
const Wrap = require('./../Wrap');

describe('Click some actions', () => {
	it('calls you back', () => {
		const actions = TestUtils.renderIntoDocument(
			<Wrap><Actions/></Wrap>
		);
	});
});
