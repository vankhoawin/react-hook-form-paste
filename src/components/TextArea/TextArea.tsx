import * as React from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { TextArea as $TextArea, TextAreaProps as $TextAreaProps } from '@twilio-paste/core/textarea';

export function TextArea<TKeys extends FieldValues>(
  props: Omit<$TextAreaProps, 'onChange' | 'value'> &
    Partial<Pick<$TextAreaProps, 'onChange' | 'value'>> & {
      control: Control;
      name: keyof TKeys;
    },
): React.ReactElement {
  const { control, name, ...rest } = props;
  return (
    <Controller control={control} name={name} render={(renderProps) => <$TextArea {...renderProps} {...rest} />} />
  );
}

TextArea.displayName = 'TextArea';
