import { useData } from './utils';

const Component = () => {
  const { data } = useData();
  console.log('data', data);

  return (
    <div style={{ padding: 24, display: 'flex', gap: '8px' }}>
      我是一个子应用，名字叫overview。可以集成到root应用中进行加载。
    </div>
  );
};


export default Component;
