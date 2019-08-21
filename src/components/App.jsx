import React from 'react';
import './App.css';

import CommentBox from './CommentBox/CommentBox';
import CommentList from './CommentList/CommentList';

function App() {
    return (
        <div>
            <h1>Thsi is the Jest Baby</h1>
            <CommentBox />
            <CommentList />
        </div>
    )
}

export default App;