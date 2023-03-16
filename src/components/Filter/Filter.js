import React from 'react';

const Filter = ({ value, onChange }) => (
  <label>
    Фильтр по словам
    <input type="text" value={value} onChange={onChange} />
  </label>
);

export default Filter;
