import Adapter from 'enzyme-adapter-react-16';
import App from './App';

const Enzyme = require('enzyme');
const React = require('react');

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  // Prepare
  const wrapper = Enzyme.shallow(<App />);
  const divComponent = wrapper.find('[className="App"]');

  // Assert
  it('should render div component', () => {
    expect(divComponent).toBeTruthy();
  });
});
