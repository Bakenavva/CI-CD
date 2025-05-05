import React from 'react';
import TestComponent from '../../client/src/components/TestComponent';

describe('TestComponent', () => {
  it('renders correctly', () => {
    cy.mount(<TestComponent />);
    cy.contains('Hello from TestComponent');
  });
});