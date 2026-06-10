"use client"

import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Switch = () => {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const startDark = saved === "dark" || (!saved && prefersDark);
    if (startDark) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark, mounted]);

  const handleToggle = () => setIsDark((s) => !s);

  if (!mounted) return null;

  return (
    <StyledWrapper>
      <div className="switch">
        <input
          className="switch-check"
          id="switch1"
          type="checkbox"
          checked={isDark}
          onChange={handleToggle}
          aria-label="Toggle theme"
        />
        <label className="switch-label" htmlFor="switch1">
          Check
          <span />
        </label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .switch {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    border: 4px solid rgba(58, 58, 58, 0.1);
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.5) inset;
    height: 48px;
    margin: 2px;
    position: relative;
    width: 120px;
    display: inline-block;
    user-select: none;
  }

  .switch-check {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    margin: 0;
    cursor: pointer;
    z-index: 20;
  }

  .switch-label {
    cursor: pointer;
    display: block;
    height: 42px;
    text-indent: -9999px;
    width: 115px;
    user-select: none;
    position: relative;
  }

  /* Red dot (left indicator — OFF state) */
  .switch-label:before {
    background: -webkit-radial-gradient(
      45%,
      circle,
      rgb(255, 58, 58) 0%,
      rgb(255, 113, 113) 100%
    );
    border-radius: 10px;
    border: 1px solid #742323;
    box-shadow: 0 2px 5px rgba(255, 67, 48, 0.6),
      0 0 5px rgba(255, 159, 109, 0.5) inset;
    content: "";
    display: block;
    height: 10px;
    left: 4px;
    position: absolute;
    top: 16px;
    transition: all 0.2s;
    width: 10px;
    z-index: 12;
  }

  /* Grey dot (right indicator — OFF state) */
  .switch-label:after {
    background: -moz-radial-gradient(
      45%,
      circle,
      rgba(60, 60, 60, 0.6) 0%,
      rgba(151, 151, 151, 0.6) 100%
    );
    border-radius: 10px;
    border: 1px solid #111;
    box-shadow: 0 2px 5px rgba(20, 20, 20, 0.5);
    content: "";
    display: block;
    height: 10px;
    right: 4px;
    position: absolute;
    top: 16px;
    transition: all 0.2s;
    width: 10px;
    z-index: 12;
  }

  /* The sliding knob */
  .switch-label span {
    background: linear-gradient(#4f4f4f, #2b2b2b);
    border-radius: 30px;
    border: 1px solid #1a1a1a;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.5),
      0 1px 1px rgba(255, 255, 255, 0.1) inset,
      0 -2px 0 rgba(0, 0, 0, 0.2) inset;
    display: block;
    height: 38px;
    left: 1px;
    position: absolute;
    top: 1px;
    transition: all 0.2s linear;
    width: 53px;
  }

  .switch-label span:before {
    background: linear-gradient(
      to right,
      rgba(48, 48, 48, 0.4),
      rgba(34, 34, 34, 0.4)
    );
    border-radius: 30px 10px 10px 30px;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2) inset;
    content: "";
    display: block;
    height: 33px;
    left: 2px;
    position: absolute;
    top: 2px;
    width: 21px;
  }

  .switch-label span:after {
    background: linear-gradient(
      to left,
      rgba(48, 48, 48, 0.4),
      rgba(34, 34, 34, 0.4)
    );
    border-radius: 10px 30px 30px 10px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2) inset;
    content: "";
    display: block;
    height: 33px;
    position: absolute;
    right: 2px;
    top: 2px;
    width: 21px;
  }

  /* CHECKED STATE — knob slides right */
  .switch-check:checked + .switch-label span {
    left: 59px;
  }

  /* Red dot dims when checked */
  .switch-check:checked + .switch-label:before {
    background: -webkit-radial-gradient(
      45%,
      circle,
      rgba(60, 60, 60, 0.6) 0%,
      rgba(151, 151, 151, 0.6) 100%
    );
    border: 1px solid #111;
    box-shadow: 0 2px 5px rgba(20, 20, 20, 0.5);
  }

  /* Right dot turns green when checked */
  .switch-check:checked + .switch-label:after {
    background: -webkit-radial-gradient(
      45%,
      circle,
      lightgreen 0%,
      lightgreen 100%
    );
    border: 1px solid #004562;
    box-shadow: 0 2px 5px green, 0 0 5px green inset;
  }
`;

export default Switch;