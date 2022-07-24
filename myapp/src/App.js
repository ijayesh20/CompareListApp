import {useState } from "react"
import "./style.css";

export default function App() {
  const [valueA,setValueA] = useState("")
  const [valueB,setValueB] = useState("")
  const [listA,setListA] = useState([])
  const [listB,setListB] = useState([])
  const [isSubmit,setIsSubmit] = useState(false)
  const [intersection,setIntersection] = useState([])
  const [unique,setUnique] = useState([])

  function handleSubmit(e) {
    e.preventDefault();

    var listA = valueA.toUpperCase().split(/\r?\n/).filter(element => element!== "");
    setListA(listA)

    var listB = valueB.toUpperCase().split(/\r?\n/).filter(element => element!== "");
    setListB(listB)
    
    const filterArray = listA.filter(value => listB.includes(value))
    setIntersection(filterArray)

    var mergedArray = [...listA,...listB]
    const array = mergedArray.filter(value => filterArray.includes(value) === false)
    setUnique([...new Set(array)])
  }
  return (
    <div className="App">
      <h1 className="heading">Compare Two List</h1>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row">
            <label>List 1</label>
            <textarea 
              value={valueA}
              onChange={(e)=>setValueA(e.target.value)}
              placeholder="Enter one Item per line">
            </textarea>
          </div>
          <div className="row">
            <label>List 2</label>
            <textarea 
              value={valueB}
              onChange={(e)=>setValueB(e.target.value)}
              placeholder="Enter one Item per line">
            </textarea>
          </div>
        </div>

        <button type="submit" onClick={()=>setIsSubmit(true)}>Compute</button>
      </form>
      <div className="container">
        <div className="row">
          <label>Same Elements:</label>
          <div className="divOutput">
            {isSubmit && intersection.map((item,index) => {
              return <li key={index}>{item}</li>
            })}
          </div>
        </div>
        <div className="row">
          <label>Unique Elements:</label>
          <div className="divOutput">
            {isSubmit && unique.map((item,index) => {
              return <li key={index}>{item}</li>
            })}
          </div>
        </div>
      </div>
    </div>
  );
}