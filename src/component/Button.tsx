import React, { useEffect, useState } from "react";

// ボタンのprops定義。必要なやつはここで管理していいまｓ
export interface ButtonProps {
  label: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  variant?: "black" | "white" | "outlined";
}

// ボタン本体。リンクとしても使用でき、ロード中はドットが増える仕組み
const Button: React.FC<ButtonProps> = (props) => {
  const {
    label,
    iconLeft,
    iconRight,
    isDisabled = false,
    isLoading = false,
    onClick,
    type = "button",
    href,
    target,
    variant = "black",
  } = props;

  const isButtonDisabled = isDisabled || isLoading;
  const Wrapper = href ? "a" : "button"; // hrefがあるときはリンク、それ以外はボタン
  const commonClass = `button ${variant} ${isButtonDisabled ? "disabled" : ""}`;
  const [dots, setDots] = useState(".");

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setDots((prev) => (prev.length < 3 ? prev + "." : ".")); // ドットが3つでリセット
      }, 500);

      return () => clearInterval(interval);
    }
  }, [isLoading]);

  return (
    <Wrapper
      href={href}
      target={href ? target : undefined}
      rel={href && target === "_blank" ? "noopener noreferrer" : undefined} // セキュリティ対応
      onClick={isButtonDisabled ? (e) => e.preventDefault() : onClick}
      type={!href ? type : undefined}
      disabled={!href && isButtonDisabled}
      className={commonClass}
    >
      {isLoading ? (
        <span className="loading-text">{`Loading${dots}`}</span> // ロード中の表示
      ) : (
        <span className="button-content">
          {iconLeft && <span className="icon-left">{iconLeft}</span>}
          {label}
          {iconRight && <span className="icon-right">{iconRight}</span>}
        </span>
      )}
    </Wrapper>
  );
};

export default Button;
