import React from 'react';

interface VersionData {
  name: string;
  label: string;
}

interface DocVersionBannerWrapperProps {
  version?: VersionData;
  [key: string]: any;
}

export default function DocVersionBannerWrapper(props: DocVersionBannerWrapperProps): JSX.Element | null {
  const {version} = props;
  if (!version || version.name === 'current') {
    return null;
  }
  return (
    <div className="docVersionBanner" style={{background: '#f8f9fa', padding: '1rem'}}>
      <p>
        This is documentation for {version.label}. For up-to-date documentation, see the latest version (Trunk).
      </p>
    </div>
  );
}
