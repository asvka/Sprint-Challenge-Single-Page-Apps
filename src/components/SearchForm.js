import React, { useState } from 'react';

export default function SearchForm(props) {
 const [res, setRes] = useState();
 const handleChanges = e => {
   setRes(e.target.value);
 }
 const submitHandler = e => {
   e.preventDefault();

 const searchRes = props.char.filter(char =>{
   return char.name.toLowerCase().indexOf(res.toLowerCase()) !== -1;
 });
 console.log(searchRes);
 props.search(searchRes);
 }
  return (
    <section className='search-form'>
     <form onSubmit={submitHandler}>
       <input className="searchBar"
       onChange={handleChanges}
       type='text'
       name='name'
       id='id'
       placeholder='Wubba lubba dub dub?'
      />
     </form>
    </section>
  );
}
