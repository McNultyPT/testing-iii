import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard.js';
import Controls from '../controls/Controls.js'

describe('<Dashboard />', () => {
    it('renders without crashing', () => {
        render(<Dashboard />)
    });

    // describe('toggleLocked()', () => {
    //     it('it toggles truthy when clicked', () => {
    //         const {  } = render(<Dashboard />);
    //         const { getAllByTestId, queryByText, getByText } = render(<Controls />);

    //         const button = getAllByTestId(/toggleLock/i);
    //         expect(getByText(/lock gate/i)).toBeInTheDocument();

    //         fireEvent.click(button);
    //         expect(getByText(/unlock gate/i)).toBeInTheDocument();
    //     });
    // });
});
