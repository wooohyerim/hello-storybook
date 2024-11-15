import { useState } from 'react'

import Label from './components/Label'
import TextField from './components/TextField'

function App() {
  const [isError, setIsError] = useState(false)
  return (
    <div className="p-4">
      <Label htmlFor="email">email</Label>
      <TextField
        id="email"
        errorMessage="이메일을 확인해주세요"
        iconPath="/close-icon.svg"
        iconAlt=""
        onClick={() => {}}
        placeholder="이메일을 입력해주세요"
        onChange={() => {}}
        value=""
        isError={isError}
      />
      <div className="my-20"></div>
      <Label htmlFor="address">주소</Label>
      <TextField
        id="주소"
        errorMessage="주소를 확인해주세요"
        iconPath="/close-icon.svg"
        iconAlt=""
        onClick={() => {}}
        placeholder="주소를 입력해주세요"
        onChange={() => {}}
        value=""
        isError={isError}
      />
      <button
        className="p-3 my-20 text-white rounded-lg bg-primary"
        onClick={() => setIsError((prev) => !prev)}
      >
        error button
      </button>
    </div>
  )
}

export default App
