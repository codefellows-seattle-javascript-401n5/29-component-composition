import React from "react";
import renderer from "react-test-renderer";
import 'jest-enzyme';
// import {Enzyme} from 'enzyme';
import { configure } from "enzyme";
import { shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Dashboard from '../../../src/components/dashboard/dashboard.js';
import NoteCreateForm from '../../../src/components/notecreateform/notecreateform.js';
import NoteList from "../../../src/components/note-list/note-list.js";


describe("Dashboard", () => {
  it("should render without crashing", () => {
    shallow(<Dashboard />);
  });

  it("should have form", () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find(NoteCreateForm)).toExist();
    expect(wrapper.find(NoteList)).toExist();
  });
});