import * as React from 'react';
import { FieldValues } from 'react-hook-form';
import { Checkbox as $Checkbox, CheckboxProps as $CheckboxProps } from '@twilio-paste/core/checkbox';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Checkbox<TFormKeys extends FieldValues>(
  props: Omit<$CheckboxProps, 'id' | 'onChange' | 'value'> &
    Partial<Pick<$CheckboxProps, 'id' | 'onChange' | 'value'>> & {
      // eslint-disable-next-line react/require-default-props
      registerRef?: React.Ref<HTMLDivElement>;
      // eslint-disable-next-line react/require-default-props
      name?: keyof TFormKeys;
    },
): React.ReactElement {
  const { registerRef: ref, ...rest } = props;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <$Checkbox ref={ref} {...rest} />;
}

Checkbox.displayName = 'Checkbox';
