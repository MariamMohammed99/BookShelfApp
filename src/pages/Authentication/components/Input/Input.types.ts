export interface InputProps {
  label: string;
  type: string;
  value: string;
  placeHolder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  hasError: boolean;
  name: string;
}
