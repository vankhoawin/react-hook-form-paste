import * as React from 'react';
import { Input as $Input, InputProps as $InputProps } from '@twilio-paste/core/input';
import { FieldValues } from 'react-hook-form';

export function Input<TKeys extends FieldValues>(
  props: Omit<$InputProps, 'ref' | 'onChange' | 'value'> &
    Partial<Pick<$InputProps, 'onChange' | 'value'>> & {
      registerRef: React.Ref<HTMLInputElement>;
      name: keyof TKeys;
    },
): React.ReactElement {
  const { registerRef: ref, ...rest } = props;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <$Input ref={ref} {...rest} />;
}

Input.displayName = 'Input';
