import { UseControllerProps, useController, FieldValues } from 'react-hook-form';
import { RadioGroup as $RadioGroup, RadioGroupProps as $RadioGroupProps } from '@twilio-paste/core/radio-group';

export function RadioGroup<TFieldValues extends FieldValues>(
  props: Omit<$RadioGroupProps, 'name' | 'onChange'> &
    Pick<Partial<$RadioGroupProps>, 'onChange'> & {
      controllerProps: UseControllerProps<TFieldValues>;
    },
): React.ReactElement {
  const { controllerProps, ...rest } = props;
  const { field: radioGroupProps } = useController(controllerProps);

  return (
    // @ts-ignore
    <$RadioGroup
      {...radioGroupProps}
      {...rest}
      onChange={(checked) => {
        radioGroupProps.onChange(checked);
        rest.onChange?.(checked);
      }}
      onBlur={(event) => {
        radioGroupProps.onBlur();
        rest.onBlur?.(event);
      }}
    />
  );
}

RadioGroup.displayName = 'RadioGroup';
