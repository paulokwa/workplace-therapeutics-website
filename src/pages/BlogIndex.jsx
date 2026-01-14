import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getBlogPosts } from '../utils/blogLoader';

const BlogIndex = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getBlogPosts().then(setPosts);
    }, []);

    return (
        <div className="blog-page">
            <div className="container section">
                <h1 className="text-center mb-3">Workplace Wellness Blog</h1>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {posts.map(post => (
                        <Link to={`/blog`} key={post.slug} style={{ textDecoration: 'none' }}>
                            <div style={{ padding: '2rem', background: 'white', border: '1px solid var(--color-border)', borderRadius: '1rem', height: '100%' }}>
                                <div style={{ fontSize: '0.9rem', color: 'var(--color-teal)', marginBottom: '0.5rem' }}>{post.date}</div>
                                <h3 className="mb-1" style={{ color: 'var(--color-text-main)' }}>{post.title}</h3>
                                <p className="text-muted">{post.excerpt}</p>
                            </div>
                        </Link>
                    ))}
                    {posts.length === 0 && <p className="text-center">Loading posts...</p>}
                </div>
            </div>
        </div>
    );
};

export default BlogIndex;
