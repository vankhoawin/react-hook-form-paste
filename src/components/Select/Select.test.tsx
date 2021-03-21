import { fireEvent, render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { Button } from '@twilio-paste/core/button';
import { Label } from '@twilio-paste/core/label';
import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import { useForm } from 'react-hook-form';

import { Option } from '../Option';
import { Select } from './Select';

const { act } = TestRenderer;

interface ITestProps {
  callbackMethod: string;
}

test('type into an input and submit the form', async () => {
  const hookProps = renderHook(() => useForm<ITestProps>());
  const { register, handleSubmit } = hookProps.result.current;
  const onSubmitFormHandler = jest.fn();

  render(
    <form onSubmit={handleSubmit(onSubmitFormHandler)}>
      <Label htmlFor="callbackMethod">Callback Method</Label>
      <Select<ITestProps> required id="callbackMethod" name="callbackMethod" registerRef={register}>
        <Option value="get">GET</Option>
        <Option value="post">POST</Option>
        <Option value="put">PUT</Option>
      </Select>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </form>,
  );

  const submitButton = screen.getByText(/Submit/);
  const getOption = screen.getByDisplayValue(/GET/);

  await act(async () => {
    fireEvent.change(getOption, { target: { value: 'post' } });
    fireEvent.click(submitButton);
  });

  expect(onSubmitFormHandler).toHaveBeenCalledTimes(1);
  expect(onSubmitFormHandler).toHaveBeenCalledWith({ callbackMethod: 'post' }, expect.anything());
});

test('tests optional `onChange` and `onBlur` event handlers', async () => {
  const hookProps = renderHook(() => useForm<ITestProps>());
  const { register, handleSubmit } = hookProps.result.current;
  const onSubmitFormHandler = jest.fn();
  const onChangeFormHandler = jest.fn();
  const onFocusFormHandler = jest.fn();
  const onBlurFormHandler = jest.fn();

  render(
    <form onSubmit={handleSubmit(onSubmitFormHandler)}>
      <Label htmlFor="callbackMethod">Callback Method</Label>
      <Select<ITestProps>
        required
        id="callbackMethod"
        name="callbackMethod"
        registerRef={register}
        onChange={onChangeFormHandler}
        onFocus={onFocusFormHandler}
        onBlur={onBlurFormHandler}
      >
        <Option value="get">GET</Option>
        <Option value="post">POST</Option>
        <Option value="put">PUT</Option>
      </Select>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </form>,
  );

  const getOption = screen.getByDisplayValue(/GET/);

  await act(async () => {
    fireEvent.focus(screen.getByDisplayValue(/GET/));
    fireEvent.blur(screen.getByDisplayValue(/GET/));
    fireEvent.change(getOption, { target: { value: 'post' } });
  });

  expect(onFocusFormHandler).toHaveBeenCalledTimes(1);
  expect(onBlurFormHandler).toHaveBeenCalledTimes(1);
  expect(onChangeFormHandler).toHaveBeenCalledTimes(1);
});
