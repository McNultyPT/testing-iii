import React from 'react';
import { render } from 'react-testing-library';

import Dashboard from './Dashboard.js';

describe('<Dashboard />', () => {
    it('renders without crashing', () => {
        render(<Dashboard />)
    });
});
