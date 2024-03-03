import { CheckBox } from '@/components/atoms/CheckBox/CheckBox.atom';
import React from 'react';

type Props = {
  name: string;
  selected: boolean;
  onChange: () => void;
};

export const GroupUser = ({ name, selected, onChange }: Props) => {
  return (
    <label className="flex items-center gap-4 cursor-pointer">
      <CheckBox selected={selected} onChange={onChange} />
      <span className="text-text text-[1.8rem]">{name}</span>
    </label>
  );
};
