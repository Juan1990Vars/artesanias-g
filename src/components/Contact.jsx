import emailjs from 'emailjs-com'
import React from 'react'
import './styles/contact.css'
import { useForm } from 'react-hook-form'

const Contact = () => {

    const { register, handleSubmit, reset } = useForm();

    const sendEmail = (data, e) => { // Cambié el orden de los parámetros
      e.preventDefault();  // Añadí preventDefault para evitar que el formulario se envíe automáticamente
      emailjs.sendForm('service_5j79473', 'template_81bftg2', e.target, 'lF89zr9jMDuerdz4z', data)
        .then((res) => {
          console.log(res);
          reset({
              nombre: '',
              telefono: '',
              correo: '',
              mensaje: ''
            });
          })
    }

  return (
    <div id='contacto' className='div'>
        <div className='div__1'>
        <h3 className='div__title'>Comunicate con nosotros</h3>
        <div className='div__form'>
        <fieldset className='form'>
          <form onSubmit={handleSubmit(sendEmail)}>
          <legend className='form__title'>Datos del Cliente</legend>
            
            <div className='form__input'>
                <label htmlFor="nombre">Nombre Completo</label>
                <input type='text' {...register('nombre', {
                })} placeholder='Jose Pérez' />
            </div>

            <div className='form__input'>
                <label htmlFor="telefono">Teléfono</label>
                <input type='text' {...register('telefono', {
                })} placeholder='5555555555' />
            </div>

            <div className='form__input'>
                <label htmlFor="correo">Correo Electrónico</label>
                <input type='email' {...register('correo', {
                })} placeholder='ejemplo@gmail.com'/>
            </div>

            <div className='form__input'>
                <label htmlFor="mensaje">Mensaje</label>
                <textarea className='textarea' {...register('mensaje')} id="" cols={'26'} rows={'10'} placeholder='Deja tu mensaje.........'></textarea>
            </div>

            <div className='button'>
                {/* <input className='submit' type="submit" /> */}
                <button className='submit'>Enviar</button>
            </div>
          </form>
        </fieldset>
        </div>
        </div>
      <div id='ubicacion' className='div__2'>
        <h4 className='local__title'>Ubicación</h4>
      <div align="center" >
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6794.900411689849!2d-98.83807815996408!3d19.784674821848995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1be297d14495b%3A0x9232598afc089a6c!2s55996%20Santa%20Mar%C3%ADa%20Maquixco%2C%20M%C3%A9x.!5e1!3m2!1ses-419!2smx!4v1716100346541!5m2!1ses-419!2smx" width="300" height="400"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
        </div>
    </div>
  )
}

export default Contact