import React from "react";
import "../../assets/css/repoCardStyle.css";
import colours from "../../assets/misc/colours.js";

const RepoCard = ({ ...props }) => {

  const {
    isFork,
    forkUrl,
    description,
    name,
    languages,
    stargazers,
    forkCount,
    licenseInfo
  } = props;
  
  function getForkFrom() {
    if(isFork) {
      let arr = forkUrl.url.split('/')
      let i = arr.length - 1;
      return  <p className="subref"> forked from <a href={forkUrl.url} target="parent"> { arr.splice(i--, 1)  }/{ arr.splice(i, 1)  } </a> </p> ;
    }
  }
  
  function getDescription() {
    if (description !== '') {
      return (<div className="row middle">
                <div className="cell">
                   <p className="f-small"> { description } </p>       
                </div>
             </div> );
    }
  }
  
  function getLanguage() { 
    if(languages && languages.nodes && languages.nodes.length  > 0) {
      return ( <span className="mr-10"><span className="repo-language-color ml-0 lang" 
                                                       style={{ backgroundColor: colours[languages.nodes[0].name] }}></span> { languages.nodes[0].name } </span> )
    }
  }
  
  function getStar() {
    if (stargazers.totalCount > 0) {
        return ( <a className="mr-10"> <icon className="ic-star ic"></icon> { stargazers.totalCount } </a> ) 
    }
  }
  
  function getFork() {
    if (forkCount > 0) {
      return ( <a className="mr-10"><icon className="ic-branch ic"></icon>   { forkCount }  </a>  ) 
    }
  }
  
  function getLicense() {
     if (licenseInfo && licenseInfo !== null) {
      return (  <a className="mr-10">  <icon className="ic-law ic"></icon> { licenseInfo.spdxId || licenseInfo.name } </a> );
    }
  }
  
  return (
          <div className="container ml-20 "> 
          
                <div className="row top">
                  <div className="cell">
                    <p > { name } </p>   
                    { getForkFrom() } 
                  </div>
                </div>
                
                { getDescription() }
                
                <div className="row base">
                  <div className="cell f-small fc-meta">
                
                    { getLanguage() }
                    
                    { getStar() }
                    
                    { getFork() }
                    
                    { getLicense() }
                    
                </div>
              </div>
                
          </div>
  );
}

export default (RepoCard);
