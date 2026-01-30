import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getBlogPosts } from '../utils/blogLoader';
import { Calendar } from 'lucide-react';
import './BlogIndex.css';

import CTASection from '../components/sections/CTASection';
import useScrollReveal from '../hooks/useScrollReveal';

const BlogIndex = () => {
    useScrollReveal();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getBlogPosts().then(setPosts);
    }, []);

    return (
        <div className="blog-page">
            <div className="container section pb-cta-overlap">
                <h1 className="text-center mb-3 mobile-header-spacing slide-up">Workplace Wellness Blog</h1>
                <p className="text-center text-muted slide-up delay-100" style={{ maxWidth: '600px', margin: '0 auto 3rem' }}>
                    Discover insights, tips, and ideas that reduce stress and elevate your workplace culture.
                </p>
                <div className="blog-grid">
                    {posts.map(post => (
                        <Link to={`/blog/${post.slug}`} key={post.slug} className="blog-card slide-up">
                            <div className="blog-card-inner">
                                {post.image && (
                                    <div className="blog-image-container">
                                        <img src={post.image} alt={post.title} className="blog-image" />
                                    </div>
                                )}
                                <div className="blog-content">
                                    <div className="blog-date">
                                        <Calendar size={16} />
                                        <span>{post.date}</span>
                                    </div>
                                    <h3 className="blog-title">{post.title}</h3>
                                    <p className="blog-excerpt">{post.excerpt}</p>
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
                centeredOverlap={true}
            />
        </div>
    );
};

export default BlogIndex;
