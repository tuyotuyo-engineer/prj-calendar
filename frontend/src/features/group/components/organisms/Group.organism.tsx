'use client';
import { useEffect, useState } from 'react';

import { GroupUser } from '../atoms/GroupUser/GroupUser.atom';
import { GroupUserType } from '../type';
import { Button } from '@/components/atoms/Button/Button.atom';

type Props = {
  groupName: string;
  initUserList: GroupUserType[];
};

export const Group = ({ groupName, initUserList }: Props) => {
  const [userList, setUserList] = useState<GroupUserType[]>([]);

  useEffect(() => {
    setUserList(initUserList);
  }, [initUserList]);

  // 選択されたユーザーの状態を更新する関数
  const onSelectUser = (selectedUserIndex: number) => {
    const updatedUserList = userList.map((user, index) =>
      // もし現在処理しているユーザーが選択されたユーザーなら
      index === selectedUserIndex
        ? // そのユーザーのselectedプロパティの値を反転
          { ...user, selected: !user.selected }
        : // 選択されたユーザーでなければ、そのままユーザーを返す
          user,
    );
    setUserList(updatedUserList);
  };

  const addGroupUser = () => {
    setUserList([...userList, { name: 'new User', selected: false }]);
  };

  return (
    <div className="section-base flex flex-col gap-8 justify-between relative w-[32rem] rounded-[2.5rem] p-12">
      <p className="text-text text-[2rem]">{groupName}</p>
      <div className="overflow-y-scroll">
        <div className="flex flex-col gap-8 ml-4">
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
      <Button className="text-right" variant="none" onClick={addGroupUser}>
        ＋ Add Group User
      </Button>
    </div>
  );
};
