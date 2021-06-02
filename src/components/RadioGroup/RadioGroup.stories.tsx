import { Button } from '@twilio-paste/core/button';
import { HelpText } from '@twilio-paste/core/help-text';
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
        defaultValue=""
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