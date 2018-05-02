import React from 'react'

const TableHead = ({ rows }) => (
  <thead>
    <tr>
      { rows.map((row, index) => <th key={ index }>{ row }</th>) }
    </tr>
  </thead>
);

export default TableHead;
