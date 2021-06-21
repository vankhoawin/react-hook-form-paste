import { Button } from '@twilio-paste/core/button';
import { Stack } from '@twilio-paste/core/stack';
import { useForm } from 'react-hook-form';

import { StorybookComponentWrapper } from '../../utils/StorybookComponentWrapper';
import { CheckboxDisclaimer } from './CheckboxDisclaimer';

export default {
  title: 'CheckboxDisclaimer',
};

interface ITestProps {
  checkbox: string;
}

export const Basic: React.FC = () => {
  const useFormMethods = useForm<ITestProps>();
  const { register, handleSubmit } = useFormMethods;

  return (
    <StorybookComponentWrapper useFormMethods={useFormMethods} title="Checkbox">
      <form
        onSubmit={handleSubmit((payload) => {
          window.alert(JSON.stringify(payload));
        })}
      >
        <Stack orientation="vertical" spacing="space80">
          <CheckboxDisclaimer {...register('checkbox')} id="id">
            I declare the information provided above is accurate. I acknowledge that Twilio will process the information
            provided above for the purpose of identity verification, and will be sharing it with my local telecomm
            providers or authorities where required by local law. I understand that Twilio phone numbers may be taken
            out of service for inaccurate or false information.
          </CheckboxDisclaimer>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </StorybookComponentWrapper>
  );
};
