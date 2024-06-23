import React from 'react';

function Post(props) {
    return (
        <div>
            <p>{props.author}</p>
            <p>{props.body}</p>
        </div>
    );
}

export default Post;