import React from 'react'

const TableHead = ({ columns }) => (
  <thead>
    <tr>
      { columns.map((row, index) => <th key={ index }>{ row }</th>) }
    </tr>
  </thead>
);

export default TableHead;
