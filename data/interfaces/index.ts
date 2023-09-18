export interface FormsProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface MessageStatusProps {
  ok?: boolean;
  msg: string;
}

interface InfoProps {
  error: boolean;
}

export type MessageInfoProps = MessageStatusProps & InfoProps;

export interface StatusProps {
  submitted: boolean;
  submitting: boolean;
  info: MessageInfoProps;
}