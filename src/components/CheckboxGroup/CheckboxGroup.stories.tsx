import { Button } from '@twilio-paste/core/button';
import { useForm } from 'react-hook-form';

import { Checkbox } from '../Checkbox';
import { CheckboxGroup } from './CheckboxGroup';

export default {
  title: 'CheckboxGroup',
};

interface ITestProps {
  campaign: string[];
}

export const Basic: React.FC = () => {
  const { register, handleSubmit } = useForm<ITestProps>({
    defaultValues: {
      campaign: ['ongoing'],
    },
  });

  return (
    <form
      onSubmit={handleSubmit((payload) => {
        window.alert(JSON.stringify(payload));
      })}
    >
      <CheckboxGroup name="campaign" legend="When should your campaign run?">
        <Checkbox<ITestProps> id="ongoing" name="campaign" value="ongoing" registerRef={register}>
          Run my ads as ongoing
        </Checkbox>
        <Checkbox<ITestProps> id="enddate" name="campaign" value="enddate" registerRef={register}>
          Set a start and end date
        </Checkbox>
      </CheckboxGroup>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};
