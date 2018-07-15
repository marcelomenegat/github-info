import React from 'react';

import { HeaderCard } from '../components';
import { RepoList } from '../components';
import { PinnedList } from '../components';

import "../assets/css/tempListStyle.css";

function OrgGithubInfo({ ...props }) {
  const {
    organization
  } = props;
  
  return (
      
        <div className="t-body">
         
        <HeaderCard orgName={ organization.name }
                    orgUrl={ organization.websiteUrl }
                    orgLocation={ organization.location }
                    avatarUrl={ organization.avatarUrl } > </HeaderCard>
                    
                    
        <PinnedList pinnedRepositories={ organization.pinnedRepositories.nodes }  > 
        </PinnedList>
        

        <RepoList repositories={ organization.repositories.nodes  }  > 
        </RepoList>
        
      </div>

  );
}

export default (OrgGithubInfo);