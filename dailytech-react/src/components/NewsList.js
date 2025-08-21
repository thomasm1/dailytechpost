import React from "react";
import NewsAdd from "./NewsAdd";

const NewsList = ({ newsProp }) => {
  if (!newsProp || !Array.isArray(newsProp)) {
    return (
      <div style={{
        textAlign: 'center',
        padding: '40px',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '12px',
        color: '#212121',
        fontSize: '1.1rem',
        textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
      }}>No research categories available.</div>
    );
  }
  
  const newsProbe = newsProp.map((category) => (
    <div key={category.id} style={{
      background: 'rgba(255, 255, 255, 0.15)',
      backdropFilter: 'blur(10px)',
      borderRadius: '15px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      transition: 'all 0.3s ease',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
      marginBottom: '20px',
      overflow: 'hidden'
    }}>
      <div className="news-header" style={{
        background: 'rgba(72, 160, 255, 0.15)',
        padding: '20px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <h5 style={{
          fontSize: '1.4rem',
          fontWeight: '600',
          color: '#212121',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
          margin: '0 0 10px 0'
        }}>{category.name}</h5>
        {category.description && (
          <p style={{
            fontSize: '0.95rem',
            color: 'rgba(33, 33, 33, 0.8)',
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
            margin: 0,
            lineHeight: '1.5'
          }}>{category.description}</p>
        )}
      </div>

      <div className="news-body" style={{
        padding: '20px'
      }}>
        {Array.isArray(category.news) && category.news.length > 0 ? (
          <div className="news-items" style={{
            display: 'grid',
            gap: '15px'
          }}>
            {category.news.map((item) => (
              <div key={item.id} style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '10px',
                padding: '15px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateX(5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.transform = 'translateX(0)';
              }}>
                {item.title && (
                  <h6 style={{
                    fontSize: '1.1rem',
                    fontWeight: '500',
                    color: '#212121',
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
                    margin: '0 0 8px 0',
                    lineHeight: '1.3'
                  }}>{item.title}</h6>
                )}
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#48a0ff',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
                    wordBreak: 'break-all',
                    display: 'inline-block',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                  onMouseLeave={(e) => e.target.style.color = '#48a0ff'}
                >
                   {item.url}
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p style={{
            color: 'rgba(33, 33, 33, 0.6)',
            fontStyle: 'italic',
            textAlign: 'center',
            margin: 0
          }}>No research links available for this category.</p>
        )}
      </div>
      
      <div className="news-footer" style={{
        background: 'rgba(0, 0, 0, 0.1)',
        padding: '15px 20px',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{
          fontSize: '0.9rem',
          color: 'rgba(33, 33, 33, 0.7)',
          marginBottom: '10px',
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
        }}>Add a new research URL</div>
        <NewsAdd categorySelected={category} />
      </div>
    </div>
  ))
  
  return (
    <div className="news-list-container" style={{
      display: 'grid',
      gap: '20px'
    }}>
      {newsProbe}
    </div>
  );
};

export default NewsList;
