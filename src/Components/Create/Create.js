import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { addDoc, collection } from 'firebase/firestore';
import { FirebaseContext, AuthContext } from '../../store/FirebaseContext';
import { ref , uploadBytes ,getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate()
  const {db,storage} = useContext(FirebaseContext)
  const {user} = useContext(AuthContext)
  const [name,setName] = useState('')
  const [category,setCategory] = useState('')
  const [price,setPrice] = useState('')
  const [image,setImage] = useState(null)
  const date = new Date().toDateString()
  const handleSubmit=(e)=>{
    e.preventDefault()
    const storageRef = ref(storage,'Images/'+image.name)
    console.log(storageRef,"shg");
    uploadBytes(storageRef,image).then((reference)=>{
        getDownloadURL(reference.ref).then((url)=>{
          console.log(url);
            addDoc(collection(db,'products'),{
                name,
                category,
                price,
                url,
                userId:user.uid,
                createdAt:date
            }).then(()=>{
                navigate('/')
            })
        })
    })
    
}

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
         
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input 
            className="input" 
            type="number" 
            id="fname" 
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
            name="Price" />
            <br />
          
          <br />
          <img alt="Posts" 
          width="200px" 
          height="200px" 
          src={image ? URL.createObjectURL(image):null}
          ></img>
          
            <br />
            <input type="file" onChange={(e)=>setImage(e.target.files[0])}/>
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
