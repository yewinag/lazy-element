import * as React from 'react'
import styled from 'styled-components'

interface IButton {
  type: string
  children: JSX.Element | string
}

export const Button = ({ type, children }: IButton) => {
  return <StyledLayout className={type}>{children}</StyledLayout>
}
const StyledLayout = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: black;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  &.primary {
    background: #317ade;
    color: #fff;
    border: 2px solid #317ade;
    &:hover,
    &:focus {
      background-color: #123c74;
      border: 2px solid #123c74;
    }
    &:active {
      background-color: #123c74;
      border: 2px solid #123c74;
    }
  }
  &.success {
    background: #3abd0d;
    color: #fff;
    border: 2px solid #3abd0d;
    &:hover,
    &:focus {
      background-color: #1d5e06;
      border: 2px solid #1d5e06;
    }
    &:active {
      background-color: #1d5e06;
      border: 2px solid #1d5e06;
    }
  }
  &.error {
    background: #d70007;
    color: #fff;
    border: 2px solid #d70007;

    &:hover,
    &:focus {
      background-color: #6b0003;
      border: 2px solid #6b0003;
    }
    &:active {
      background-color: #6b0003;
      border: 2px solid #6b0003;
    }
  }
  &.link {
    background: #fff;
    color: #808080;
    border: 2px solid #808080;

    &:hover,
    &:focus {
      background-color: #404040;
    }
    &:active {
      background-color: #404040;
    }
  }
`
