import { FC, PropsWithChildren } from "react";

const StandardTBody: FC<PropsWithChildren> = ({ children }) => (
  <tbody className="[&>tr]:border-t [&>tr]:border-gray-200 hover:[&>tr]:bg-skin-table-hover [&>tr>td]:px-2 [&>tr>td]:py-3 [&>tr>td]:truncate">
    {children}
  </tbody>
);

export default StandardTBody;