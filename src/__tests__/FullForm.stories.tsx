/* eslint-disable react/jsx-max-depth */
import { Box } from '@twilio-paste/core/box';
import { Button } from '@twilio-paste/core/button';
import { HelpText } from '@twilio-paste/core/help-text';
import { Label } from '@twilio-paste/core/label';
import { Text } from '@twilio-paste/core/text';
import { Stack } from '@twilio-paste/core/stack';
import { useForm } from 'react-hook-form';

import { StorybookComponentWrapper } from '../utils/StorybookComponentWrapper';
import {
  Checkbox,
  CheckboxDisclaimer,
  CheckboxGroup,
  Input,
  TextArea,
  Option,
  OptionGroup,
  Radio,
  RadioGroup,
  Select,
} from '../components';

export default {
  title: 'Full Form',
};

interface IFormProps {
  emailAddress: string;
  positiveNumber: string;
  message: string;
  disclaimer: boolean;
  fruits: string[];
  campaign: string;
  callbackMethod: 'get' | 'post';
  product: string;
}

export const FullForm: React.FC = () => {
  const useFormMethods = useForm<IFormProps>({
    defaultValues: {
      message: '',
      fruits: [],
      campaign: 'ongoing',
      callbackMethod: 'get',
    },
  });
  const {
    formState: { errors },
    handleSubmit,
    register,
    control,
    watch,
  } = useFormMethods;
  const message = watch('message');

  return (
    <StorybookComponentWrapper useFormMethods={useFormMethods} title="react-hook-form-paste Form Demo">
      <form
        onSubmit={handleSubmit((payload) => {
          window.alert(JSON.stringify(payload));
        })}
      >
        <Stack orientation="vertical" spacing="space50">
          <Box>
            <Label htmlFor="emailAddress">Email Address</Label>
            <Input {...register('emailAddress')} id="emailAddress" type="email" placeholder="example@twilio.com" />
          </Box>

          <Box>
            <Label htmlFor="positiveNumber">Positive Number</Label>
            <Input
              {...register('positiveNumber', {
                validate: (value) => parseInt(value, 10) >= 0,
                valueAsNumber: true,
              })}
              aria-describedby="positiveNumberErrorHelpText"
              id="positiveNumber"
              type="number"
              placeholder="example@twilio.com"
            />

            {errors.positiveNumber && (
              <HelpText id="positiveNumberErrorHelpText" variant="error">
                {errors.positiveNumber.type}
                {errors.positiveNumber.message}
              </HelpText>
            )}
          </Box>

          <Box>
            <Label htmlFor="message" required={true}>
              Message (at least 40 characters)
            </Label>
            <TextArea<IFormProps>
              controllerProps={{ control, name: 'message' }}
              id="message"
              placeholder="Enter message"
            />
            <Text as="p">{message.length} characters</Text>
          </Box>

          <CheckboxGroup<IFormProps> controllerProps={{ control, name: 'fruits' }} legend="Fruits">
            <Checkbox {...register('fruits')} id="apples" value="apple">
              Apples
            </Checkbox>
            <Checkbox {...register('fruits')} id="oranges" value="orange">
              Oranges
            </Checkbox>
          </CheckboxGroup>

          <CheckboxDisclaimer {...register('disclaimer')} id="disclaimer">
            By agreeing to this you accept the Terms and Conditions.
          </CheckboxDisclaimer>

          <RadioGroup<IFormProps>
            id="campaign"
            legend="When should your campaign run?"
            controllerProps={{
              control,
              name: 'campaign',
            }}
          >
            <Radio id="ongoing" name="campaign" value="ongoing">
              Run my ads as ongoing
            </Radio>
            <Radio id="enddate" name="campaign" value="enddate">
              Set a start and end date
            </Radio>
          </RadioGroup>

          <Box>
            <Label htmlFor="callbackMethod">Callback Method</Label>
            <Select {...register('callbackMethod')} required={true} id="callbackMethod">
              <Option value="get">GET</Option>
              <Option value="post">POST</Option>
              <Option value="put">PUT</Option>
            </Select>
          </Box>

          <Box>
            <Label htmlFor="product" required>
              Product offering
            </Label>
            <Select {...register('product')} required={true} id="product" name="product">
              <OptionGroup label="SMS">
                <Option value="geomatch">Area-code geomatch</Option>
                <Option value="channels">Channels</Option>
                <Option value="short-codes">Short codes</Option>
              </OptionGroup>
              <OptionGroup label="Voice">
                <Option value="conference">Conference</Option>
                <Option value="recording">Recordings</Option>
                <Option value="tts">Text to Speech</Option>
              </OptionGroup>
              <OptionGroup label="Video">
                <Option value="hipaa">HIPAA eligibility</Option>
                <Option value="p2p">Peer to peer</Option>
                <Option value="recordings">Recordings</Option>
              </OptionGroup>
            </Select>
            <HelpText variant="default">Select a product to learn more.</HelpText>
          </Box>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </StorybookComponentWrapper>
  );
};
