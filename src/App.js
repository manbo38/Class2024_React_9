import logo from './logo.svg';
import './App.css';
import Main1 from './Main1';
import Main2 from './Main2';
import Main3 from './Main3';

// 부모 컴포넌트
function App() {
  
  const names1 = ["남규리","이보람","김연지"];    // 1차원 배열
  const names2 = [["남규리", 84],["이보람", 87],["김연지", 86]];  // 2차원 배열
  const names3 = [{userName:"남규리", age:84},
                  {userName:"이보람", age:87},
                  {userName:"김연지", age:86},];

  // 배열의 원소를 자식 컴포넌트에게 전달하기
  const nameList1 = names1.map((n)=>(<Main1 name={n}/>));
  const nameList2 = names2.map((v)=>(<Main2 name={v[0]} age={v[1]}/>));
  const nameList3 = names3.map((v)=>(<Main3 name={v.userName} age={v.age}/>));

  // filter함수를 이용해서 age가 30보다 큰 데이터만 자식 컴포넌트에게 전달하기
  let nameList4 = names3.filter(v=>v.age > 85);
  nameList4 = nameList4.map((v)=>(<Main3 name={v.userName} age={v.age}/>))

  return (
    <div className="App">
      {nameList1}<hr/>
      {nameList2}<hr/>
      {nameList3}<hr/>
      {nameList4}<hr/>
    </div>
  );
}

export default App;
