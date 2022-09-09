import React from 'react'
import styled from '@emotion/styled/macro'
// #379070
export default function CircleMinus({ size = 24, className }) {
  return (
    <div className={className}>
      <svg
        width={size}
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.3125 11.25H7.6875C7.58437 11.25 7.5 11.3344 7.5 11.4375V12.5625C7.5 12.6656 7.58437 12.75 7.6875 12.75H16.3125C16.4156 12.75 16.5 12.6656 16.5 12.5625V11.4375C16.5 11.3344 16.4156 11.25 16.3125 11.25Z"
          fill="currentColor"
        />
        <path
          d="M12 1.5C6.20156 1.5 1.5 6.20156 1.5 12C1.5 17.7984 6.20156 22.5 12 22.5C17.7984 22.5 22.5 17.7984 22.5 12C22.5 6.20156 17.7984 1.5 12 1.5ZM12 20.7188C7.18594 20.7188 3.28125 16.8141 3.28125 12C3.28125 7.18594 7.18594 3.28125 12 3.28125C16.8141 3.28125 20.7188 7.18594 20.7188 12C20.7188 16.8141 16.8141 20.7188 12 20.7188Z"
          fill="currentColor"
        />
      </svg>
    </div>
  )
}
