import { useState } from "react";
import UseEffectBaisc from "./01_useEffect/01_useEffect-basic";
import UseEffectMount from "./01_useEffect/02_useEffect-mount";
import UseEffectUpdate from "./01_useEffect/03_useEffect-update";
import UseEffectCleanUp from "./01_useEffect/04_useEffect-cleanup";
import { Container } from "./01_useEffect/05_useEffect-cleanup-example";
import Quiz from "./01_useEffect/quiz";
import Counter from "./02_useReducer/01_reducer-basic";
import UseReducerBasic from "./02_useReducer/01_reducer-basic";
import ReducerFormControl from "./02_useReducer/02_reducer-form-control";
import Page1 from "./resume/page/1page";
import Page3 from "./resume/page/3page";
import HardCalculator from "./03_useMemo/01_hard-calculator";
import ComplexCalculator from "./03_useMemo/02_complex-calculator";
import LocationComponent from "./03_useMemo/04_object-type-problem";
import CallBackProblem from "./04_useCallBack/01_problem";
import FunctionMemorization from "./04_useCallBack/02_function_memonization";
import CallBackComponent from "./04_useCallBack/03_componsited-componenet";
import CounterRef from "./05_useRef/01_problem";
import UseRefCounter from "./05_useRef/02_resolve-as-useRef";
import LoginComponent from "./05_useRef/03_inputref";
import Page2 from "./resume/page/2page";
import UseMemoComponent from "./03_useMemo/03_performance-optimization";
import Page from "./06_useContext/01_props-drilling";
import ContextContainer from "./06_useContext/02_useContext";
import CustomHooks from "./07_custom-hooks.js/02_custom-hooks";
import HooksProblem from "./07_custom-hooks.js/01_problem";


function App(){
  const [message, setMessage] = useState("안녕하세요~");

  return(
    <>
      {/* <UseEffectBaisc message={message}/> */}
      {/* <UseEffectMount/> */}
      {/* <UseEffectUpdate/> */}
      {/* <UseEffectCleanUp/> */}
      {/* <Container/> */}
      {/* <Quiz/> */}
      {/* <Counter/> */}
      {/* <UseReducerBasic/> */}
      {/* <ReducerFormControl/> */}
      {/* <Page1/> */}
      {/* <Page2/> */}
      {/* <Page3/> */}
      {/* <HardCalculator/> */}
      {/* <ComplexCalculator/> */}
      <UseMemoComponent/>
      {/* <LocationComponent/> */}
      {/* <CallBackProblem/> */}
      {/* <FunctionMemorization/> */}
      {/* <CallBackComponent/> */}
      {/* <CounterRef/> */}
      {/* <UseRefCounter/> */}
      {/* <LoginComponent/> */}
      {/* <Page/> */}
      {/* <ContextContainer/> */}
      {/* <HooksProblem/> */}
      {/* <CustomHooks/> */}
    </>
  );
}

export default App;
