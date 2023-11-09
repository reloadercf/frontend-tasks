import useProject from '../../hooks/useProject';

export const Projects = () => {
  const { projects } = useProject();
  console.log(projects);

  return <div>View all projects</div>;
};
