'use client'
import { useState } from "react"
export default function Comment() {

  // Use Sate
  const [todo, setTodo] = useState<{ movie: string; id: string }[]>([{movie:"",id:""}]);
  const [inputVal, setInputVal] = useState('')
  const [inputNum, setInputNum] = useState('')
  const [changeBtn, setChangeBtn] = useState("Add Comment")
  // function
  const addItem = () => {
    const obj = todo.find(item => item.id == inputNum)
    if (obj) {
      const newArray = todo.filter(item => item.id !== obj.id)
      setTodo([...newArray, { movie: inputVal, id: inputNum }])
      setInputVal("");
      setInputNum("")
      setChangeBtn("Add Comment")
      return
    }
    setTodo([...todo, { movie: inputVal, id: inputNum }])
    setInputVal("");
    setInputNum("")

  }
  const editItem = (id: string | number) => {
    const obj: { id: string; movie: string } | undefined = todo.find(item => item.id == id)

    if (obj) {
      setInputVal(obj.movie);
      setInputNum(obj.id);
      setChangeBtn("Edit");
    } else {
      setChangeBtn("Add Comment")
      return
    }

  };
  const deleteItem = (id: number | string) => {
    const newArray = todo.filter((item) => item.id !== id)
    setTodo([...newArray])

  }
  return (
    <div className=" mt-10">

      <div className=" grid grid-cols-1 gap-3 mt-4 place-items-center  md:flex md:justify-center md:mt-6 md:gap-[30px]">
        <div className="grid grid-rows-2 gap-3"><input className="h-[40px] border-b-2 text-black focus:outline-none bg-white w-auto rounded-md pl-4 md:border-b-2 md:w-[300px] md:rounded-md md:pl-3 md:bg-white md:text-black  md:focus:outline-none" type="text" value={inputVal} placeholder="comment" onChange={(event) => { setInputVal(event.target.value) }} />
        <input className="h-[40px]  border-b-2 text-black focus:outline-none bg-white rounded-md pl-3 text-[15px] w-auto md:border-b-2 md:w-auto md:rounded-md md:pl-3 md:bg-white md:text-black  md:focus:outline-none" type="text" value={inputNum} placeholder="Enter your name" onChange={(e) => setInputNum(e.target.value)}/></div>
        <button onClick={addItem} className=" bg-[#543A14] rounded-md h-auto w-[90px] text-white font-bold shadow shadow-white md:bg-[#543A14] md:rounded-md md:h-11 md:w-[150px] md:text-white md:font-bold md:shadow sm:shadow-white">{changeBtn}</button>
      </div>

      <div className="flex justify-center"><h1 className={` text-[#003366] tracking-[3px] mt-7 font-bold text-[24px]    md: md:text-[#003366] md:tracking-[4px]   md:mt-8 md:font-bold md:text-[32px]`}>What Our Readers Say</h1></div>
      <div className="md:grid md:place-items-center">
        <div className="grid grid-cols-1 gap-5 place-items-center md:grid md:grid-cols-2 md:place-items-center my-7 h-auto">
          {
            todo.map((item: { movie: string; id: string }, i) => {
              return (

                <div className="bg-white rounded-md shadow p-3 w-[250px]  md:bg-white md:rounded-md md:shadow-md :p-3 gap-5 md:w-[500px]" key={i}>
                  <div className="flex justify-end">
                    
                    <button className="text-red-700 rounded-[90px] w-[25px] shadow" onClick={() => { deleteItem(item.id) }}>X</button>
                  </div>
                  <div className="mt-4 md:mt-6 text-center">
                  <h1 className={`  text-[20px] text-black `}>{item.movie}</h1>
                  <h1 className={`  text-[20px] text-[#003366] font-semibold `}>Reader name: {item.id}</h1>
                  </div>
                  <div className="flex justify-end">
                    <button onClick={() => { editItem(item.id); }} className="bg-[#543A14] w-[50px] rounded text-white">Edit</button>
                  </div>

                </div>


              )
            })
          }
        </div></div>
      


    </div>
  )
}
