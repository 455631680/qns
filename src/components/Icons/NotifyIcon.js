import React from 'react'

export default function NotifyIcon({ size = 22, className = 'text-gray-600' }) {
  return (
    <div className={className}>
      <svg
        width={size}
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.625 16.0751L19.25 15.3876V13.75C19.2483 12.7761 18.9024 11.8341 18.2734 11.0906C17.6443 10.3471 16.7727 9.84987 15.8125 9.68688V8.25H14.4375V9.68688C13.4773 9.84987 12.6057 10.3471 11.9766 11.0906C11.3476 11.8341 11.0017 12.7761 11 13.75V15.3876L9.625 16.0751V19.25H13.75V20.625H16.5V19.25H20.625V16.0751ZM19.25 17.875H11V16.9249L12.375 16.2374V13.75C12.375 13.0207 12.6647 12.3212 13.1805 11.8055C13.6962 11.2897 14.3957 11 15.125 11C15.8543 11 16.5538 11.2897 17.0695 11.8055C17.5853 12.3212 17.875 13.0207 17.875 13.75V16.2374L19.25 16.9249V17.875Z"
          fill="currentColor"
        />
        <path
          d="M19.25 4.125C19.25 3.76033 19.1051 3.41059 18.8473 3.15273C18.5894 2.89487 18.2397 2.75 17.875 2.75H15.125V1.375H13.75V2.75H8.25V1.375H6.875V2.75H4.125C3.76033 2.75 3.41059 2.89487 3.15273 3.15273C2.89487 3.41059 2.75 3.76033 2.75 4.125V17.875C2.75 18.2397 2.89487 18.5894 3.15273 18.8473C3.41059 19.1051 3.76033 19.25 4.125 19.25H6.875V17.875H4.125V4.125H6.875V5.5H8.25V4.125H13.75V5.5H15.125V4.125H17.875V8.25H19.25V4.125Z"
          fill="currentColor"
        />
      </svg>
    </div>
  )
}