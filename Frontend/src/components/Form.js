import React, { useState } from 'react'

const Form = () => {

  const [inputData,setInputData] = useState({
    name:"",
    email:"",
    salary:""
  })

  const [usersDataMap,setUsersDataMap] = useState([])
  const [isEdit,setIsEdit] = useState("")
  const [isToggle,setIsToggle] = useState(false)

  const handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    setInputData({...inputData,[name]:value});
  }

  const formSubmit = (e) => {
    e.preventDefault();

    if(!inputData.name || !inputData.email || !inputData.salary){
      alert("Fill The Form!");
    }
    else if(inputData.name && isToggle){
      setUsersDataMap(
        usersDataMap.map((curElem)=>{
          if(curElem.id===isEdit){
            return ({...curElem,...inputData})
          }
          return curElem;
        })
      )
      setInputData({name:"",email:"",salary:""})
      setIsEdit("")
      setIsToggle(false)
    }
    else{
       const newRecord = {...inputData,id:new Date().getTime().toString()}
       setUsersDataMap([...usersDataMap,newRecord])
       setInputData({name:"",email:"",salary:""})
    }
  }

  const editItem = (index) => {
    const edit_this = usersDataMap.find((value)=>{
      return (value.id===index)
    })
    console.log(edit_this);
    setInputData({name:edit_this.name,email:edit_this.email,salary:edit_this.salary})
    setIsToggle(true)
    setIsEdit(index);
  }

  const deleteItem = (index) => {
       const updateRecord = usersDataMap.filter((values)=>{
        return (values.id!==index)
       })
       setUsersDataMap(updateRecord)
  }

  return (
    <div>
        <form className="row gy-2 gx-3 align-items-center my-1 mx-5" onSubmit={formSubmit}>
  <div className="col-auto" >
    <label className="visually-hidden" htmlFor="name">Name</label>
    <input type="text" onChange={handleInput} value={inputData.name} name='name' autoComplete='off' className="form-control" id="name" placeholder="Name"/>
  </div>
  <div className="col-auto">
    <label className="visually-hidden" htmlFor="email">Email</label>
    <div className="input-group">
      <input type="text" onChange={handleInput} value={inputData.email} name='email' autoComplete='off' className="form-control" id="email" placeholder="Email"/>
    </div>
  </div>
  <div className="col-auto">
    <label className="visually-hidden" htmlFor="salary">Salary</label>
    <input type="text" onChange={handleInput} value={inputData.salary} name='salary' autoComplete='off' className="form-control" id="salary" placeholder="Salary"/>
  </div>
  <div className="col-auto">
    <button type="submit" className="btn btn-success">{isToggle?"Update":"Add"}</button>
  </div>
</form>
 <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Salary</th>
    </tr>
  </thead>
  <tbody>
  {usersDataMap.map((values)=>{
    return(
    <tr key={values.id}>
      <td>{values.name}</td>
      <td>{values.email}</td>
      <td>{values.salary}</td>
      <td><i className="far fa-edit add-btn btn btn-primary" onClick={() => editItem(values.id)}> Edit</i></td>
      <td><i className="far fa-trash-alt add-btn btn btn-danger" onClick={() => deleteItem(values.id)}> Delete</i></td>
    </tr>
    )
  })
   
  }
  </tbody>
</table>
    </div>
  )
}

export default Form;