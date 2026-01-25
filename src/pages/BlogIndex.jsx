import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getBlogPosts } from '../utils/blogLoader';

import CTASection from '../components/sections/CTASection';

const BlogIndex = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getBlogPosts().then(setPosts);
    }, []);

    return (
        <div className="blog-page">
            <div className="container section" style={{ paddingBottom: '0' }}>
                <h1 className="text-center mb-3">Workplace Wellness Blog</h1>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {posts.map(post => (
                        <Link to={`/blog/${post.slug}`} key={post.slug} style={{ textDecoration: 'none' }}>
                            <div style={{ background: 'white', border: '1px solid var(--color-border)', borderRadius: '1rem', height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                                {post.image && (
                                    <div style={{ height: '200px', overflow: 'hidden' }}>
                                        <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                )}
                                <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--color-teal)', marginBottom: '0.5rem' }}>{post.date}</div>
                                    <h3 className="mb-1" style={{ color: 'var(--color-text-main)' }}>{post.title}</h3>
                                    <p className="text-muted">{post.excerpt}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                    {posts.length === 0 && <p className="text-center">Loading posts...</p>}
                </div>
            </div>

            <CTASection
                title="Transform Your Workplace Culture"
                description="Discover how on-site massage therapy can boost morale, reduce stress, and create a healthier, more productive team. Let's build a wellness program that works for you."
                buttonText="Get Started"
                buttonLink="/contact"
                customMarginBottom="-12rem"
            />
        </div>
    );
};

export default BlogIndex;
