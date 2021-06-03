import { Control, Controller, ControllerProps, FieldValues } from 'react-hook-form';
import { RadioGroup as $RadioGroup, RadioGroupProps as $RadioGroupProps } from '@twilio-paste/core/radio-group';

export type RadioGroupProps = Omit<$RadioGroupProps, 'value' | 'onChange' | 'ref'> &
  Partial<Pick<$RadioGroupProps, 'onChange'>>;

export function RadioGroup<TKeys extends FieldValues>(
  props: RadioGroupProps & {
    control: Control;
    name: keyof TKeys;
    // eslint-disable-next-line react/require-default-props
    controllerProps?: Pick<ControllerProps<typeof $RadioGroup, FieldValues>, 'rules' | 'defaultValue'>;
  },
): React.ReactElement {
  const { children, control, name: inputName, controllerProps } = props;

  return (
    <Controller
      control={control}
      {...controllerProps}
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
