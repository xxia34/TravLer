
import React from 'react';

const theDefaultReducer = (state = 0, action) => state;

const firstNamedReducer = (state = 1, action) => state;

const secondNamedReducer = (state = 2, action) => state;

export default theDefaultReducer
export {
	firstNamedReducer,
	secondNamedReducer
} 
