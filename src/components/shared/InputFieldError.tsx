import { getInputFieldError, IInputErrorState } from "@/lib/getInputFieldError";
import { FieldDescription } from "../ui/field";

interface InputFieldErrorProps {
  field: string;
  state?: IInputErrorState | null; // ✅ make nullable
}

const InputFieldError = ({ field, state }: InputFieldErrorProps) => {
  // Return null if state is null or undefined
  if (!state) return null;

  const errorMessage = getInputFieldError(field, state);

  if (errorMessage) {
    return <FieldDescription className="text-red-600">{errorMessage}</FieldDescription>;
  }

  return null;
};

export default InputFieldError;
