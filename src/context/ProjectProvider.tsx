import React, { ReactNode, createContext, useState } from 'react';

import connect from '../lib/connectAxios';

const ProjectContext = createContext();

interface ProjectProviderProps {
  children: ReactNode;
}

const ProjectProvider: React.FC<ProjectProviderProps> = ({ children }) => {
  const [projects, setProjects] = useState([]);
  return (
    <ProjectContext.Provider
      value={{
        projects,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectProvider };

export default ProjectContext;
