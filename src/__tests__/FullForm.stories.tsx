/* eslint-disable react/jsx-max-depth */
import { Box } from '@twilio-paste/core/box';
import { Button } from '@twilio-paste/core/button';
import { HelpText } from '@twilio-paste/core/help-text';
import { Label } from '@twilio-paste/core/label';
import { Text } from '@twilio-paste/core/text';
import { Column, Grid } from '@twilio-paste/core/grid';
import { Heading } from '@twilio-paste/core/heading';
import { Card } from '@twilio-paste/core/card';
import { Stack } from '@twilio-paste/core/stack';
import * as React from 'react';
import { Control, useForm, useWatch } from 'react-hook-form';

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

function Payload({ control }: { control: Control }) {
  const values = useWatch({ control });

  return (
    <Card padding="space70">
      <Heading as="h4" variant="heading40">
        Form Payload
      </Heading>
      <Text as="pre" overflow="auto">
        {JSON.stringify(values, null, 4)}
      </Text>
    </Card>
  );
}

function FormMessageTextArea({ control }: { control: Control }) {
  const values = useWatch({ control });

  return (
    <Box>
      <Label htmlFor="message" required={true}>
        Message (at least 40 characters)
      </Label>
      <TextArea<IFormProps> id="message" name="message" control={control} placeholder="Enter message" />
      <Text as="p">{values.message.length} characters</Text>
    </Box>
  );
}

export const FullForm: React.FC = () => {
  const { errors, handleSubmit, register, control } = useForm<IFormProps>({
    defaultValues: {
      message: '',
      fruits: [],
      campaign: 'ongoing',
      callbackMethod: 'get',
    },
  });

  return (
    <Grid gutter="space30">
      <Column span={8}>
        <Heading as="h4" variant="heading40">
          react-hook-form-paste Form Demo
        </Heading>

        <form
          onSubmit={handleSubmit((payload) => {
            window.alert(JSON.stringify(payload));
          })}
        >
          <Stack orientation="vertical" spacing="space50">
            <Box>
              <Label htmlFor="emailAddress">Email Address</Label>
              <Input<IFormProps>
                id="emailAddress"
                name="emailAddress"
                type="email"
                placeholder="example@twilio.com"
                registerRef={register}
              />
            </Box>

            <Box>
              <Label htmlFor="positiveNumber">Positive Number</Label>
              <Input<IFormProps>
                aria-describedby="positiveNumberErrorHelpText"
                id="positiveNumber"
                name="positiveNumber"
                type="number"
                placeholder="example@twilio.com"
                registerRef={register({
                  validate: (value) => parseInt(value, 10) >= 0,
                  valueAsNumber: true,
                })}
              />

              {errors.positiveNumber && (
                <HelpText id="positiveNumberErrorHelpText" variant="error">
                  {errors.positiveNumber.type}
                  {errors.positiveNumber.message}
                </HelpText>
              )}
            </Box>

            <FormMessageTextArea control={control} />

            <CheckboxGroup name="fruits" legend="Fruits">
              <Checkbox<IFormProps> id="apples" name="fruits" value="apple" registerRef={register}>
                Apples
              </Checkbox>
              <Checkbox<IFormProps> id="oranges" name="fruits" value="orange" registerRef={register}>
                Oranges
              </Checkbox>
            </CheckboxGroup>

            <CheckboxDisclaimer<IFormProps> id="disclaimer" name="disclaimer" registerRef={register}>
              By agreeing to this you accept the Terms and Conditions.
            </CheckboxDisclaimer>

            <RadioGroup<IFormProps>
              id="campaign"
              name="campaign"
              legend="When should your campaign run?"
              control={control}
            >
              <Radio<IFormProps> id="ongoing" value="ongoing" name="campaign">
                Run my ads as ongoing
              </Radio>
              <Radio<IFormProps> id="enddate" value="enddate" name="campaign">
                Set a start and end date
              </Radio>
            </RadioGroup>

            <Box>
              <Label htmlFor="callbackMethod">Callback Method</Label>
              <Select<IFormProps> required id="callbackMethod" name="callbackMethod" registerRef={register}>
                <Option value="get">GET</Option>
                <Option value="post">POST</Option>
                <Option value="put">PUT</Option>
              </Select>
            </Box>

            <Box>
              <Label htmlFor="product" required>
                Product offering
              </Label>
              <Select<IFormProps> required id="product" name="product" registerRef={register}>
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
      </Column>

      <Column span={4}>
        <Payload control={control} />
      </Column>
    </Grid>
  );
};
