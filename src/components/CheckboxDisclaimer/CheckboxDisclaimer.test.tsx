import * as React from 'react';
import { useForm } from 'react-hook-form';
import * as TestRenderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { Button } from '@twilio-paste/core/button';

import { CheckboxDisclaimer } from './CheckboxDisclaimer';

const { act } = TestRenderer;

interface ITestProps {
  checkbox: string;
}

test('checks and unchecks a checkbox', async () => {
  const hookProps = renderHook(() => useForm<ITestProps>());
  const { register, handleSubmit } = hookProps.result.current;
  const onSubmitFormHandler = jest.fn();
  const TEST_ID = 'agreement-checkbox';

  const { getByTestId, getByText } = render(
    <form onSubmit={handleSubmit(onSubmitFormHandler)}>
      <CheckboxDisclaimer<ITestProps> id="id" data-testid={TEST_ID} name="checkbox" registerRef={register}>
        I declare the information provided above is accurate. I acknowledge that Twilio will process the information
        provided above for the purpose of identity verification, and will be sharing it with my local telecomm providers
        or authorities where required by local law. I understand that Twilio phone numbers may be taken out of service
        for inaccurate or false information.
      </CheckboxDisclaimer>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </form>,
  );

  const checkbox = getByTestId(TEST_ID);
  const submitButton = getByText(/Submit/);

  await act(async () => {
    fireEvent.click(checkbox);
    fireEvent.click(submitButton);
  });

  expect(onSubmitFormHandler).toHaveBeenCalledTimes(1);
  expect(onSubmitFormHandler).toHaveBeenCalledWith({ checkbox: true }, expect.anything());

  await act(async () => {
    fireEvent.click(checkbox);
    fireEvent.click(submitButton);
  });

  expect(onSubmitFormHandler).toHaveBeenCalledTimes(2);
  expect(onSubmitFormHandler).toHaveBeenCalledWith({ checkbox: false }, expect.anything());
});
