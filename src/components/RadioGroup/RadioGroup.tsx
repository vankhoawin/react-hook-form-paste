import * as React from 'react';
import { Control, Controller } from 'react-hook-form';
import { RadioGroup as $RadioGroup, RadioGroupProps as $RadioGroupProps } from '@twilio-paste/core/radio-group';

export type RadioGroupProps = Omit<$RadioGroupProps, 'value' | 'onChange'> &
  Partial<Pick<$RadioGroupProps, 'onChange'>>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function RadioGroup<TKeys extends Record<string, any>>(
  props: Omit<$RadioGroupProps, 'ref' | 'onChange' | 'value'> &
    Partial<Pick<$RadioGroupProps, 'onChange' | 'value'>> & {
      control: Control;
      name: keyof TKeys;
    },
): React.ReactElement {
  const { children, control, name: inputName } = props;

  return (
    <Controller
      control={control}
      name={inputName}
      render={(renderProps) => (
        <$RadioGroup {...renderProps} {...props}>
          {children}
        </$RadioGroup>
      )}
    />
  );
}

RadioGroup.displayName = 'RadioGroup';
