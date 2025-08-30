import React, { useEffect, useState } from 'react';
import { useLocation, useOutletContext, useParams } from 'react-router-dom';
import postsService from '../services/postsService.js';
import { styles } from '../config';

const PostItem = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const location = useLocation();
    const pobj = useOutletContext();

    useEffect(() => {
        const fetchPost = async () => { 
            const response = await postsService.getPost(id);
            console.log("postsService post:", response);
            setPost(response);
        };

        fetchPost();
    }, [id]);

    if (!post) {
        return (
            <div className="post-loading" style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'transparent'
            }}>
                <div style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '15px',
                    padding: '20px 40px',
                    color: 'white',
                    fontSize: '1.1rem',
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                }}>
                    Loading post...
                </div>
            </div>
        );
    }

    return (
        <div className="post-detail-page" style={{
            minHeight: '100vh',
            padding: '40px 20px',
            background: 'transparent'
        }}>
            <div className="post-detail-container" style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                maxWidth: '900px',
                width: '90%',
                margin: '0 auto',
                position: 'relative',
                overflow: 'hidden',
                zIndex: 10
            }}>
                {/* Animated hexagons */}
                <div style={{
                    content: '',
                    position: 'absolute',
                    top: '-20px',
                    right: '-20px',
                    width: '100px',
                    height: '100px',
                    backgroundImage: 'url(/the_time_machine.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.15,
                    clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)',
                    animation: 'hexRotate 45s linear infinite',
  willChange: 'transform',
  transform: 'translateZ(0)',
                    zIndex: 1,
                    pointerEvents: 'none'
                }} />
                <div style={{
                    content: '',
                    position: 'absolute',
                    bottom: '-15px',
                    left: '-15px',
                    width: '80px',
                    height: '80px',
                    backgroundImage: 'url(/the_time_machine.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.15,
                    clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)',
                    animation: 'hexRotateReverse 60s linear infinite',
  willChange: 'transform',
  transform: 'translateZ(0)',
                    zIndex: 1,
                    pointerEvents: 'none'
                }} />
                
                <div className="post-detail-inner" style={{
                    background: 'rgba(0, 0, 0, 0.1)',
                    borderRadius: '15px',
                    padding: '30px',
                    position: 'relative',
                    zIndex: 2
                }}>
                    <div className="post-header" style={{
                        marginBottom: '25px',
                        textAlign: 'center'
                    }}>
                        {post.cat3 && (
                            <h5 className="detail-label" style={{
                                color: '#48a0ff',
                                fontSize: '1.1rem',
                                fontWeight: '500',
                                marginBottom: '15px',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                            }}>{post.cat3}</h5> 
                        )}
                        <h1 className="post-title" style={{
                            fontSize: '2.2rem',
                            fontWeight: '700',
                            color: '#ffffff',
                            textShadow: '0 3px 6px rgba(0, 0, 0, 0.4)',
                            marginBottom: '20px',
                            lineHeight: '1.3'
                        }}>{post.title}</h1>
                        <div className="post-meta" style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '20px',
                            flexWrap: 'wrap',
                            fontSize: '0.95rem',
                            color: 'rgba(255, 255, 255, 0.8)',
                            textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                        }}>
                            <span className="post-author">By: {post.author}</span>
                            <span className="post-date">Date: {new Date(post.date).toLocaleDateString()}</span>
                        </div>
                    </div>
                    
                    <div className="post-body" style={{
                        marginBottom: '30px'
                    }}>
                        <div className="post-content" style={{
                            fontSize: '1.1rem',
                            lineHeight: '1.8',
                            color: 'rgba(255, 255, 255, 0.95)',
                            textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
                            background: 'rgba(255, 255, 255, 0.05)',
                            padding: '25px',
                            borderRadius: '12px',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            whiteSpace: 'pre-wrap'
                        }}>
                            {post.post}
                        </div>
                        
                        {post.blogcite && (
                            <div className="detail-item" style={{
                                marginTop: '20px',
                                background: 'rgba(72, 160, 255, 0.1)',
                                padding: '20px',
                                borderRadius: '12px',
                                border: '1px solid rgba(72, 160, 255, 0.2)'
                            }}>
                                <div className="detail-label" style={{
                                    fontSize: '0.9rem',
                                    fontWeight: '600',
                                    color: '#48a0ff',
                                    marginBottom: '8px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }}>Citations</div>
                                <div className="detail-value" style={{
                                    color: 'rgba(255, 255, 255, 0.9)',
                                    whiteSpace: 'pre-wrap'
                                }}>
                                    {post.blogcite}
                                </div>
                            </div>
                        )}
                    </div>
                    
                    {/* Additional post details in a grid */}
                    <div className="post-details" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '15px',
                        marginTop: '30px'
                    }}>
                        {post.did && (
                            <div className="detail-item" style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                borderRadius: '8px',
                                padding: '15px',
                                border: '1px solid rgba(255, 255, 255, 0.1)'
                            }}>
                                <span className="detail-label" style={{
                                    fontWeight: '600',
                                    color: '#48a0ff',
                                    fontSize: '0.85rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }}>ID:</span>
                                <div style={{
                                    color: 'rgba(255, 255, 255, 0.8)',
                                    marginTop: '5px'
                                }}>{post.did}</div>
                            </div>
                        )}
                        {post.state && (
                            <div className="detail-item" style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                borderRadius: '8px',
                                padding: '15px',
                                border: '1px solid rgba(255, 255, 255, 0.1)'
                            }}>
                                <span className="detail-label" style={{
                                    fontWeight: '600',
                                    color: '#48a0ff',
                                    fontSize: '0.85rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }}>Status:</span>
                                <div style={{
                                    color: 'rgba(255, 255, 255, 0.8)',
                                    marginTop: '5px'
                                }}>{post.state}</div>
                            </div>
                        )}
                        {post.email && (
                            <div className="detail-item" style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                borderRadius: '8px',
                                padding: '15px',
                                border: '1px solid rgba(255, 255, 255, 0.1)'
                            }}>
                                <span className="detail-label" style={{
                                    fontWeight: '600',
                                    color: '#48a0ff',
                                    fontSize: '0.85rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }}>Contact:</span>
                                <div style={{
                                    color: 'rgba(255, 255, 255, 0.8)',
                                    marginTop: '5px',
                                    wordBreak: 'break-all'
                                }}>{post.email}</div>
                            </div>
                        )}
                        {post.categoryId && (
                            <div className="detail-item" style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                borderRadius: '8px',
                                padding: '15px',
                                border: '1px solid rgba(255, 255, 255, 0.1)'
                            }}>
                                <span className="detail-label" style={{
                                    fontWeight: '600',
                                    color: '#48a0ff',
                                    fontSize: '0.85rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }}>Category ID:</span>
                                <div style={{
                                    color: 'rgba(255, 255, 255, 0.8)',
                                    marginTop: '5px'
                                }}>{post.categoryId}</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostItem;
