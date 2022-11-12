import React from 'react'
import { useState } from 'react'
import '../styles/addproject.css'
import axios from 'axios'

const AddProject = ({}) => {
    const [showImage, setShowImage] = useState(true);
    const [imgSrc, setImageSrc] = useState(null);
    const [values, setValues] = useState({name: '', type: 'main', image: null, stack: [], gitLink: '', mainLink: '', description: ''})
    const [mainValues, setMainValues] = useState({name: '', type: '', image: '', stack: '', gitLink: '', mainLink: '', description: '', showCircles: false})
    const [uploadedImg, setUploadedImg] = useState(null);
    const apiUrl = 'https://portfolio-projects-14ccd-default-rtdb.firebaseio.com/projects.json';

    const handleChange = (e) => {
        if(e.target.value === 'main') {
            setShowImage(true)
        } else {
            setShowImage(false)
        }
        setValues(prev => ({...prev, type: e.target.value}))
        setMainValues(prev => ({...prev, type: e.target.value}))
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('file', uploadedImg)

        setMainValues(prev => ({...prev, showCircles: true}))

        const res = await fetch(apiUrl)
        const data = await res.json()
        const projects = data.length > 0 ? [...data, values]: [values];

        try{
            if(values.type === 'main') {
              await axios.post('/upload', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              })
            }

            await fetch(apiUrl, {
            method: 'PUT', 
            body: JSON.stringify(projects)
            });

            setMainValues({name: '', type: '', image: '', stack: '', gitLink: '', mainLink: '', description: '', showCircles: false})

        } catch(err) {
          if(err.response.status === 500) {
            console.log('There was a problem with the server')
          } else {
            console.log(err.response.data.msg)
          }
          console.log(err)
        }
      }

    const changeState = (e) => {
      if(e.target.id === 'image') {
        const file = e.target.files[0]
        const reader = new FileReader()

        reader.readAsDataURL(file)
        reader.onload = () => {setImageSrc(reader.result)};

        setUploadedImg(file)
        setValues(prev => ({...prev, image: `${file.name}`}))
      }
      else if(e.target.id === 'stack') {
        const stack = e.target.value.split(' ');
        setValues(prev => ({...prev, stack}))
      }
      else {
        setValues(prev => ({...prev, [e.target.getAttribute('name')]: e.target.value}))
      }

      setMainValues(prev => ({...prev, [e.target.getAttribute('name')]: e.target.value}))
    }


  return (
    <div className="add-project">
      <form onSubmit={handleSubmit} className="add-project-form">
        <div className="img">
          {showImage && <img className="project-img" src={imgSrc} />}
        </div>

        <div className="input-container" id="name-container">
          <label htmlFor="name">Project Name</label>
          <input value={mainValues.name} name="name" id="name" className="project-input" onChange={changeState} type="text" required />
        </div>
        
        <div className="input-container" id="type-container">
          <label htmlFor="type">Project Type</label>
          <select value={mainValues.type} onChange={handleChange} id="type" className="project-input" name="type" required>
              <option value="main">Major Project</option>
              <option value="secondary">Other Project</option>
          </select>
        </div>

        {
            showImage && 
            <>
              <div className="input-container" id="image-container">
                <label htmlFor="image">Choose Image</label>
                <input value={mainValues.image} id="image" name="image" onChange={changeState} className="project-input" type="file" accept="image/jpeg, image/png" required />
              </div>
            </>
        }

        <div className="input-container" id="stack-container">
          <label htmlFor="stack">Stack Used</label>
          <input value={mainValues.stack} name="stack"  onChange={changeState} id="stack" className="project-input" type="text" required />
        </div>

        <div className="input-container" id="gitLink-container"> 
          <label htmlFor="gitLink">Github Link</label>
          <input value={mainValues.gitLink} name="gitLink"  onChange={changeState} id="gitLink" className="project-input" type="text" required />
        </div>
        
        <div className="input-container" id="mainLink-container">
          <label htmlFor="mainLink">Project Link</label>
          <input value={mainValues.mainLink} name="mainLink" onChange={changeState} id="mainLink" className="project-input" type="text" required />
        </div>
        
        <div className="input-container" id="description-container">
          <label htmlFor="description">Project Description</label>
          <textarea value={mainValues.description} name="description" onChange={changeState} id="description" className="project-input" required></textarea>
        </div>

        <button id="submit" className="flex-center">{mainValues.showCircles && <span></span>}SUBMIT</button>
      </form>
    </div>
  )
}

export default AddProject
