export type ButtonType = {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  variant: "primary" | "secondary" | "header" | "tagEdit" | "none";
};

export type CheckBoxType = {
  selected: boolean;
  onChange: () => void;
};
