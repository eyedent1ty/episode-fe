import type { FC } from 'react';

import { Separator as SeparatorShadcn } from './ui/separator';

interface SeparatorProps {
  children?: React.ReactNode | undefined;
  className?: string;
}

const Separator: FC<SeparatorProps> = ({ children, className }) => {
  if (!children) {
    return <SeparatorShadcn />;
  }
  return (
    <div className={`flex flex-row items-center ${className}`}>
      <div className="flex-1 bg-border h-[1px]"></div>
      <div className="px-3 text-sm">{children}</div>
      <div className="flex-1 bg-border h-[1px]"></div>
    </div>
  );
};

export default Separator;
