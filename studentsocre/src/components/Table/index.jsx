import React from "react";
import { Table } from "reactstrap";
import './TableComponent.css';

const TableComponent = ({ data, columns }) => {
  return (
    <Table className="custom-table" striped bordered hover responsive>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.dataKey}> {column.title} </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {columns.map((column) => {
              return <td key={column.dataKey}> {column.formatter ? column.formatter(item) : item[column.dataKey]} </td>
            })}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableComponent;
