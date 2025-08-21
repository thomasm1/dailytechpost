import React, { useState } from 'react';
import FormGroup from './FormGroup';

const WebLinkForm = ({ onWeblinkAdd, postId }) => {
  const [weblinks, setWeblinks] = useState([
    {
      id: Date.now(),
      title: '',
      url: '',
      host: '',
      profileUrl: '',
      ownerEmail: '',
      web3Link: false
    }
  ]);

  const handleWeblinkChange = (index, field, value) => {
    const updatedWeblinks = weblinks.map((weblink, i) => 
      i === index 
        ? { ...weblink, [field]: value }
        : weblink
    );
    setWeblinks(updatedWeblinks);
  };

  const addWeblink = () => {
    setWeblinks([
      ...weblinks,
      {
        id: Date.now(),
        title: '',
        url: '',
        host: '',
        profileUrl: '',
        ownerEmail: '',
        web3Link: false
      }
    ]);
  };

  const removeWeblink = (index) => {
    if (weblinks.length > 1) {
      setWeblinks(weblinks.filter((_, i) => i !== index));
    }
  };

  const handleSubmitWeblinks = async () => {
    const validWeblinks = weblinks.filter(weblink => 
      weblink.title.trim() !== '' || weblink.url.trim() !== ''
    );

    if (validWeblinks.length === 0) {
      alert('Please enter at least one weblink with title or URL');
      return;
    }

    try {
      for (const weblink of validWeblinks) {
        // Extract host from URL if not provided
        if (weblink.url && !weblink.host) {
          try {
            const urlObj = new URL(weblink.url.startsWith('http') ? weblink.url : `https://${weblink.url}`);
            weblink.host = urlObj.hostname;
          } catch (e) {
            console.warn('Could not extract host from URL:', weblink.url);
          }
        }

        await onWeblinkAdd(postId, weblink);
      }
      
      // Reset form
      setWeblinks([{
        id: Date.now(),
        title: '',
        url: '',
        host: '',
        profileUrl: '',
        ownerEmail: '',
        web3Link: false
      }]);
      
      alert('Weblinks added successfully!');
    } catch (error) {
      console.error('Error adding weblinks:', error);
      alert('Error adding weblinks. Please check console for details.');
    }
  };

  return (
    <div className="weblink-form-container">
      <h6>Citation Weblinks</h6>
      {weblinks.map((weblink, index) => (
        <div key={weblink.id} className="weblink-item border p-3 mb-3">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h6 className="mb-0">Weblink {index + 1}</h6>
            <div>
              {weblinks.length > 1 && (
                <button
                  type="button"
                  className="btn btn-sm btn-outline-danger me-2"
                  onClick={() => removeWeblink(index)}
                >
                  Remove
                </button>
              )}
              {index === weblinks.length - 1 && (
                <button
                  type="button"
                  className="btn btn-sm btn-outline-primary"
                  onClick={addWeblink}
                >
                  + Add Weblink
                </button>
              )}
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor={`title-${index}`}>Title *</label>
                <input
                  type="text"
                  id={`title-${index}`}
                  className="form-control"
                  value={weblink.title}
                  onChange={(e) => handleWeblinkChange(index, 'title', e.target.value)}
                  placeholder="Enter weblink title"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor={`url-${index}`}>URL *</label>
                <input
                  type="url"
                  id={`url-${index}`}
                  className="form-control"
                  value={weblink.url}
                  onChange={(e) => handleWeblinkChange(index, 'url', e.target.value)}
                  placeholder="https://example.com"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor={`host-${index}`}>Host</label>
                <input
                  type="text"
                  id={`host-${index}`}
                  className="form-control"
                  value={weblink.host}
                  onChange={(e) => handleWeblinkChange(index, 'host', e.target.value)}
                  placeholder="example.com (auto-extracted from URL)"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor={`profileUrl-${index}`}>Profile URL</label>
                <input
                  type="url"
                  id={`profileUrl-${index}`}
                  className="form-control"
                  value={weblink.profileUrl}
                  onChange={(e) => handleWeblinkChange(index, 'profileUrl', e.target.value)}
                  placeholder="https://example.com/profile"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor={`ownerEmail-${index}`}>Owner Email</label>
                <input
                  type="email"
                  id={`ownerEmail-${index}`}
                  className="form-control"
                  value={weblink.ownerEmail}
                  onChange={(e) => handleWeblinkChange(index, 'ownerEmail', e.target.value)}
                  placeholder="owner@example.com"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <div className="form-check mt-4">
                  <input
                    type="checkbox"
                    id={`web3Link-${index}`}
                    className="form-check-input"
                    checked={weblink.web3Link}
                    onChange={(e) => handleWeblinkChange(index, 'web3Link', e.target.checked)}
                  />
                  <label htmlFor={`web3Link-${index}`} className="form-check-label">
                    Web3 Link
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="mb-3">
        <button
          type="button"
          className="btn btn-success"
          onClick={handleSubmitWeblinks}
        >
          Save All Weblinks
        </button>
      </div>
    </div>
  );
};

export default WebLinkForm;