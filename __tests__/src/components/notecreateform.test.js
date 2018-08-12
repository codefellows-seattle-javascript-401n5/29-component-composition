import React from "react";
import renderer from "react-test-renderer";
// import 'jest-enzyme';
import { configure } from "enzyme";
import { shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import NoteCreateForm from '../../../src/components/notecreateform/notecreateform.js';

describe("NoteCreateForm", () => {
  it("should render", () => {
    shallow(<NoteCreateForm />);
  });

  it("should handle form changes", () => {
    const wrapper = shallow(<NoteCreateForm />);
    const instance = wrapper.instance();
    const event = {
      target: {
        name: "title",
        value: "new title",
        type: "text"
      }
    };
    instance.onChange(event);

    expect(wrapper.state("title")).toBe("new title");
  });

  it("should submit a new note", done => {
    const onSubmit = note => {
      expect(note.id).not.toBe("");
      done();
    };
    const wrapper = shallow(<NoteCreateForm onSubmit={onSubmit} />);

    // notice that we pass in stub function for preventDefault
    const event = {
      preventDefault: () => {}
    };

    wrapper.instance().onSubmit(event);
  });
});
