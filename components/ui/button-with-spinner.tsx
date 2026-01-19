"use client";

import { Button } from "./button";
import { Spinner } from "./spinner";

interface Props extends React.ComponentPropsWithoutRef<typeof Button> {
  children: React.ReactNode;
  isLoading: boolean;
  spinnerClassName?: string;
  loadingText?: string;
}

export const ButtonWithSpinner = ({
  children,
  isLoading,
  spinnerClassName = "",
  loadingText,
  ...props
}: Props) => {
  return (
    <Button {...props} disabled={isLoading || props.disabled}>
      {isLoading ? (
        <>
          <Spinner className={spinnerClassName} />
          {loadingText && loadingText}
        </>
      ) : (
        children
      )}
    </Button>
  );
};
