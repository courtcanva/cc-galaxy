import {
  InputGroup,
  InputRightAddon,
  Textarea,
  Input,
  Select,
  FormHelperText,
  TextareaProps,
  InputProps,
  SelectProps,
} from "@chakra-ui/react";
import { stateList, docTypeList } from "./SignUpLogic";

const htmlElementMapping = {
  residentialAddress: (props: TextareaProps) => <Textarea {...props}></Textarea>,
  state: (props: SelectProps) => (
    <Select {...props}>
      {stateList.map((s: string) => (
        <option key={`opt${s}`} value={s}>
          {s}
        </option>
      ))}
    </Select>
  ),

  docType: (props: SelectProps) => (
    <>
      <Select {...props}>
        {docTypeList.map((s: string) => (
          <option key={`opt${s}`} value={s}>
            {s}
          </option>
        ))}
      </Select>
      <FormHelperText>Currently supports passport or driver&#39;s license</FormHelperText>
    </>
  ),
  fileUpload: (props: InputProps) => (
    <>
      <InputGroup size={props.size} key={props.key}>
        <Input placeholder={props.placeholder} />
        <InputRightAddon>...</InputRightAddon>
      </InputGroup>
      <FormHelperText>File only accecpt pdf/image within 10 MB</FormHelperText>
    </>
  ),
};

export const getHtmlElementMapping = (fieldName: string) => {
  return (
    htmlElementMapping[fieldName as keyof typeof htmlElementMapping] ||
    // default
    ((props: InputProps) => <Input {...props} />)
  );
};
