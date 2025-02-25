import React from 'react';
import type {WrapperProps} from '@docusaurus/types';

export default function DocVersionBannerWrapper(props: WrapperProps<any>) {
  const {version} = props;
  if (version.name === 'Trunk') {
    return null;
  }
  return (
    <div className="docVersionBanner" style={{background: '#f8f9fa', padding: '1rem'}}>
      <p>
        This is documentation for {version.label}.
        For up-to-date documentation, see the latest version (Trunk).
      </p>
    </div>
  );
}
