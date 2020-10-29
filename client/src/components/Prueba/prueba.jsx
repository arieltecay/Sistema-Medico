import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import './Prueba.css'


function useKey(key, cb) {
  const callbackRef = useRef(cb)
  useEffect(() => {
    callbackRef.current=cb
  })
  useEffect(() => {
    function handle(event) {
      if (event.code === key) {
        callbackRef.current(event)
      }
    }
    document.addEventListener("keypress", handle)
    return () => document.removeEventListener("keypress", handle)
  },[key])

}

export default function Prueba() {
  function handleEnter() {
    console.log("enter presionado");
  }
  useKey("Enter", handleEnter)
  useKey("NumpadEnter", handleEnter)

  return (
    <div className="container">
      <h1>Ariel Tecay</h1>
      <input
      onClick={useKey}
      ></input>
    </div>
  )
}