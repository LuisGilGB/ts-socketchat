import React from 'react';
import {shallow} from 'enzyme';
import AppRouter from './AppRouter';

const setup = () => shallow(<AppRouter/>);

describe('App router', () => {
    it('Renders without crashing', () => {
        const wrapper = setup();
        expect(wrapper).not.toBe(null);
    });
});