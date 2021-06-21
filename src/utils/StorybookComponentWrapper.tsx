import { Text } from '@twilio-paste/core/text';
import { Column, Grid } from '@twilio-paste/core/grid';
import { Heading } from '@twilio-paste/core/heading';
import { Card } from '@twilio-paste/core/card';
import * as React from 'react';
import { Control, FieldValues, UseFormReturn, useWatch } from 'react-hook-form';

function Payload<TFieldValues extends FieldValues>({ control }: { control: Control<TFieldValues> }) {
  // @ts-ignore
  const values = useWatch<TFieldValues>({ control });

  return (
    <Card padding="space70">
      <Heading as="h2" variant="heading20">
        Payload
      </Heading>
      <Text as="pre" overflow="auto">
        {JSON.stringify(values, null, 4)}
      </Text>
    </Card>
  );
}

Payload.displayName = 'Payload';

export function StorybookComponentWrapper<TFieldValues extends FieldValues>({
  children,
  title,
  useFormMethods,
}: {
  children: React.ReactChild;
  title: string;
  useFormMethods: UseFormReturn<TFieldValues>;
}): React.ReactElement {
  return (
    <Grid gutter="space30">
      <Column span={12}>
        <Heading as="h1" variant="heading10">
          {title}
        </Heading>
      </Column>
      <Column span={8}>
        <Card padding="space70">
          <Heading as="h2" variant="heading20">
            Form
          </Heading>
          {children}
        </Card>
      </Column>
      <Column span={4}>
        <Payload control={useFormMethods.control} />
      </Column>
    </Grid>
  );
}

StorybookComponentWrapper.displayName = 'StorybookComponentWrapper';
