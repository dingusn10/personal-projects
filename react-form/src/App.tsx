import { useMultiSteps } from './useMultiSteps'
import { UserForm } from './UserForm'
import { AddressForm } from './AddressForm'
import { AccountForm } from './AccountForm'
import { FormEvent, useState } from 'react'

type FormData = {
  firstName: string
  lastName: string
  age: string
  street: string
  city: string
  state: string
  zip: string
  email: string
  password: string
}


const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
}

function App() {
  const [data, setData] = useState(INITIAL_DATA)
  function updateFields(fields: Partial<FormData>){
    setData(prev => {
      return {...prev, ...fields}
    })

  }


  const {steps, currentStepIndex, step, isFirstStep, isLastStep, back, next} = useMultiSteps([
    <UserForm {...data} updateFields={updateFields}/>,
    <AddressForm {...data} updateFields={updateFields}/>,
    <AccountForm {...data} updateFields={updateFields}/>,
  ])

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isLastStep) return next()
    alert("Account created. Please check your email to activate your account.")
  }
 return (
  <div className='relative bg-white p-8 m-1 border-black border-2 rounded-md mx-auto flex justify-center w-fit'>
  <form onSubmit={onSubmit}>
    <div className='absolute top-2 right-2'>
      {currentStepIndex + 1} / {steps.length}
    </div>
    {step}
    <div className='mt-4 flex gap-2 justify-end'>
      {!isFirstStep && (
      <button className="bg-blue-600 text-white rounded-1 shadow-sm py-1 px-2" type="button" onClick={back}>Back</button>
      )}
      <button className="bg-blue-600 text-white rounded-sm shadow-sm py-1 px-2" type="submit">
        {isLastStep ? "Finish" : "Next"}
      </button>

    </div>
  </form>

 </div> 


)


}

export default App
