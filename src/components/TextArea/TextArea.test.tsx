import { useForm } from 'react-hook-form';
import * as TestRenderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { Button } from '@twilio-paste/core/button';
import { Label } from '@twilio-paste/core/label';
import { Text } from '@twilio-paste/core/text';

import { TextArea } from './TextArea';

const { act } = TestRenderer;

interface ITestProps {
  message: string;
}

test('types into the textarea and submits the form', async () => {
  const hookProps = renderHook(() =>
    useForm<ITestProps>({
      defaultValues: {
        message: '',
      },
    }),
  );
  const { control, handleSubmit } = hookProps.result.current;
  const onSubmitFormHandler = jest.fn();
  const TEST_ID = 'message-textarea';
  const message = 'loremipsumloremipsumloremipsumloremipsum';

  const { getByTestId, getByText } = render(
    <form onSubmit={handleSubmit(onSubmitFormHandler)}>
      <Label htmlFor="message" required={true}>
        Message (at least 40 characters)
      </Label>
      <TextArea<ITestProps>
        id="message"
        name="message"
        placeholder="Enter message"
        control={control}
        data-testid={TEST_ID}
      />
      <Text as="p">{message.length} characters</Text>

      <Button variant="primary" type="submit" disabled={message.length < 40}>
        Submit
      </Button>
    </form>,
  );

  const textarea = getByTestId(TEST_ID);

  await act(async () => {
    fireEvent.change(textarea, {
      target: { value: message },
    });
    fireEvent.click(getByText(/Submit/));
  });

  expect(onSubmitFormHandler).toHaveBeenCalledTimes(1);
  expect(onSubmitFormHandler).toHaveBeenCalledWith({ message }, expect.anything());
});

test('tests optional `onChange` and `onBlur` event handlers', async () => {
  // eslint-disable-next-line sonarjs/no-identical-functions
  const hookProps = renderHook(() =>
    useForm<ITestProps>({
      defaultValues: {
        message: '',
      },
    }),
  );
  const { control, handleSubmit } = hookProps.result.current;
  const onSubmitFormHandler = jest.fn();
  const onChangeInputHandler = jest.fn();
  const onBlurInputHandler = jest.fn();
  const TEST_ID = 'message-textarea';
  const message = 'loremipsumloremipsumloremipsumloremipsum';

  const { getByTestId } = render(
    <form onSubmit={handleSubmit(onSubmitFormHandler)}>
      <Label htmlFor="message" required={true}>
        Message (at least 40 characters)
      </Label>
      <TextArea<ITestProps>
        id="message"
        name="message"
        placeholder="Enter message"
        control={control}
        onChange={onChangeInputHandler}
        onBlur={onBlurInputHandler}
        data-testid={TEST_ID}
      />
      <Text as="p">{message.length} characters</Text>

      <Button variant="primary" type="submit" disabled={message.length < 40}>
        Submit
      </Button>
    </form>,
  );

  const textarea = getByTestId(TEST_ID);

  await act(async () => {
    fireEvent.change(textarea, {
      target: { value: message },
    });
    fireEvent.blur(textarea);
  });

  expect(onChangeInputHandler).toHaveBeenCalledTimes(1);
  expect(onBlurInputHandler).toHaveBeenCalledTimes(1);
});
