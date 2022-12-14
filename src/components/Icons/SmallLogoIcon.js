import React from 'react'
import styled from '@emotion/styled/macro'

export default function SmallLogoIcon({ size = 36, className }) {
  return (
    <div className={className}>
      <svg
        width={size}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.6286 24.1923C20.6286 22.7054 21.8438 21.5 23.3429 21.5H24.4286C25.9276 21.5 27.1429 22.7054 27.1429 24.1923V25.2692C27.1429 26.7562 25.9276 27.9615 24.4286 27.9615H23.3429C21.8438 27.9615 20.6286 26.7562 20.6286 25.2692V24.1923Z"
          fill="currentColor"
        />
        <path
          d="M23.3429 11.8077C21.8438 11.8077 20.6286 13.0131 20.6286 14.5V15.5769C20.6286 17.0638 21.8438 18.2692 23.3429 18.2692H24.4286C25.9276 18.2692 27.1429 17.0638 27.1429 15.5769V14.5C27.1429 13.0131 25.9276 11.8077 24.4286 11.8077H23.3429Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.8571 0.5C4.86091 0.5 0 5.32155 0 11.2692V24.7308C0 30.6785 4.86091 35.5 10.8571 35.5H24.4286C30.4248 35.5 35.2857 30.6785 35.2857 24.7308V11.2692C35.2857 5.32155 30.4248 0.5 24.4286 0.5H10.8571ZM24.4286 4.80769H10.8571C7.2594 4.80769 4.34286 7.70062 4.34286 11.2692V24.7308C4.34286 28.2994 7.2594 31.1923 10.8571 31.1923H24.4286C28.0263 31.1923 30.9429 28.2994 30.9429 24.7308V11.2692C30.9429 7.70062 28.0263 4.80769 24.4286 4.80769Z"
          fill="currentColor"
        />
      </svg>
    </div>
  )
}
