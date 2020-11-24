import React from 'react';
import Link from "next/link"

const Posts = () => {
    return (
        <div>
            <h1>Posts page</h1>
            <Link href="/">
                <a><h1>Back To Homepage</h1></a>
            </Link>
        </div>
    );
}
 
 
export default Posts;