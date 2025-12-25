import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ResourceItem {
  title: string;
  category: string;
  readTime: string;
  summary: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}