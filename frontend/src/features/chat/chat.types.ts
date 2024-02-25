import dayjs from "dayjs";

export enum UserType {
  Self = "self",
  Other = "other",
}

export type ChatMessageType = {
  userType: UserType;
  userName: string;
  message: string;
  specificDateTime: dayjs.Dayjs;
};

export type ChatUserHeadType = {
  chatUserName: string;
};

export type ChatDateType = {
  dateTime: string;
};

export type MessageFormType = {
  message: string;
};

export type ChatTimeType = {
  time: string;
}
