import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import {
  AddIcon,
  AlertCircleIcon,
  Box,
  Button,
  ButtonIcon,
  ButtonSpinner,
  ButtonText,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
} from '@gluestack-ui/themed';
import React from 'react';

export default function TabOneScreen() {
  const [invalid, setInvalid] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);
  const [readyOnly, setReadyOnly] = React.useState(false);
  const [required, setRequired] = React.useState(false);
  const [focus, setFocus] = React.useState(false);

  const toggleStatus = () => {
    setInvalid(!invalid);
    setDisabled(!disabled);
    setReadyOnly(!readyOnly);
    setRequired(!required);
    setFocus(!focus);
  };

  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <Button
          size="md"
          variant="solid"
          action="primary"
          isDisabled={disabled}
          isFocusVisible={focus}
        >
          <ButtonText>Add </ButtonText>
          <ButtonIcon as={AddIcon} />
        </Button>
      </View>

      <View style={styles.block}>
        <Button isDisabled={disabled} p="$3">
          <ButtonSpinner mr="$1" />
          <ButtonText fontWeight="$medium" fontSize="$sm">
            Please wait...
          </ButtonText>
        </Button>
      </View>

      <View style={styles.block}>
        <Box h="$32" w="$72">
          <FormControl
            size="md"
            isDisabled={disabled}
            isInvalid={invalid}
            isReadOnly={readyOnly}
            isRequired={required}
          >
            <FormControlLabel mb="$1">
              <FormControlLabelText>Password</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField
                type="password"
                defaultValue="12345"
                placeholder="password"
              />
            </Input>
            <FormControlHelper>
              <FormControlHelperText>
                Must be at least 6 characters.
              </FormControlHelperText>
            </FormControlHelper>
            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} />
              <FormControlErrorText>
                At least 6 characters are required.
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
        </Box>
      </View>

      <View style={styles.block}>
        <Button
          size="md"
          variant="solid"
          action="primary"
          onPress={toggleStatus}
        >
          <ButtonText>Toggle </ButtonText>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  block: {
    paddingVertical: 10,
  },
});
