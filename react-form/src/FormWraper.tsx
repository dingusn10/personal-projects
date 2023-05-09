import { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

export function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <>
      <h2 className="align-center m-0 mb-4 text-lg font-bold">{title}</h2>
      <div className="grid gap-5 justify-content-start grid-cols-2">
        {children}
      </div>
    </>
  );
}
