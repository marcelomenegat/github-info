import React from "react";

import RepoCard from "../Cards/RepoCard.jsx"; 

import "../../assets/css/listCardStyle.css";

const RepoList = ({ ...props }) => {
  const {
    repositories
  } = props;
  
  return (

    <div>

      <div className="list-header">
        <div className="rowGroup">
          <div className="">
              <h4 className="mt-0 mb-0"> Repositories </h4>
          </div>
        </div>        
      </div>

      <ul className="list-content mt-0 mb-0 width-full">
        {repositories.map((repo, key) => {
          return (
            <li key={ key } className="li-block width-full bb-1">
            
                <RepoCard isFork={ repo.isFork }
                          forkUrl={ repo.parent }
                          description={ repo.description }
                          name={ repo.name }
                          languages={ repo.languages }
                          stargazers={ repo.stargazers.totalCount }
                          forkCount={ repo.forkCount }
                          licenseInfo={ repo.licenseInfo }> </RepoCard>
              
            </li>
            
            );
          })} 
      </ul>

    </div>
    

  );
}

export default (RepoList);