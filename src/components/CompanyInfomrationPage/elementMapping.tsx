import { Textarea, Input, Select } from "@chakra-ui/react";
import { stateList } from "./SignUpReducer";

const htmlElementMapping = {
  residentialAddress: (props: object) => <Textarea {...props}></Textarea>,
  state: (props: object) => (
    <Select {...props}>
      {stateList.map((s: string) => (
        <option key={`opt${s}`} value={s}>
          {s}
        </option>
      ))}
    </Select>
  ),
};

export const getHtmlElementMapping = (fieldName: string) => {
  return (
    htmlElementMapping[fieldName as keyof typeof htmlElementMapping] ||
    // default
    ((props: object) => <Input {...props} />)
  );
};