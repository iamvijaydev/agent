import React from 'react'
import styled from 'styled-components'

export const Checkbox = styled.div`
  padding: 1rem 0;

  label {
    padding: 0 0 1rem;
  }

  input[type="checkbox"] {
    background: #f2f2f2; /* Fallback for IE 8 */
    background: rgba(0, 0, 0, 0) !important; /* "transparent" doesn't work with Opera */
    border: 0;
    border-radius: 0;
    appearance: none;

    & + label {
      position: relative;
      display: inline-block;
      padding-left: 2.5rem;
      cursor: pointer;
      font-size: 1.3rem;
      font-family: 'Open Sans', sans-serif;
      transition: all .3s ease-in-out;

      &:before,
      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 1.5rem;
        height: 1.5rem;
        text-align: center;
        color: #d0ccc8;
        font-family: Times;
        border-radius: 0.2rem;
        transition: all .3s ease;
        border: 1px solid #d0ccc8;
      }

      &:before {
        box-shadow:
          inset 0 0 0 0.2rem #fff,
          inset 0 0 0 1em #fff;
      }

      &:hover:before {
        box-shadow:
          inset 0 0 0 0.3rem #fff,
          inset 0 0 0 1em #aaa;
      }
    }

    &:focus {
      & + label:before {
        outline: 1px dashed;
        outline-offset: 0.1rem;
        outline-color: #c8d0ff;
        box-shadow:
          inset 0 0 0 0.3rem #fff,
          inset 0 0 0 1em #aaa;
      }
    }

    &:checked {
      & + label {
        &:before,
        &:after {
          border: 1px solid #3f51b5;
        }

        &:before {
          box-shadow:
          inset 0 0 0 0.3rem #fff,
          inset 0 0 0 1rem #3f51b5;
        }
      }
    }
  }
`
