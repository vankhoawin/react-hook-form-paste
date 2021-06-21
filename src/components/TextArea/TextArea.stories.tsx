import { Button } from '@twilio-paste/core/button';
import { Box } from '@twilio-paste/core/box';
import { Label } from '@twilio-paste/core/label';
import { Stack } from '@twilio-paste/core/stack';
import { Text } from '@twilio-paste/core/text';
import { useForm } from 'react-hook-form';

import { StorybookComponentWrapper } from '../../utils/StorybookComponentWrapper';
import { TextArea } from './TextArea';

export default {
  title: 'TextArea',
};

interface ITestProps {
  message: string;
}

export const Basic: React.FC = () => {
  const useFormMethods = useForm<ITestProps>({
    defaultValues: {
      message: '',
    },
  });
  const { control, handleSubmit, watch } = useFormMethods;
  const message = watch('message');

  return (
    <StorybookComponentWrapper useFormMethods={useFormMethods} title="TextArea">
      <form
        onSubmit={handleSubmit((payload) => {
          window.alert(JSON.stringify(payload));
        })}
      >
        <Stack orientation="vertical" spacing="space80">
          <Box>
            <Label htmlFor="message" required={true}>
              Message (at least 40 characters)
            </Label>
            <TextArea controllerProps={{ control, name: 'message' }} id="message" placeholder="Enter message" />
            <Text as="p">{message.length} characters</Text>
          </Box>

          <Button variant="primary" type="submit" disabled={message.length < 40}>
            Submit
          </Button>
        </Stack>
      </form>
    </StorybookComponentWrapper>
  );
};
