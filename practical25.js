import React, { useState } from 'react';

function SearchList() {
  const [search,setSearch] = useState('');
  const items = ['Apple','Banana','Orange','Mango'];
  return (
    <div>
      <input placeholder="Search" onChange={e=>setSearch(e.target.value)} />
      <ul>{items.filter(i=>i.toLowerCase().includes(search.toLowerCase())).map(i=><li key={i}>{i}</li>)}</ul>
    </div>
  );
}

export default SearchList;
