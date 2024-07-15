import React from 'react';
import './Searchbar.css';

function Searchbar() {
  return (
    <div className="do_search">
        <form>
            <input type="text" className="input-search" placeholder="Type to Search..." />
            <button class="btn_search"><i class="fas fa-arrow-right"></i></button>
        </form>
    </div>
  )
}

export default Searchbar;