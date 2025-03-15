import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [dropdown, setDropdown] = useState(null);

  const toggleDropdown = (index) => {
    console.log(`Dropdown ${index} toggled`); // Debugging
    setDropdown(dropdown === index ? null : index);
  };

  return (
    <header className="header">
      <div className="logo">Haul Mark Consulting</div>
      <nav className="nav">
        <ul className="nav-list">
          {/* Who Are We */}

          <li
            onMouseEnter={() => toggleDropdown(1)}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <a href="/who-are-we">Who Are We</a>
            {dropdown === 1 && (
              <ul>
                {dropdown === 1 && (
                  <ul className="dropdown-menu">
                    <li>
                      <a href="/who-are-we/our-story">Our Story</a>
                    </li>
                    <li>
                      <a href="/who-are-we/leadership">Leadership</a>
                    </li>
                    <li>
                      <a href="/who-are-we/careers">Careers</a>
                    </li>
                  </ul>
                )}
              </ul>
            )}
          </li>

          {/* Talk to Us */}

          <li
            onMouseEnter={() => toggleDropdown(2)}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <a href="/talk-to-us">Talk to Us</a>
            {dropdown === 2 && (
              <ul>
                {" "}
                {dropdown === 2 && (
                  <ul className="dropdown-menu">
                    <li>
                      <a href="/talk-to-us/contact-us">Contact Us</a>
                    </li>
                    <li>
                      <a href="/talk-to-us/support">Support</a>
                    </li>
                    <li>
                      <a href="/talk-to-us/feedback">Feedback</a>
                    </li>
                  </ul>
                )}
              </ul>
            )}
          </li>

          {/* Follow Us */}

          <li
            onMouseEnter={() => toggleDropdown(3)}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <a href="/follow-us">Follow Us</a>
            {dropdown === 3 && (
              <ul>
                {dropdown === 3 && (
                  <ul className="dropdown-menu">
                    <li>
                      <a href="https://facebook.com">Facebook</a>
                    </li>
                    <li>
                      <a href="https://twitter.com">Twitter</a>
                    </li>
                    <li>
                      <a href="https://linkedin.com">LinkedIn</a>
                    </li>
                  </ul>
                )}
              </ul>
            )}
          </li>

          {/* Legal */}

          <li
            onMouseEnter={() => toggleDropdown(4)}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <a href="/legal">Legal</a>
            {dropdown === 4 && (
              <ul>
                {dropdown === 4 && (
                  <ul className="dropdown-menu">
                    <li>
                      <a href="/legal/privacy-policy">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="/legal/terms-of-use">Terms of Use</a>
                    </li>
                    <li>
                      <a href="/legal/cookies">Cookies</a>
                    </li>
                  </ul>
                )}
              </ul>
            )}
          </li>

          {/* What We Offer */}

          <li
            onMouseEnter={() => toggleDropdown(5)}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <a href="/what-we-offer">What We Offer</a>
            {dropdown === 5 && (
              <ul>
                {dropdown === 5 && (
                  <ul className="dropdown-menu">
                    <li>
                      <a href="/what-we-offer/products">Products</a>
                    </li>
                    <li>
                      <a href="/what-we-offer/services">Services</a>
                    </li>
                    <li>
                      <a href="/what-we-offer/solutions">Solutions</a>
                    </li>
                  </ul>
                )}
              </ul>
            )}
          </li>

          {/* Third Party Offers */}

          <li
            onMouseEnter={() => toggleDropdown(6)}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <a href="/third-party-offers">Third Party Offers</a>
            {dropdown === 6 && (
              <ul>
                {" "}
                {dropdown === 6 && (
                  <ul className="dropdown-menu">
                    <li>
                      <a href="/third-party-offers/partners">Partners</a>
                    </li>
                    <li>
                      <a href="/third-party-offers/collaborations">
                        Collaborations
                      </a>
                    </li>
                    <li>
                      <a href="/third-party-offers/affiliates">Affiliates</a>
                    </li>
                  </ul>
                )}
              </ul>
            )}
          </li>

          {/* Investor Corner */}

          <li
            onMouseEnter={() => toggleDropdown(7)}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <a href="/investor-corner">Investor Corner</a>
            {dropdown === 7 && (
              <ul>
                {dropdown === 7 && (
                  <ul className="dropdown-menu">
                    <li>
                      <a href="/investor-corner/reports">Reports</a>
                    </li>
                    <li>
                      <a href="/investor-corner/investor-relations">
                        Investor Relations
                      </a>
                    </li>
                    <li>
                      <a href="/investor-corner/shareholder-info">
                        Shareholder Info
                      </a>
                    </li>
                  </ul>
                )}
              </ul>
            )}
          </li>

          {/* Knowledge Products */}

          <li
            onMouseEnter={() => toggleDropdown(8)}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <a href="/knowledge-products">Knowledge Products</a>
            {dropdown === 8 && (
              <ul>
                {" "}
                {dropdown === 8 && (
                  <ul className="dropdown-menu">
                    <li>
                      <a href="/knowledge-products/whitepapers">Whitepapers</a>
                    </li>
                    <li>
                      <a href="/knowledge-products/case-studies">
                        Case Studies
                      </a>
                    </li>
                    <li>
                      <a href="/knowledge-products/research">Research</a>
                    </li>
                  </ul>
                )}
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
