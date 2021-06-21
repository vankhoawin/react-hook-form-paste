import { useForm } from 'react-hook-form';
import { act, fireEvent, render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { Button } from '@twilio-paste/core/button';

import { Checkbox } from '../Checkbox';
import { CheckboxGroup } from './CheckboxGroup';

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
      <CheckboxGroup<ITestProps> name="campaign" legend="When should your campaign run?">
        <Checkbox {...register('campaign')} id="ongoing" value="ongoing" data-testid={RADIO_TEST_ID}>
          Run my ads as ongoing
        </Checkbox>
        <Checkbox {...register('campaign')} id="enddate" value="enddate">
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
