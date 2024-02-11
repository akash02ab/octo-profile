import { ChangeEvent, useCallback } from "react"
import style from "./style/dropdown.style";

interface PropTypes {
  items: Array<string>,
  value: string,
  onValueChange: (value:string) => void
};

type eventT = ChangeEvent<HTMLSelectElement>;

export default function DropDown({ items, value, onValueChange }: PropTypes) {
  const handleValueChange = useCallback((event: eventT) => {
    const {
      target: { value: selectedValue }
    } = event;

    onValueChange(selectedValue);
  }, [onValueChange]);

  return (
    <select value={value} onChange={handleValueChange} className={style.select}>
      {items.map((item: string, index: number) => (
        <option key={index} value={item} className={style.menu}>{item}</option>
      ))}
    </select>
  )
}