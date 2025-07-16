export interface CommonConfirmModalProps {
  show: boolean;
  title?: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void;
  onCancel: () => void;
  loading?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}