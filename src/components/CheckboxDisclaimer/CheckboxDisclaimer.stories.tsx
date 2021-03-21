import { Button } from '@twilio-paste/core/button';
import { useForm } from 'react-hook-form';

import { CheckboxDisclaimer } from './CheckboxDisclaimer';

export default {
  title: 'CheckboxDisclaimer',
};

interface ITestProps {
  checkbox: string;
}

export const Basic: React.FC = () => {
  const { register, handleSubmit } = useForm<ITestProps>();

  return (
    <form
      onSubmit={handleSubmit((payload) => {
        window.alert(JSON.stringify(payload));
      })}
    >
      <CheckboxDisclaimer<ITestProps> id="id" name="checkbox" registerRef={register}>
        I declare the information provided above is accurate. I acknowledge that Twilio will process the information
        provided above for the purpose of identity verification, and will be sharing it with my local telecomm providers
        or authorities where required by local law. I understand that Twilio phone numbers may be taken out of service
        for inaccurate or false information.
      </CheckboxDisclaimer>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};
