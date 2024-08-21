import React from "react";

const TableHeader = ({ onSort, columns, sortBy }) => {
  const handleSort = (path) => {
    if (sortBy.iter === path) {
      onSort({ iter: path, order: sortBy.order === "asc" ? "desc" : "asc" });
    } else {
      onSort({ iter: path, order: "desc" });
    }
  };

  return (
    <tr>
      {Object.keys(columns).map((column, nameColumn) => (
        <th key={column}>
          {columns[column].name}
          <div
            className="sortBtn"
            onClick={
              columns[column].path
                ? () => handleSort(columns[column].path)
                : undefined
            }
          >
            Сорт.
          </div>
        </th>
      ))}
    </tr>
  );
};

export default TableHeader;
