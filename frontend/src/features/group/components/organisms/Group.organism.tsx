import { useState } from 'react';

import { AddGroupUser } from '../atoms/AddGroupUser/AddGroupUser.atom';
import { GroupUser } from '../atoms/GroupUser/GroupUser.atom';
import { GroupUserType } from '../type';

type Props = {
  groupName: string;
  initUserList: GroupUserType[];
};

export const Group = ({ groupName, initUserList }: Props) => {
  const [userList, setUserList] = useState<GroupUserType[]>(initUserList);

  const onSelectUser = (selectedUserIndex: number) => {
    const updatedUserList = userList.map((user, index) =>
      index === selectedUserIndex ? { ...user, selected: !user.selected } : user
    );
    setUserList(updatedUserList);
  };

  const addGroupUser = () => {
    console.log('ゆーざーついかー');
  };

  return (
    <div
      className="w-96 h-96 rounded-[4rem] border-4 border-white p-12 relative flex flex-col justify-between"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        boxShadow: '0 0 2px 2px rgba(0, 0, 0, 0.25)',
        width: '320px',
        height: '268px',
      }}
    >
      <div className="text-text text-3xl">{groupName}</div>
      <div className="h-52 overflow-y-auto">
        <div className="flex flex-col gap-[1.7rem] ml-4 h-52">
          {userList.map((user, userIndex) => (
            <GroupUser
              key={userIndex}
              name={user.name}
              selected={user.selected}
              onChange={() => onSelectUser(userIndex)}
            />
          ))}
        </div>
      </div>
      <AddGroupUser onClick={addGroupUser} />
    </div>
  );
};
