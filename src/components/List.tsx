import React from "react";
import styles from "../css/List.module.scss";

interface ListProps<T> {
  items: T[];
  keyExtractor: (item: T) => string;
  itemExtractor: (item: T) => string;
  onItemSelected: (item: T) => void;
  selectedItem: string | null;
  listStyle: "list" | "list--horizontal";
}

function List<T>({
  items,
  keyExtractor,
  itemExtractor,
  onItemSelected,
  selectedItem,
  listStyle,
}: ListProps<T>) {
  const activeItemStyle =
    listStyle === "list" ? styles.activeList : styles["activeList--horizontal"];

  const listItemStyle = listStyle === "list" ? "" : styles["list--horizontal"];

  return (
    <ul className={styles.list}>
      {items.map((item: T) => (
        <li
          onClick={() => onItemSelected(item)}
          key={keyExtractor(item)}
          className={
            itemExtractor(item) === selectedItem
              ? activeItemStyle
              : listItemStyle
          }
        >
          {itemExtractor(item)}
        </li>
      ))}
    </ul>
  );
}

export default List;
