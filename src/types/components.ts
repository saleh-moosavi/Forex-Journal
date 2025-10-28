import { ReactNode } from "react";

export interface HeaderButtonsProp {
  title: string;
  icon: ReactNode;
  link: string;
}

export interface ProfileButtonsProp extends Omit<HeaderButtonsProp, "link"> {
  onClick: () => Promise<void> | void;
  children?: ReactNode;
}

export interface CustomOptionProps {
  error?: string;
  title: string;
  value: string;
  options?: string[];
  onChangeHandler: (value: string) => void;
}

export interface CustomInputProps {
  type: string;
  error?: string;
  value: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ImageInputProps {
  value: Blob[];
  error?: string;
  changeHandler: (files: FileList | null) => void;
}
