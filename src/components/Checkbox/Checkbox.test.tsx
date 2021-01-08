import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import { useForm } from 'react-hook-form';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { Theme } from '@twilio-paste/core/theme';
import { Button } from '@twilio-paste/core/button';

import { Checkbox } from './Checkbox';

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
    <Theme.Provider theme="default">
      <form onSubmit={handleSubmit(onSubmitFormHandler)}>
        <Checkbox<ITestProps> id="id" data-testid={TEST_ID} name="checkbox" registerRef={register}>
          I declare the information provided above is accurate. I acknowledge that Twilio will process the information
          provided above for the purpose of identity verification, and will be sharing it with my local telecomm
          providers or authorities where required by local law. I understand that Twilio phone numbers may be taken out
          of service for inaccurate or false information.
        </Checkbox>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </Theme.Provider>,
  );

  const checkbox = getByTestId(TEST_ID);
  const submitButton = getByText(/Submit/);

  await act(async () => {
    fireEvent.click(checkbox);
    fireEvent.click(submitButton);
  });

  await waitFor(() => {
    expect(onSubmitFormHandler).toHaveBeenCalledTimes(1);
    expect(onSubmitFormHandler).toHaveBeenCalledWith({ checkbox: true }, expect.anything());
  });

  await act(async () => {
    fireEvent.click(checkbox);
    fireEvent.click(submitButton);
  });

  await waitFor(() => {
    expect(onSubmitFormHandler).toHaveBeenCalledTimes(2);
    expect(onSubmitFormHandler).toHaveBeenCalledWith({ checkbox: false }, expect.anything());
  });
});
