import { useForm } from 'react-hook-form';
import * as TestRenderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { Button } from '@twilio-paste/core/button';

import { Checkbox } from '../Checkbox';
import { CheckboxGroup } from './CheckboxGroup';

const { act } = TestRenderer;

interface ITestProps {
  campaign: string[];
}

test('checks a checkbox and submits the form', async () => {
  const hookProps = renderHook(() =>
    useForm<ITestProps>({
      defaultValues: {
        campaign: [],
      },
    }),
  );
  const { register, handleSubmit } = hookProps.result.current;
  const onSubmitFormHandler = jest.fn();
  const RADIO_TEST_ID = 'ongoing-test-id';

  const { getByTestId, getByText } = render(
    <form onSubmit={handleSubmit(onSubmitFormHandler)}>
      <CheckboxGroup name="campaign" legend="When should your campaign run?">
        <Checkbox<ITestProps>
          id="ongoing"
          name="campaign"
          value="ongoing"
          registerRef={register}
          data-testid={RADIO_TEST_ID}
        >
          Run my ads as ongoing
        </Checkbox>
        <Checkbox<ITestProps> id="enddate" name="campaign" value="enddate" registerRef={register}>
          Set a start and end date
        </Checkbox>
      </CheckboxGroup>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </form>,
  );

  const submitButton = getByText(/Submit/);

  await act(async () => {
    fireEvent.click(getByTestId(RADIO_TEST_ID));
    fireEvent.click(submitButton);
  });

  expect(onSubmitFormHandler).toHaveBeenCalledTimes(1);
  expect(onSubmitFormHandler).toHaveBeenCalledWith({ campaign: ['ongoing'] }, expect.anything());
});

test('tests optional `onChange` event handlers', async () => {
  // eslint-disable-next-line sonarjs/no-identical-functions
  const hookProps = renderHook(() =>
    useForm<ITestProps>({
      defaultValues: {
        campaign: [],
      },
    }),
  );
  const { handleSubmit, register } = hookProps.result.current;
  const onSubmitFormHandler = jest.fn();
  const onChangeInputHandler = jest.fn();
  const RADIO_TEST_ID = 'ongoing-test-id';

  const { getByTestId } = render(
    <form onSubmit={handleSubmit(onSubmitFormHandler)}>
      <CheckboxGroup
        id="campaign"
        name="campaign"
        legend="When should your campaign run?"
        onChange={onChangeInputHandler}
      >
        <Checkbox<ITestProps>
          id="ongoing"
          name="campaign"
          value="ongoing"
          data-testid={RADIO_TEST_ID}
          registerRef={register}
        >
          Run my ads as ongoing
        </Checkbox>
        <Checkbox<ITestProps> id="enddate" name="campaign" value="enddate" registerRef={register}>
          Set a start and end date
        </Checkbox>
      </CheckboxGroup>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </form>,
  );

  await act(async () => {
    fireEvent.click(getByTestId(RADIO_TEST_ID));
  });

  expect(onChangeInputHandler).toHaveBeenCalledTimes(1);
});
