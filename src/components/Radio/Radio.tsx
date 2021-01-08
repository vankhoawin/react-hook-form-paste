import * as React from 'react';
import { FieldValues } from 'react-hook-form';
import { Radio as $Radio, RadioProps as $RadioProps } from '@twilio-paste/core/radio-group';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Radio<TFormKeys extends FieldValues>(
  props: Omit<$RadioProps, 'onChange' | 'value'> &
    Partial<Pick<$RadioProps, 'onChange' | 'value'>> & {
      // eslint-disable-next-line react/require-default-props
      registerRef?: React.Ref<HTMLDivElement>;
      name: keyof TFormKeys;
    },
): React.ReactElement {
  const { registerRef: ref, ...rest } = props;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <$Radio ref={ref} {...rest} />;
}

Radio.displayName = 'Radio';
