import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import { getBlogPost } from '../utils/blogLoader';
import '../styles/blog-post.css';

const BlogPost = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getBlogPost(slug).then(data => {
            setPost(data);
            setLoading(false);
        });
    }, [slug]);

    if (loading) return <div className="container section text-center">Loading...</div>;

    if (!post) {
        return (
            <div className="container section text-center">
                <h2>Post not found</h2>
                <Link to="/blog" className="btn btn-primary mt-3">Back to Blog</Link>
            </div>
        );
    }

    return (
        <div className="blog-post-page">
            <div className="container section">
                <Link to="/blog" style={{ textDecoration: 'none', color: 'var(--color-teal)', display: 'inline-block', marginBottom: '1rem' }}>
                    &larr; Back to Blog
                </Link>

                <article style={{ background: 'white', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--color-border)' }}>
                    <h1 className="mb-2" style={{ color: 'var(--color-text-main)' }}>{post.title}</h1>
                    <div className="text-muted mb-4">{post.date}</div>

                    <div className="blog-content">
                        <Markdown>{post.body}</Markdown>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default BlogPost;
