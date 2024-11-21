import { useState, useRef } from "react";

type PhoneInputProps = {
    label?: string;
}

const PhoneInput = ({ label }: PhoneInputProps) => {
  const [phone, setPhone] = useState<string>('')

  const inputRef = useRef<HTMLInputElement>(null);

  const formatPhone = () => {
    if (phone.length < 4) return phone;
    if (phone.length < 7) return `(${phone.slice(0, 3)}) ${phone.slice(3)}`
    return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6, 10)}`
    }

  const handlePhoneUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 10) {
      setPhone(e.target.value)
    }
  }

  const handleCounterClick = (action: string) => {
    const phoneNumber = phone === '' ? 0 : parseInt(phone)
    if (action === '+' && phoneNumber < 9999999999) {
      setPhone((phoneNumber + 1).toString())
    } else if (action === '-' && phoneNumber > 0) {
      setPhone((phoneNumber - 1).toString())
    }
  }

  const focusOnInput = () => {
    inputRef.current?.focus()
  }

  return (
    <div className="form-field">
        <div className="buttons">
          <button onClick={() => handleCounterClick('+')}>+</button>
          <button onClick={() => handleCounterClick('-')}>-</button>
        </div>
        <div className="display">
          {label && <label>{label}</label>}
          <input type="number" value={phone} onChange={handlePhoneUpdate} ref={inputRef}/>
          <p className="show" onClick={focusOnInput} onMouseEnter={() => console.log('entered')}>{formatPhone()}</p>
        </div>
    </div>
  )
}

export default PhoneInput