/* eslint-disable react/prop-types */
import {
  Select,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { forwardRef } from "react";

const SelectCustom = forwardRef(
  (
    {
      label,
      placeholder,
      defaultValue,
      name,
      errorText,
      isReq,
      options,
      onChange,
      iconCurr,
    },
    ref
  ) => {
    return (
      <FormControl
        isInvalid={errorText}
        isRequired={isReq}
        width="100%"
        ref={ref}
        marginBottom={4}>
        <FormLabel>{label}</FormLabel>
        <Select
          icon={errorText ? <InfoOutlineIcon fontSize="16" /> : iconCurr}
          placeholder={placeholder}
          errorBorderColor={errorText && "red.500"}
          backgroundColor="white"
          iconColor={errorText && "red.500"}
          onChange={onChange}
          name={name}
          defaultValue={defaultValue}>
          {options}
        </Select>
        {errorText && <FormErrorMessage mt="2px">{errorText}</FormErrorMessage>}
      </FormControl>
    );
  }
);

export default SelectCustom;
