import dayjs from "dayjs";

export enum UserType {
  Self = "self",
  Other = "other",
}

export type ChatMessageProps = {
  userType: UserType;
  userName: string;
  message: string;
  specificDateTime: dayjs.Dayjs;
};

export type ChatUserHeadProps = {
  chatUserName: string;
};

export type ChatDateProps = {
  dateTime: string;
};

export type MessageFormProps = {
  message: string;
};

export type ChatTimeProps = {
  time: string;
}