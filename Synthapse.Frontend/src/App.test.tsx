import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App, { Hero } from './App';
import { shallow, configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
configure({adapter: new Adapter()});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/AI-driven nutrition analysis for informed, personalized dietary choices. Revolutionize your health./i);
  expect(linkElement).toBeInTheDocument();
});
configure({adapter: new Adapter()});
describe('App', () => {
    // Test that the Hero component is rendered in the App function
    it('should render the Hero component when called', () => {
      // Arrange
      const wrapper = shallow(<App />);
  
      // Act
      const heroComponent = wrapper.find(Hero);
  
      // Assert
      expect(heroComponent.exists()).toBe(true);
    });


});
