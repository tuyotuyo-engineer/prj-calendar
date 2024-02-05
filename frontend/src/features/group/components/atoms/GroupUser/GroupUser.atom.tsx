import React from 'react';

type Props = {
  name: string;
  selected: boolean;
  onChange?: () => void;
};

export const GroupUser = ({ name, selected, onChange }: Props) => {
  return (
    <div className="flex flex-row items-center  gap-2.5 h-8">
      <input
        type="checkbox"
        style={{ borderWidth: '2px' }}
        className="w-6.5 h-6.5 accent-text cursor-pointer border-2 border-blue-gray-200"
        checked={selected}
        onChange={onChange}
      />
      <div className=" text-text text-3xl">{name}</div>
    </div>
  );
};
