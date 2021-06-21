import { Alert } from '@twilio-paste/core/alert';
import { Button } from '@twilio-paste/core/button';
import { Stack } from '@twilio-paste/core/stack';
import { useForm } from 'react-hook-form';

import { StorybookComponentWrapper } from '../../utils/StorybookComponentWrapper';
import { Radio } from '../Radio';
import { RadioGroup } from './RadioGroup';

export default {
  title: 'RadioGroup',
};

interface ITestProps {
  campaign: string;
}

export const Basic: React.FC = () => {
  const useFormMethods = useForm<ITestProps>();
  const { control, handleSubmit } = useFormMethods;

  return (
    <StorybookComponentWrapper useFormMethods={useFormMethods} title="RadioGroup">
      <form
        onSubmit={handleSubmit((payload) => {
          window.alert(JSON.stringify(payload));
        })}
      >
        <Stack orientation="vertical" spacing="space80">
          <RadioGroup<ITestProps>
            id="campaign"
            legend="When should your campaign run?"
            controllerProps={{
              name: 'campaign',
              control,
              defaultValue: '',
            }}
          >
            <Radio<ITestProps> id="ongoing" value="ongoing" name="campaign">
              Run my ads as ongoing
            </Radio>
            <Radio<ITestProps> id="enddate" value="enddate" name="campaign">
              Set a start and end date
            </Radio>
          </RadioGroup>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </StorybookComponentWrapper>
  );
};

export const WithRules: React.FC = () => {
  const useFormMethods = useForm<ITestProps>();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useFormMethods;

  return (
    <StorybookComponentWrapper useFormMethods={useFormMethods} title="RadioGroup">
      <form
        onSubmit={handleSubmit((payload) => {
          window.alert(JSON.stringify(payload));
        })}
      >
        <Stack orientation="vertical" spacing="space80">
          {errors.campaign?.message && <Alert variant="error">{errors.campaign.message}</Alert>}

          <RadioGroup<ITestProps>
            id="campaign"
            legend="When should your campaign run?"
            controllerProps={{
              control,
              name: 'campaign',
              defaultValue: '',
              rules: { required: 'Please provide a value.' },
            }}
          >
            <Radio<ITestProps> id="ongoing" value="ongoing" name="campaign">
              Run my ads as ongoing
            </Radio>
            <Radio<ITestProps> id="enddate" value="enddate" name="campaign">
              Set a start and end date
            </Radio>
          </RadioGroup>

          <Stack orientation="horizontal" spacing="space30">
            <Button variant="secondary" onClick={() => reset({ campaign: '' })}>
              Reset
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Stack>
        </Stack>
      </form>
    </StorybookComponentWrapper>
  );
};
