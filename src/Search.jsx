import React from 'react';
import { Users } from "./User"
import "./App.css";
import { useState } from "react";
import Table from "./Table"

const Search = () => {
  const [query, setQuery] = useState("");

  const keys = ["first_name", "last_name", "email"]
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query)));

  };
  return (

    <div className="app">

      <input type="text" placeholder="Search..." className="search" onChange={e => setQuery(e.target.value.toLowerCase())} />

      <Table data={search(Users)} />
      {/* 
      <ul className="list">




        {Users.filter((user)=>user.first_name.toLowerCase().includes(query)).map((user) => (

          <li key={user.id} className="listItem">  {user.first_name} </li>

        ))};
      </ul> */}

    </div>
  )
}

export default Search