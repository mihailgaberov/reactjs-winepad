/**
 * Created by Mihail on 11/27/2016.
 */
'use strict';

import classNames from 'classnames';
import React, {PropTypes} from 'react';

const Button = props =>
	props.href
		? <a {...props} className={classNames('Button', props.className)}/>
		: <button {...props} className={classNames('Button', props.className)}/>


Button.propTypes = {
	href: PropTypes.string,
};

export default Button
