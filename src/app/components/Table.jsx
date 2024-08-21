import React, { useState, useEffect } from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import _ from "lodash";

const Table = ({ usersResponse, columns }) => {
  const [sortUsers, setSortUsers] = useState();
  const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" });

  useEffect(() => {
    setSortUsers(usersResponse);
  }, [usersResponse]);

  const resetSort = () => {
    setSortUsers(usersResponse);
  };

  const handleSort = (item) => {
    setSortUsers(_.orderBy(usersResponse, item.iter, item.order));
    setSortBy(item);
  };

  return (
    <>
      {sortUsers && (
        <>
          <div className="btn" onClick={resetSort}>
            Сброс сортировки
          </div>
          <table className="table">
            <thead>
              <TableHeader
                columns={columns}
                onSort={handleSort}
                sortBy={sortBy}
              />
            </thead>
            <tbody>
              <TableBody usersResponse={sortUsers} columns={columns} />
            </tbody>
          </table>
        </>
      )}
    </>
  );
};
export default Table;
