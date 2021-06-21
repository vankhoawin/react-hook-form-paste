import { Button } from '@twilio-paste/core/button';
import { useForm } from 'react-hook-form';

import { StorybookComponentWrapper } from '../../utils/StorybookComponentWrapper';
import { Checkbox } from '../Checkbox';
import { CheckboxGroup } from './CheckboxGroup';

export default {
  title: 'CheckboxGroup',
};

interface ITestProps {
  campaign: string[];
}

export const Basic: React.FC = () => {
  const useFormMethods = useForm<ITestProps>({
    defaultValues: {
      campaign: ['ongoing'],
    },
  });
  const { register, handleSubmit } = useFormMethods;

  return (
    <StorybookComponentWrapper useFormMethods={useFormMethods} title="Checkbox">
      <form
        onSubmit={handleSubmit((payload) => {
          window.alert(JSON.stringify(payload));
        })}
      >
        <CheckboxGroup<ITestProps>
          name="campaign"
          legend="When should your campaign run?"
          onChange={() => {
            window.alert('ive changed.');
          }}
        >
          <Checkbox {...register('campaign')} id="ongoing" value="ongoing">
            Run my ads as ongoing
          </Checkbox>
          <Checkbox {...register('campaign')} id="enddate" value="enddate">
            Set a start and end date
          </Checkbox>
        </CheckboxGroup>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </StorybookComponentWrapper>
  );
};
