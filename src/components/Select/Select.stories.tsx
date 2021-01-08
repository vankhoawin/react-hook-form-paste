import { Theme } from '@twilio-paste/core/theme';
import { Button } from '@twilio-paste/core/button';
import { Label } from '@twilio-paste/core/label';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import { Option } from '../Option';
import { Select } from './Select';

export default {
  title: 'Select',
};

interface ITestProps {
  callbackMethod: string;
}

export const Basic: React.FC = () => {
  const { register, handleSubmit } = useForm<ITestProps>();

  return (
    <Theme.Provider theme="default">
      <form
        onSubmit={handleSubmit((payload) => {
          window.alert(JSON.stringify(payload));
        })}
      >
        <Label htmlFor="callbackMethod">Callback Method</Label>
        <Select<ITestProps> required id="callbackMethod" name="callbackMethod" registerRef={register}>
          <Option value="get">GET</Option>
          <Option value="post">POST</Option>
          <Option value="put">PUT</Option>
        </Select>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </Theme.Provider>
  );
};
