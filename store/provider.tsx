'use client';
import React from 'react';
import { RecoilRoot } from 'recoil';

type ProviderProps = {
  children: React.ReactNode
}
export default function Provider({ children }: ProviderProps) {
  return (
    <RecoilRoot>
      {children}
    </RecoilRoot>
  );
}