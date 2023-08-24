import React from 'react'
import { UseTheme } from './UseTheme'
import Form from 'react-bootstrap/Form';
import './Switch.css'

export default function Switch() {
    const {theme,dispatch}=UseTheme()
    const change=()=>{
        if (theme === 'light') {
            dispatch({type:'DARK'})
        }
        else{
            dispatch({type:'LIGHT'})
        }
        console.log(theme);
    }
  return (
    <div className='container flexx'>
            <Form>
      <Form.Check className='text-white'// prettier-ignore
        type="switch"
        id="custom-switch"
        label="Switch theme color"
      onClick={change}/>
      </Form>
    </div>
  )
}
