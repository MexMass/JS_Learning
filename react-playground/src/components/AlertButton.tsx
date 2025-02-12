import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
  onClick: () => void;
}

const AlertButton = ({ children, color = 'primary', onClick }: Props) => {
  return (
    <>
      <div id="liveAlertPlaceholder"></div>
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default AlertButton;
