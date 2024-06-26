import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import axios from "axios";

// page-specific styling import
import "./LinkShortener.scss";

const apiKey = import.meta.env.VITE_TINY_URL_API_KEY; // Replace with "YOUR_TINY_URL_API_KEY"

// Component for link result display and copy link button
export function LinkResult({ showComponent, shortLink, loading }) {
  return (
    <>
      {/* If show showComponent is true then load the link result component */}
      {showComponent && (
        <div
          className={`link-result-container ${
            showComponent ? "swing-in-top-fwd" : ""
          }`}
        >
          <div className="input-group">
            <div className="form-control link-result text-center">
              {/* 
            If loading is true then show custom dot loader
            Otherwise, load generated shortLink */}
              {loading ? (
                <div className="custom-loader"></div>
              ) : (
                <a href={shortLink} className="tiny-url" target="_blank">
                  {shortLink}
                </a>
              )}
            </div>
            <CopyToClipboard text={shortLink}>
              <button className="action-button copy-link">Copy Link</button>
            </CopyToClipboard>
          </div>
        </div>
      )}
    </>
  );
}

/**
 * Component for the Link Shortener feature.
 *
 * @returns {JSX.Element} The LinkShortener component.
 */
export default function LinkShortener() {
  // State variables
  const [inputValue, setInputValue] = useState("");
  const [shortLink, setShortLink] = useState("");
  const [showLinkResult, setShowLinkResult] = useState(false);
  const [loading, setLoading] = useState(false);

  /**
   * Fetches the shortened link from the API.
   *
   * @returns {Promise<void>} A Promise that resolves when the API call is complete.
   */
  const fetchLink = async () => {
    try {
      setLoading(true);
      // Axios post method to tinyURL for data on shortened link into 'result' variable
      const result = await axios({
        method: "post",
        url: "https://api.tinyurl.com/create",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        data: {
          url: inputValue,
        },
      });
      const {
        data: {
          data: { tiny_url },
        },
      } = result;
      setShortLink(tiny_url); // For dynamic loading in LinkResult component
    } catch (err) {
      setShortLink("Invalid Link");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Handles the click event of the 'Shorten' button.
   *
   * @returns {Promise<void>} A Promise that resolves when the API call is complete.
   */
  const handleClick = async () => {
    setShortLink(inputValue);
    await fetchLink();
    setShowLinkResult(true);
  };

  return (
    <>
      {/* Container for title text, entry element, and 'Shorten' button*/}
      <div className="position-absolute top-50 start-50 translate-middle col-xxl-6 col-xl-6 col-lg-6 col-md-7 col-sm-10 col-10">
        {/* Title Text */}
        <h1 className="tracking-in-expand text-center text-5xl">
          Link Shortener
        </h1>
        {/* Container for input field and 'Shorten' button */}
        <div className="input-group slide-in-bottom shadow">
          {/* Input field */}
          <input
            type="text"
            className="form-control"
            placeholder="Enter URL to Shorten..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          {/* 'Shorten' button */}
          <button
            onClick={handleClick}
            className="action-button input-group-text btn col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3"
          >
            Shorten
          </button>
        </div>
        {/* Dynamic LinkResult component (initially hidden) */}
        <LinkResult
          showComponent={showLinkResult}
          shortLink={shortLink}
          loading={loading}
        />
      </div>
    </>
  );
}
