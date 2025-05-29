import { useNavigate } from "react-router-dom";
import { BackIcon } from "../../assets/icons";
import classNames from "classnames";

type Props = {
  className?: string;
};

function BackButton({ className }: Props) {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("..");
  };

  return (
    <button
      className={classNames("c-back-btn", className)}
      onClick={handleGoBack}
    >
      <BackIcon />
      <span>VOLTAR</span>
    </button>
  );
}

export default BackButton;
