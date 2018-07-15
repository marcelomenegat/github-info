import React, { Component } from 'react';
import axios from 'axios';

import OrgGithubInfo from '../../template/OrgGithubInfo.jsx';

class Main extends Component {
  
  constructor(props){
     
    // Pass props to parent class
    super(props);
    const { match } = props;
    // Get the URL router to query, if there`s no org in the URL set a default Org.
    const org = match.params.org ? match.params.org : 'impraise';
    
    // Set initial state
    this.state = {
      error: null,
      isLoaded: false,
      organization: [],
      org: org
    }
    
  }
  
  getOrgInfo = async (query, variables) => {
    try {
      const response = await axios.post('https://api.github.com/graphql', {
        query,
        variables
      },
      {
        headers: {
          Authorization: "token 440e248d696a0aa244357a2fa9908f976042a2e1"
        }
      });

      // Set the data to the state
      this.setState(() => ({
        isLoaded: true,
        organization: response.data.data.organization
      }));

    } catch (error) {
      // If there's an error, set the error to the state
      this.setState(() => ({ error }))
    }
  }

  componentDidMount() {
    
    // This is the GraphQL query
    const query = `query { organization(login:` + this.state.org + `) {    
                              name
                              websiteUrl
                              url
                              avatarUrl
                              location
                              pinnedRepositories(first: 3) {
                                nodes {
                                  name
                                  description
                                  forkCount
                                  stargazers(first:1) {
                                    totalCount
                                  }
                                  licenseInfo {
                                    name
                                    spdxId
                                  }
                                  languages(first: 3) {
                                    nodes {            
                                      name
                                    }
                                  }
                                }
                                totalCount      
                              }
                              repositories(first: 20){
                                nodes {
                                  name
                                  description        
                                  stargazers(first:1) {
                                    totalCount
                                  }
                                  forkCount
                                  updatedAt
                                  licenseInfo {
                                    name
                                    spdxId
                                  }
                                	isFork      
                                  parent {          
                                    url          
                                  }
                                  languages(first: 3) {
                                    nodes {
                                      name
                                    }
                                  }
                                }
                              }
                            }
                          }
                  `;
                  
    // These variables are optional, leave empty for now
    const variables = {};
    // We call the method here to execute our async function
    this.getOrgInfo(query, variables)

  }
  
  render() {
      
    const { error, isLoaded, organization } = this.state;
    
      if (error) {
        return <div>{error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div className="App">
            <OrgGithubInfo organization={ organization } > </OrgGithubInfo>
          </div>
        );
      }
      
  }
  
}

export default Main;
