import React from 'react';
import { Link as LinkComponent } from 'react-router-dom'; // Assuming you're using react-router-dom for routing

import { styled } from "@mui/material";

export const VisuallyHiddenInput = styled("input")({
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    whiteSpace: "nowrap",
    width: 1,
}
);


export const Link = styled(LinkComponent)`
  text-decoration: none;
  color: black;
  padding: 1rem; /* Added a semicolon at the end of each style declaration */

  &:hover {
    background-color: black; /* Added a semicolon at the end of each style declaration */
    color: white; /* Change text color on hover (optional) */
  }
`;
