import { atom, useRecoilState } from 'recoil';

const countState = atom({
  key: 'count',
  default: 0,
});


export default function Home() {
  const [count, setCount] = useRecoilState(countState);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}