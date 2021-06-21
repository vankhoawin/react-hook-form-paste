[Storybook](https://vnguyen94.github.io/react-hook-form-paste/) | [Chromatic](https://www.chromatic.com/builds?appId=5ff88e281b679c0021a7a5ff) | [CHANGELOG](https://github.com/vnguyen94/react-hook-form-paste/releases) | [npm](https://www.npmjs.com/package/react-hook-form-paste)

# react-hook-form-paste

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/7e461392499a41ac9002241083d0fa66)](https://www.codacy.com/gh/vnguyen94/react-hook-form-paste/dashboard)
[![Known Vulnerabilities](https://snyk.io/test/github/vnguyen94/react-hook-form-paste/badge.svg?targetFile=package.json)](https://snyk.io/test/github/vnguyen94/react-hook-form-paste?targetFile=package.json)
[![codecov](https://codecov.io/gh/vnguyen94/react-hook-form-paste/branch/main/graph/badge.svg?token=KNvD6Yw3Fs)](https://codecov.io/gh/vnguyen94/react-hook-form-paste)

Super-charged [Paste](https://paste.twilio.design) components using [react-hook-form](https://github.com/react-hook-form/react-hook-form) to handle form state.

This library lightly wraps Paste components to seamlessly integrate with `react-hook-form`, and handle abstraction wherever needed.

## Getting started

```bash
yarn install react-hook-form-paste
```

## Usage

```tsx
import { Alert } from '@twilio-paste/core/alert';
import { Box } from '@twilio-paste/core/box';
import { Button } from '@twilio-paste/core/button';
import { Label } from '@twilio-paste/core/label';
import { Stack } from '@twilio-paste/core/stack';
import { useForm } from 'react-hook-form';
import { Input } from 'react-hook-form-paste';

interface IFormProps {
  emailAddress: string;
}

export const Basic: React.FC = () => {
  const { register, handleSubmit } = useForm<IFormProps>();

  return (
    <form
      onSubmit={handleSubmit((payload) => {
        window.alert(JSON.stringify(payload));
      })}
    >
      <Stack orientation="vertical" spacing="space80">
        <Box>
          <Label htmlFor="emailAddress">Email Address</Label>
          <Input {...register('emailAddress')} type="email" placeholder="example@twilio.com" />
        </Box>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  );
};
```

## Differences between react-hook-form-paste and Paste

With the advent of `react-hook-form` v7, `react-hook-form-paste` **is mostly unnecessary**; form type-safety is mostly ensured via the new `{...register('formField')}` pattern which natively work with Paste components. However, there are still some Paste components with more complex state such as `OptionGroup`. For these components, static form-typing can be enforced by passing in an interface into the generic component e.g. `<OptionGroup<IFieldProps>>`. This will constrain the `name` field to only keys of that interface.

## Core Components

| Component          | Props                                                                                                              |
| ------------------ | ------------------------------------------------------------------------------------------------------------------ |
| Checkbox           | [CheckboxProps](https://paste.twilio.design/components/checkbox#checkbox-props)                                    |
| CheckboxDisclaimer | [CheckboxDisclaimerProps](https://paste.twilio.design/components/checkbox#checkboxdisclaimer-props)                |
| CheckboxGroup      | { name } & [CheckboxGroupProps](https://paste.twilio.design/components/checkbox#checkboxgroup-props)               |
| Input              | [InputProps](https://paste.twilio.design/components/input#input-props)                                             |
| Option             | [OptionProps](https://paste.twilio.design/components/select#option-props)                                          |
| OptionGroup        | [OptionGroupProps](https://paste.twilio.design/components/select#optiongroup-props)                                |
| Radio              | [RadioProps](https://paste.twilio.design/components/radio-group#radio-props)                                       |
| RadioGroup         | { name, controllerProps } & [RadioGroupProps](https://paste.twilio.design/components/radio-group#radiogroup-props) |
| Select             | [SelectProps](https://paste.twilio.design/components/select#select-props)                                          |
| TextArea           | { name, controllerProps } & [TextAreaProps](https://paste.twilio.design/components/textarea#textarea-props)        |

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Acknowledgements

Heavily inspired by [formik-antd](https://github.com/jannikbuschke/formik-antd/).

## License

[MIT](https://choosealicense.com/licenses/mit/)
