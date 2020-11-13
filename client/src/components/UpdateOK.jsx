import React from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'

function mostrarAlert() {
    Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success',
        'confirmButtonText: Yes'
    ).then(function(result){
        if(result.value){
            window.location = '/paciente'
        }
    })
}
export default function UpdateOK() {
    const [alert] = useState(true)
    return (
        <div className='pt-5 mt-3'>
            {alert && mostrarAlert()}
        </div>
    )
} 