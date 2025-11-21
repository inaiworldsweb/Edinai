// import './RoleSelector.css'
import studentIcon from '../assets/stu.svg'
import developerIcon from '../assets/dev.svg'
import adminIcon from '../assets/admin.svg'

// const roleOptions = [
//   {
//     label: 'Student',
//     icon: <img src={vectorIcon} alt="Student icon" />,
//   },
//   {
//     label: 'Developer',
//     icon: (
//       <svg viewBox="0 0 24 24" aria-hidden="true">
//         <rect
//           x="3.5"
//           y="6"
//           width="17"
//           height="12"
//           rx="2"
//           ry="2"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="1.6"
//         />
//         <path d="M9 18.5h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
//         <path
//           d="M9.5 11.5 8 13l1.5 1.5m5-3 1.5 1.5L14.5 14.5"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="1.6"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     ),
//   },
//   {
//     label: 'Admin',
//     icon: (
//       <svg viewBox="0 0 24 24" aria-hidden="true">
//         <circle cx="12" cy="8.5" r="3.25" fill="none" stroke="currentColor" strokeWidth="1.6" />
//         <path
//           d="M6.5 18.5a5.5 5.5 0 0 1 11 0"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="1.6"
//         />
//       </svg>
//     ),
//   },
// ];

import React from "react";

const roleOptions = [
  { label: 'Student', icon: <img src={studentIcon} alt="Student icon" /> },
  { label: 'Developer', icon: <img src={developerIcon} alt="Developer icon" /> },
  { label: 'Admin', icon: <img src={adminIcon} alt="Admin icon" /> },
];

const RoleSelector = ({ onSelectRole }) => {
  return (
    <aside className="login-roles">
      {roleOptions.map((option) => (
        <button
          key={option.label}
          type="button"
          className="login-role"
          onClick={() => onSelectRole && onSelectRole(option.label)}
        >
          <span className="login-role__icon" aria-hidden="true">
            {option.icon}
          </span>
          <span className="login-role__label">{option.label}</span>
        </button>
      ))}
    </aside>
  );
};

export default RoleSelector;
