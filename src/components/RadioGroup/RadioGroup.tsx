import { Control, Controller, FieldValues } from 'react-hook-form';
import { RadioGroup as $RadioGroup, RadioGroupProps as $RadioGroupProps } from '@twilio-paste/core/radio-group';

export type RadioGroupProps = Omit<$RadioGroupProps, 'value' | 'onChange' | 'ref'> &
  Partial<Pick<$RadioGroupProps, 'onChange'>>;

export function RadioGroup<TKeys extends FieldValues>(
  props: RadioGroupProps & {
    control: Control;
    name: keyof TKeys;
    defaultValue: string;
    // eslint-disable-next-line react/require-default-props
    rules?: any;
  },
): React.ReactElement {
  const { children, control, name: inputName, rules, defaultValue } = props;

  return (
    <Controller
      control={control}
      name={inputName}
      rules={rules}
      defaultValue={defaultValue}
      render={(renderProps) => (
        <$RadioGroup {...renderProps} {...props}>
          {children}
        </$RadioGroup>
      )}
    />
  );
}

RadioGroup.displayName = 'RadioGroup';
