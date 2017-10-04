
import React from 'react';

const theDefaultReducer = (state = 0, action) => state;

function toggleVisibilityReducer(state = true, action) {
    switch (action.type) {
        case 'TOGGLE_WINDOW':
            return action.toggleVisibility;
        default:
            return state;
    }
}

const secondNamedReducer = (state = 2, action) => state;

export default theDefaultReducer
export {
	toggleVisibilityReducer,
	secondNamedReducer
} 
