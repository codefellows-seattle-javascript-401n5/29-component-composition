import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-enzyme';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


import Dashboard from '../../../src/components/dashboard/index';
import NoteCreateForm from '../../../src/components/note-create-form/index';
import NoteList from '../../../src/components/note-list/index';

describe('Dashboard', () => {
  it('should render without crashing', () => {
    shallow(<Dashboard />);
  });

  it('should have form', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find(NoteCreateForm)).toExist();
    // expect(wrapper.find(NoteList)).toExist();
  });
});





// import React from 'react';
// import renderer from 'react-test-renderer';

// import App from '../../../src/components/app.js';

// describe('<App/> (Enzyme Test)', () => {
//   it('is alive at application start', () => {
//     let app = shallow(<App/>);
//     expect(app.find('main').exists()).toBeTruthy();
//     expect(app.find('Header').exists()).toBeTruthy();
//   });
// });