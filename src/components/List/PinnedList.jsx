import React from "react";
import RepoCard from "../Cards/RepoCard.jsx"; 

import "../../assets/css/pinnedListStyle.css";

const PinnedList = ({ ...props }) => {
    
  const {
    pinnedRepositories
  } = props;
  
  return (
      
        <div>
            <div className="list-header">
                <div className="rowGroup">
                    <div className="">
                        <h4 className="mt-0 mb-0">Prinned Repositories </h4>
                    </div>
                </div>        
            </div>
            
            <ol className="grid">
            {pinnedRepositories.map((repo, key) => {
              return (
                <li key={ key } className="grid-flex">
                
                    <RepoCard isFork={ repo.isFork }
                              forkUrl={ repo.parent }
                              description={ repo.description }
                              name={ repo.name }
                              languages={ repo.languages }
                              stargazers={ repo.stargazers }
                              forkCount={ repo.forkCount }
                              licenseInfo={ repo.licenseInfo }> </RepoCard>
                  
                </li>
                
                );
            })} 
            </ol>            
        </div>

  );
}

export default (PinnedList);