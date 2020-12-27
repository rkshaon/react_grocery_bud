import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({show:false, msg:'', type:''});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
    if (!name) {
      // display alert
    } else if (name && isEditing) {
      // editing
    } else {
      // show alert
      const newItem = {id: new Date().getTime().toString(), title: name};
      setList([...list, newItem]);
      setName('');
    }
  }

  return(
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input tpe="text" className="grocery" placeholder="e.g. eggs" onChange={(e)=>{setName(e.target.value)}} />
          <button type="submit" className="submit-btn">
            {isEditing ? 'edit' : 'add'}
          </button>
        </div>
      </form>
      {list.length > 0 &&
        <div className="grocery-container">
          <List items={list} />
          <button className="clear-btn">clear all items</button>
        </div>
      }
    </section>
  );
}

export default App;
