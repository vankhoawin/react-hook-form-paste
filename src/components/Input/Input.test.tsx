import { act, fireEvent, render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { Button } from '@twilio-paste/core/button';
import { Label } from '@twilio-paste/core/label';
import { useForm } from 'react-hook-form';

import { Input } from './Input';

interface ITestProps {
  emailAddress: string;
}

test('types into an input and submits the form', async () => {
  const hookProps = renderHook(() => useForm<ITestProps>());
  const { register, handleSubmit } = hookProps.result.current;
  const onSubmitFormHandler = jest.fn();
  const emailAddress = 'vanguyen@twilio.com';

  const { getByLabelText, getByText } = render(
    <form onSubmit={handleSubmit(onSubmitFormHandler)}>
      <Label htmlFor="emailAddress">Email Address</Label>
      <Input {...register('emailAddress')} id="emailAddress" type="email" placeholder="example@twilio.com" />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </form>,
  );

  const input = getByLabelText(/Email Address/);
  const submitButton = getByText(/Submit/);

  await act(async () => {
    fireEvent.change(input, {
      target: { value: emailAddress },
    });
    fireEvent.click(submitButton);
  });

  expect(onSubmitFormHandler).toHaveBeenCalledTimes(1);
  expect(onSubmitFormHandler).toHaveBeenCalledWith({ emailAddress }, expect.anything());
});

test("tests `onSubmit`, `onChange` and `onBlur` event handlers'", async () => {
  const hookProps = renderHook(() => useForm<ITestProps>());
  const { register, handleSubmit } = hookProps.result.current;
  const onSubmitFormHandler = jest.fn();
  const onChangeInputHandler = jest.fn();
  const onBlurInputHandler = jest.fn();
  const emailAddress = 'vanguyen@twilio.com';

  const { getByLabelText, getByText } = render(
    <form onSubmit={handleSubmit(onSubmitFormHandler)}>
      <Label htmlFor="emailAddress">Email Address</Label>
      <Input
        {...register('emailAddress')}
        id="emailAddress"
        type="email"
        placeholder="example@twilio.com"
        onChange={onChangeInputHandler}
        onBlur={onBlurInputHandler}
      />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </form>,
  );

  const input = getByLabelText(/Email Address/);
  const submitButton = getByText(/Submit/);

  await act(async () => {
    fireEvent.change(input, {
      target: { value: emailAddress },
    });
    fireEvent.blur(input);
    fireEvent.submit(submitButton);
  });

  expect(onChangeInputHandler).toHaveBeenCalledTimes(1);
  expect(onBlurInputHandler).toHaveBeenCalledTimes(1);
  expect(onSubmitFormHandler).toHaveBeenCalledTimes(1);
});
