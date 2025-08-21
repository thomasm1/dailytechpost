import React, { Component } from 'react';

class Keywords extends Component {
    render() {
        return (
            <div className="search-container" style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                padding: '20px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                maxWidth: '500px',
                width: '100%'
            }}>
                <div style={{
                    fontSize: '1.1rem',
                    fontWeight: '500',
                    color: '#212121',
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                    marginBottom: '12px',
                    textAlign: 'center'
                }}>Search Research</div>
                <input
                    onChange={this.props.getKeywords}
                    placeholder="Search categories, titles, or URLs..."
                    style={{
                        width: '100%',
                        padding: '12px 16px',
                        fontSize: '1rem',
                        background: 'rgba(255, 255, 255, 0.9)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        borderRadius: '8px',
                        color: '#333',
                        outline: 'none',
                        transition: 'all 0.2s ease',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                    }}
                    onFocus={(e) => {
                        e.target.style.background = 'rgba(255, 255, 255, 0.95)';
                        e.target.style.borderColor = '#48a0ff';
                        e.target.style.boxShadow = '0 4px 12px rgba(72, 160, 255, 0.2)';
                    }}
                    onBlur={(e) => {
                        e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                        e.target.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
                    }}
                />
            </div>
        );
    }
}

export default Keywords;
