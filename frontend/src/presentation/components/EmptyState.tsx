import type { ReactNode } from 'react';

interface EmptyStateProps {
  title: string;
  body: string;
  action?: ReactNode;
}

export const EmptyState = ({ title, body, action }: EmptyStateProps) => (
  <div className="empty-state">
    <span className="empty-state__orbit" aria-hidden="true">
      <span />
    </span>
    <h3>{title}</h3>
    <p>{body}</p>
    {action}
  </div>
);
