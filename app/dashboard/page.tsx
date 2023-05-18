"use client"
import { counterState } from '@/store/counter';
import { useRecoilState } from 'recoil';

export default function Page() {
    const [count, setCount] = useRecoilState(counterState);
    return (
        <div>
            {count}
        </div>
    )
}