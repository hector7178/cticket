import React, { FC } from "react";
import { classNames } from "@/helpers";
import { CircularProgress } from "@mui/material";
import { CurrentColor } from '@/helpers';
export type props = {
  className?: string;
  color?:
    | "primary"
    | "black"
    | "white"
    | "neutral"
    | "danger"
    | "success"
    | "none";
  weight?: "solid" | "outline" | "ghost" | "inline";
  shape?: "pill" | "semibrick" | "brick";
  size?: "small" | "medium" | "large" | "relative";
  align?: "left" | "center" | "right";
  iconLeft?: any;
  iconRight?: any;
  loading?: boolean;
  fullWidth?: boolean;
  spiner?: "circle" | "ellipsis";
  children?: any;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button: FC<props> = ({
  className,
  color = "primary",
  weight = "solid",
  shape = "semibrick",
  size = "medium",
  iconLeft,
  iconRight,
  loading = false,
  align = "center",
  fullWidth = false,
  spiner = "circle",
  type = "button",
  children,
  ...props
}) => {
  const currentColor = CurrentColor();
  const colorStyle = classNames(
    color == "primary"
      ? classNames(
          weight == "solid"
          ? `btn-primary bg-${currentColor}`
            : weight == "outline"
            ? "btn-primary-outline"
            : weight == "ghost"
            ? "btn-primary-ghost"
            : weight == "inline" &&
              "text-black rounded-none"
        )
      : color == "black"
      ? classNames(
          weight == "solid"
            ? "btn-black"
            : weight == "outline"
            ? "btn-black-outline"
            : weight == "ghost"
            ? "btn-black-ghost"
            : weight == "inline" && "text-black rounded-none"
        )
      : color == "neutral"
      ? classNames(
          weight == "solid"
            ? "btn-neutral"
            : weight == "outline"
            ? "btn-neutral-outline"
            : weight == "ghost"
            ? "btn-neutral-ghost"
            : weight == "inline" && "text-gray-500 dark:text-white rounded-none"
        )
      : color == "danger"
      ? classNames(
          weight == "solid"
            ? "btn-danger"
            : weight == "outline"
            ? "btn-danger-outline"
            : weight == "ghost"
            ? "btn-danger-ghost"
            : "text-red-500"
        )
      : color == "success"
      ? classNames(
          weight == "solid"
            ? "btn-success"
            : weight == "outline"
            ? "btn-success-outline"
            : weight == "ghost"
            ? "btn-success-ghost"
            : weight == "inline" && "text-green-500 rounded-none"
        )
      : color == "white" &&
        classNames(
          weight == "solid"
            ? "btn-white"
            : weight == "outline"
            ? "btn-white-outline"
            : weight == "ghost"
            ? "btn-white-ghost"
            : weight == "inline" && "text-white-500 rounded-none"
        )
  );
  const sizeStyle = classNames(
    size == "small"
      ? "text-xs"
      : size == "medium"
      ? "text-sm"
      : size == "large" && "text-sm sm:text-base"
  );

  const shapeStyle = classNames(
    shape == "pill"
      ? "rounded-full before:rounded-full"
      : shape == "semibrick" && "rounded-md before:rounded-md"
  );
  const alignStyle = classNames(
    align == "left"
      ? "justify-start text-left"
      : align == "center"
      ? "justify-center text-center"
      : "justify-end text-right"
  );

  const paddingStyle = classNames(
    !children && iconLeft
      ? "p-3"
      : weight == "inline"
      ? "p-0"
      : size == "small"
      ? "py-2 px-3"
      : (size == "medium" || size == "large") && "py-3 px-5"
  );

  const style = classNames(
    "inline-flex items-center whitespace-nowrap font-semibold space-x-2 transition duration-300  disabled:cursor-not-allowed ",
    colorStyle,
    sizeStyle,
    shapeStyle,
    alignStyle,
    paddingStyle,
    fullWidth ? "w-full" : "max-w-fit",
    className
  );
  return (
    <button
      className={style}
      type={type}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <CircularProgress
          color="inherit"
          size={20}
        />
      ) : (
        <>
          {iconLeft && iconLeft}
          {children && <p>{children}</p>}
          {iconRight && (
            <>
              <div className="flex-1"></div>
              {iconRight}
            </>
          )}
        </>
      )}
    </button>
  );
};

export default Button;
