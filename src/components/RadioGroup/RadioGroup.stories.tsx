import { Alert } from '@twilio-paste/core/alert';
import { Button } from '@twilio-paste/core/button';
import { Text } from '@twilio-paste/core/text';
import { Separator } from '@twilio-paste/core/separator';
import { Stack } from '@twilio-paste/core/stack';
import { useForm } from 'react-hook-form';

import { Radio } from '../Radio';
import { RadioGroup } from './RadioGroup';

export default {
  title: 'RadioGroup',
};

interface ITestProps {
  campaign: string;
}

export const Basic: React.FC = () => {
  const { control, handleSubmit } = useForm<ITestProps>();

  return (
    <form
      onSubmit={handleSubmit((payload) => {
        window.alert(JSON.stringify(payload));
      })}
    >
      <RadioGroup<ITestProps>
        id="campaign"
        name="campaign"
        legend="When should your campaign run?"
        control={control}
        controllerProps={{
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
    </form>
  );
};

export const WithRules: React.FC = () => {
  const { control, handleSubmit, reset, errors, watch } = useForm<ITestProps>();
  const currentValue = watch('campaign');

  return (
    <form
      onSubmit={handleSubmit((payload) => {
        window.alert(JSON.stringify(payload));
      })}
    >
      <Text as="p">Current Value: {currentValue}</Text>
      <Separator orientation="horizontal" verticalSpacing="space30" />

      {errors.campaign?.message && <Alert variant="error">{errors.campaign.message}</Alert>}

      <RadioGroup<ITestProps>
        id="campaign"
        name="campaign"
        legend="When should your campaign run?"
        control={control}
        controllerProps={{
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
    </form>
  );
};
