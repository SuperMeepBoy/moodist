import { IoCompassSharp } from 'react-icons/io5/index';

import { Item } from '../item';

interface VoyageProps {
  open: () => void;
}

export function Voyage({ open }: VoyageProps) {
  return (
    <Item
      icon={<IoCompassSharp />}
      label="Voyage"
      shortcut="Shift + V"
      onClick={open}
    />
  );
}
