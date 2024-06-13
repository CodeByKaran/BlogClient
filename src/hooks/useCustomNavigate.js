import { useNavigate } from 'react-router-dom';

const useCustomNavigate = () => {
  const navigate = useNavigate();

  const navigateToPath= (path,replace=false, config = {}) => {
    navigate(path, { replace: replace, ...config });
  };

  return navigateToPath;
};

export default useCustomNavigate;
