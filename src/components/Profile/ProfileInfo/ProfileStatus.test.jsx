import React from 'react';
import {create} from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe("ProfileStatus component", () => {
    test("it shows the expected text when clicked (testing the wrong way!)", () => {
      const component = create(<ProfileStatus status="My-first-React-project.com" />);
      const instance = component.getInstance();
      expect(instance.state.status).toBe("My-first-React-project.com");
    });

    test('after creation <span> with status should be displayed', () => {
      const component = create(<ProfileStatus status="My-first-React-project.com" />);
      const root = component.root;
      expect(() => {
        let input = root.findByType('input');
      }).toThrow();
    });

    test('after creation <span> with status should be displayed with correct status', () => {
        const component = create(<ProfileStatus status="My-first-React-project.com" />);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.children[0]).toBe("My-first-React-project.com");
      });

      test('input should be display in editMode instead of span', () => {
        const component = create(<ProfileStatus status="My-first-React-project.com" />);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick();
        let input = root.findByType('input');
        input.props.onDoubleClick();
        expect(input.props.value).toBe("My-first-React-project.com");
      });

      test ('callback should be called', () => {
          const mockCallback = jest.fn();
          const component = create(<ProfileStatus status="My-first-React-project.com" updateStatus={mockCallback}/>);
          const instance = component.getInstance();
          instance.deactivateEditMode();
          expect(mockCallback.mock.calls.length).toBe(1);

      })
});


   
