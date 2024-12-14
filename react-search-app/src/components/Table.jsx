import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
// import {rows, columns} from '../store/Data';
import { row } from '../store/Data';
import { columns } from '../store/Data';
import { useState } from 'react';
import './Table.css';

const paginationModel = { page: 0, pageSize: 5 };

export default function Table() {
  const [search, setSearch] = useState('');
  const [filteredRows, setFilteredRows] = useState(row);
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    console.log(value);
    setSearch(value);
    const filtered = row.filter((r) => {
      return r.firstName?.toLowerCase().includes(value) ||
        r.lastName?.toLowerCase().includes(value) ||
        String(r.age).includes(value) ||
        String(r.id).includes(value)
    });
    setFilteredRows(filtered);
  }
  return (
    <div className='table-container'>
      <Paper sx={{ height: 400, width: '100%' }}>
        <div>
          <input type="text"
            placeholder="Search"
            value={search}
            // onChange={(e)=>setSearch(e.target.value)}
            onChange={handleSearch}
            className='search-input' />
          <button 
            className='search-button'
            onClick={handleSearch}>
            Search
          </button>
        </div>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          value={search}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    </div>
  );
}
