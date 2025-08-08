import { useData } from './utils';

const Component = () => {
  const { data } = useData();
  console.log('data', data);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <UI.Result
        status="success"
        title="我是一个独立开发和部署的微应用，名字叫overview"
      />
    </div>
  );
};


export default Component;
