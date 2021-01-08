import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import { useForm } from 'react-hook-form';
import { fireEvent, render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { Theme } from '@twilio-paste/core/theme';
import { Button } from '@twilio-paste/core/button';

import { Radio } from '../Radio';
import { RadioGroup } from './RadioGroup';

const { act } = TestRenderer;

interface ITestProps {
  campaign: string;
}

test('types into an input and submits the form', async () => {
  const hookProps = renderHook(() =>
    useForm<ITestProps>({
      defaultValues: {
        campaign: '',
      },
    }),
  );
  const { control, handleSubmit } = hookProps.result.current;
  const onSubmitFormHandler = jest.fn();
  const ONGOING_TEST_ID = 'ongoing-test-id';
  const END_DATE_TEST_ID = 'enddate-test-id';

  const { getByTestId, getByText } = render(
    <Theme.Provider theme="default">
      <form onSubmit={handleSubmit(onSubmitFormHandler)}>
        <RadioGroup<ITestProps> id="campaign" name="campaign" legend="When should your campaign run?" control={control}>
          <Radio<ITestProps> id="ongoing" value="ongoing" name="campaign" data-testid={ONGOING_TEST_ID}>
            Run my ads as ongoing
          </Radio>
          <Radio<ITestProps> id="enddate" value="enddate" name="campaign" data-testid={END_DATE_TEST_ID}>
            Set a start and end date
          </Radio>
        </RadioGroup>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </Theme.Provider>,
  );

  const submitButton = getByText(/Submit/);

  await act(async () => {
    fireEvent.click(getByTestId(ONGOING_TEST_ID));
    fireEvent.click(submitButton);
  });

  expect(onSubmitFormHandler).toHaveBeenCalledTimes(1);
  expect(onSubmitFormHandler).toHaveBeenCalledWith({ campaign: 'ongoing' }, expect.anything());

  await act(async () => {
    fireEvent.click(getByTestId(END_DATE_TEST_ID));
    fireEvent.click(submitButton);
  });

  expect(onSubmitFormHandler).toHaveBeenCalledTimes(2);
  expect(onSubmitFormHandler).toHaveBeenCalledWith({ campaign: 'enddate' }, expect.anything());
});

test('tests optional `onChange` event handlers', async () => {
  const hookProps = renderHook(() =>
    useForm<ITestProps>({
      defaultValues: {
        campaign: '',
      },
    }),
  );
  const { control, handleSubmit } = hookProps.result.current;
  const onSubmitFormHandler = jest.fn();
  const onChangeInputHandler = jest.fn();
  const onFocusInputHandler = jest.fn();
  const onBlurInputHandler = jest.fn();
  const RADIO_TEST_ID = 'ongoing-test-id';

  const { getByTestId } = render(
    <Theme.Provider theme="default">
      <form onSubmit={handleSubmit(onSubmitFormHandler)}>
        <RadioGroup<ITestProps>
          id="campaign"
          name="campaign"
          legend="When should your campaign run?"
          control={control}
          onChange={onChangeInputHandler}
          onFocus={onFocusInputHandler}
          onBlur={onBlurInputHandler}
        >
          <Radio<ITestProps> id="ongoing" value="ongoing" name="campaign" data-testid={RADIO_TEST_ID}>
            Run my ads as ongoing
          </Radio>
          <Radio<ITestProps> id="enddate" value="enddate" name="campaign">
            Set a start and end date
          </Radio>
        </RadioGroup>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </Theme.Provider>,
  );

  await act(async () => {
    fireEvent.click(getByTestId(RADIO_TEST_ID));
    fireEvent.focus(getByTestId(RADIO_TEST_ID));
    fireEvent.blur(getByTestId(RADIO_TEST_ID));
  });

  expect(onChangeInputHandler).toHaveBeenCalledTimes(1);
  expect(onFocusInputHandler).toHaveBeenCalledTimes(1);
  expect(onBlurInputHandler).toHaveBeenCalledTimes(1);
});
