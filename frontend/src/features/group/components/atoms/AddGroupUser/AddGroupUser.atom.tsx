import React from 'react';

type Props = {
  title?: string;
  onClick?: () => void;
};

export const AddGroupUser = ({
  title = '＋ Add Group User',
  onClick,
}: Props) => {
  return (
    <div
      className="text-text text-3xl text-right cursor-pointer"
      onClick={onClick}
    >
      {title}
    </div>
  );
};
