[Storybook](https://vnguyen94.github.io/react-hook-form-paste) | [Chromatic](https://www.chromatic.com/builds?appId=5f34d4bd7c13f1002276b19d) | [CHANGELOG](https://github.com/vnguyen94/react-hook-form-paste/releases) | [npm](https://www.npmjs.com/package/react-hook-form-paste)

# react-hook-form-paste

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f9176f69724e4126bfc1c661883a4570)](https://app.codacy.com/manual/vnguyen/react-hook-form-paste)
[![Known Vulnerabilities](https://snyk.io/test/github/vnguyen94/react-hook-form-paste/badge.svg?targetFile=package.json)](https://snyk.io/test/github/vnguyen94/react-hook-form-paste?targetFile=package.json)
[![codecov](https://codecov.io/gh/vnguyen94/react-hook-form-paste/branch/master/graph/badge.svg)](https://codecov.io/gh/vnguyen94/react-hook-form-paste)

Super-charged [Paste](https://paste.twilio.design) components using [react-hook-form](https://github.com/react-hook-form/react-hook-form) to handle form state.

This library lightly wraps Paste components with required fields `name: string` and `registerRef: React.Ref` props that connect them to a react-hook-form `useForm` hook. This will link the Paste component to the form library, allowing you to reap the benefits of typed, performant forms with minimal effort.

## Getting started

```bash
yarn install react-hook-form-paste
```

## Usage

```tsx
import { Theme } from '@twilio-paste/core/theme';
import { Button } from '@twilio-paste/core/button';
import { Label } from '@twilio-paste/core/label';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from 'react-hook-form-paste';

export default {
  title: 'Input',
};

interface ITestProps {
  emailAddress: string;
}

export const Basic: React.FC = () => {
  const { register, handleSubmit } = useForm();

  return (
    <Theme.Provider theme="default">
      <form
        onSubmit={handleSubmit((payload) => {
          window.alert(JSON.stringify(payload));
        })}
      >
        <Label htmlFor="emailAddress">Email Address</Label>
        <Input<ITestProps>
          id="emailAddress"
          name="emailAddress"
          type="email"
          placeholder="example@twilio.com"
          registerRef={register}
        />

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </Theme.Provider>
  );
};
```

## Differences between react-hook-form-paste and Paste

react-hook-form-paste also provides TypeScript developers the option of typing their form inputs. Passing in an interface into a form input e.g. `<Input<ITestProps>>` will constrain the `name` field to only keys of that interface.

## Core Components

|                    | Props                                                                                                                       |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| Checkbox           | { name, registerRef } & [CheckboxProps](https://paste.twilio.design/components/checkbox#checkbox-props)                     |
| CheckboxDisclaimer | { name, registerRef } & [CheckboxDisclaimerProps](https://paste.twilio.design/components/checkbox#checkboxdisclaimer-props) |
| CheckboxGroup      | [CheckboxGroupProps](https://paste.twilio.design/components/checkbox#checkboxgroup-props)                                   |
| Input              | { name, registerRef } & [InputProps](https://paste.twilio.design/components/input#input-props)                              |
| Option             | [OptionProps](https://paste.twilio.design/components/select#option-props)                                                   |
| OptionGroup        | [OptionGroupProps](https://paste.twilio.design/components/select#optiongroup-props)                                         |
| Radio              | { name, registerRef } & [RadioProps](https://paste.twilio.design/components/radio-group#radio-props)                        |
| RadioGroup         | { name, control } & [RadioGroupProps](https://paste.twilio.design/components/radio-group#radiogroup-props)                  |
| Select             | { name, registerRef } & [SelectProps](https://paste.twilio.design/components/select#select-props)                           |
| TextArea           | { name, control } & [TextAreaProps](https://paste.twilio.design/components/textarea#textarea-props)                         |

## Using `registerRef` over `ref`

Currently, while using TypeScript there is incompatibility with `React.forwardRef` in that it does not allow the components to be generic with a forwarded ref. Because of this, we have to pass a ref into a HoC under a different name than `ref`. This lets us pass refs and still be able to type the `name` fields.

https://github.com/typescript-cheatsheets/react/issues/106#issuecomment-483342960
https://reactjs.org/docs/refs-and-the-dom.html#exposing-dom-refs-to-parent-components

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Acknowledgements

Heavily inspired by [formik-antd](https://github.com/jannikbuschke/formik-antd/).

## License

[MIT](https://choosealicense.com/licenses/mit/)
