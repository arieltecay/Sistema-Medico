import React, { useState, useRef, useEffect } from 'react'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchPacientes } from '../../redux/actions'
import "./Search.css"

export default function Search() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    function useKey(key, cb) {
        const callbackRef = useRef(cb)
        useEffect(() => {
            callbackRef.current = cb
        })
        useEffect(() => {
            function handle(event) {
                if (event.code === key) {
                    callbackRef.current(event)
                }
            }
            document.addEventListener("keypress", handle)
            return () => document.removeEventListener("keypress", handle)
        }, [key])

    }

    function handleEnter() {
        dispatch(searchPacientes(input))
    }
    useKey("Enter", handleEnter)
    useKey("NumpadEnter", handleEnter)

    return (
        <div>
            <div className="input-group md-form form-sm form-2 pl-0">
                <Link to="/paciente">
                    <input
                        onChange={(e) => setInput(e.target.value)}
                        className="form-control my-0 py-1 red-border"
                        onClick={() => useKey}
                        type="search"
                        placeholder="Busqueda..."
                        aria-label="Search"
                    />
                </Link>
            </div>
        </div>
    )
}