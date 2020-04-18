import React from 'react';


const Logout = ({ onLogout  }) => {
    return (
        <button className="btn login" onClick={() => onLogout ()}>Login</button>
    );
}

export default Logout;
