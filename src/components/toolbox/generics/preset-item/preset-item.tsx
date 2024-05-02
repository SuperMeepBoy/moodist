import { DragDiv } from '@/components/toolbox/generics/drag-div'
import styles from './preset-item.module.css';

interface PresetItemProps {
  name: string;
}

export function PresetItem({ name }: PresetItemProps) {
  return (
    <div className={styles.presetItem}>
      <DragDiv />
      <span>{name}</span>
    </div>
  );
}
