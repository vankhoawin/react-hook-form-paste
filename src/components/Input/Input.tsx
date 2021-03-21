import { Input as $Input, InputProps as $InputProps } from '@twilio-paste/core/input';
import { FieldValues } from 'react-hook-form';

export function Input<TKeys extends FieldValues>(
  props: Omit<$InputProps, 'ref'> & {
    registerRef: React.Ref<HTMLInputElement>;
    name: keyof TKeys;
  },
): React.ReactElement {
  const { registerRef: ref, ...rest } = props;
  return <$Input ref={ref} {...rest} />;
}

Input.displayName = 'Input';
