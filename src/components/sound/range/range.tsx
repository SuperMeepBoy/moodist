import { useState } from 'react';
import { useSoundStore } from '@/stores/sound';

import styles from './range.module.css';

interface RangeProps {
  id: string;
  label: string;
}

export function Range({ id, label }: RangeProps) {
  const setVolume = useSoundStore(state => state.setVolume);
  const volume = useSoundStore(state => state.sounds[id].volume);
  const isSelected = useSoundStore(state => state.sounds[id].isSelected);
  const locked = useSoundStore(state => state.locked);
  const [showValueLabel, setShowValueLabel] = useState(false);
  const [currentValue, setCurrentValue] = useState(volume * 100);

  const handleClick = async () => {
    setShowValueLabel(true);
  };

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setCurrentValue(newValue);
    if (!locked && isSelected) {
      setVolume(id, newValue / 100);
    }
  };

  return (
    <>
      <label
        className={styles.rangeLabel}
        htmlFor={`${id}-range`}
      >{`${label} sound volume`}</label>
      {showValueLabel && (
        <output className={styles.valueLabel}>{currentValue}</output>
      )}
      <input
        autoComplete="off"
        className={styles.range}
        disabled={!isSelected}
        id={`${id}-range`}
        max={100}
        min={0}
        type="range"
        value={volume * 100}
        onChange={handleValueChange}
        onClick={e => {
          e.stopPropagation();
          handleClick();
        }}
      />
    </>
  );
}
