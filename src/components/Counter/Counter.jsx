import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrementWithCheckingAction,
} from "../../app/features/counter/actions";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center mt-[150px]">
      <button
        className="p-2 w-[2rem] text-[20px] bg-blue-600 text-white font-black rounded"
        onClick={() => dispatch(decrementWithCheckingAction(1))}
      >
        -
      </button>
      <span className=" w-[2rem] text-center font-bold">{count}</span>
      <button
        className="p-2 w-[2rem] text-[20px] bg-blue-600 text-white font-black rounded"
        onClick={() => dispatch(increment(1))}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
