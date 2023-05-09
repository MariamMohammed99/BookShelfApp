export interface ButtonInput {
  className?: {};
  actionName: string;
  onClick: (event: React.FormEvent) => void;
  isSubmit: boolean;
}
