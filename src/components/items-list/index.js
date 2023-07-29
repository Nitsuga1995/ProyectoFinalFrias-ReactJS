import React from 'react'
import Item from '../item-card'
import { CircularProgress } from '@mui/material'

const ItemsList = ({ items, loading }) => {
  return (
    <div style={containerStyle}>
      {Boolean(loading) ? (
        <CircularProgress variant='indeterminate' />
      ) : (
        items.map((item, index) => <Item key={item.title + index} data={item} />)
      )}
    </div>
  );
};

export default ItemsList

const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap:'15px'
}