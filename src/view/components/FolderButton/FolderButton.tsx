import type { ButtonHTMLAttributes } from "react";

type FolderButtonProps = {
  color: "blue" | "purple" | "violet";
};

function FolderButton({
  children,
  color,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & FolderButtonProps) {
  return (
    <button className={`c-folder-button c-folder-button--${color}`} {...props}>
      <div>{children}</div>
    </button>
  );
}

export default FolderButton;
