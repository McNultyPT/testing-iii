import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Controls from './Controls.js';

describe('<Controls />', () => {
    it('renders without crashing', () => {
        render(<Controls />)
    })

    it.skip('should call the toggleLocked function passed as a prop', () => {
        const toggleLocked = jest.fn();
        
        const { getByTestId } = render(<Controls closed={false} locked={false} toggleLocked={toggleLocked} />);

        const button1 = getByTestId('toggleLock');
        const button2 = getByTestId('toggleOpen');

        fireEvent.click(button1);
        fireEvent.click(button2);
        expect(toggleLocked).toHaveBeenCalled();
    });
});
