import React from "react";
import { create } from "react-test-renderer";
// import ProfileStatus from "./ProfileStatusClass";
import ProfileStatus from "./ProfileStatusClass";

describe("ProfileStatus component", () => {
  it("status from the props should be in the state", () => {
    const component = create(<ProfileStatus status="new test status 1" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("new test status 1");
  });

  it("after creation <span> should be displayed", () => {
    const component = create(<ProfileStatus status="new test status 1" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span).not.toBeNull();
  });

  it("after creation <input> should not be displayed", () => {
    const component = create(<ProfileStatus status="new test status 1" />);
    const root = component.root;
    expect(() => {
      let input = root.findByType("input");
    }).toThrow();
  });

  it("after creation <span> should be display correct status", () => {
    const component = create(<ProfileStatus status="new test status 1" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span.children[0]).toBe("new test status 1");
  });

  it("input should be displayed in editMode instead of span", () => {
    const component = create(<ProfileStatus status="new test status 1" />);
    const root = component.root;
    let span = root.findByType("span");
    span.props.onDoubleClick();
    let input = root.findByType("input");
    expect(input.props.value).toBe("new test status 1");
  });

  it("callback should be called", () => {
    const mockCallback = jest.fn();
    const component = create(<ProfileStatus status="new test status 1" updateStatus={mockCallback} />);
    const instance = component.getInstance();
    instance.deActivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
