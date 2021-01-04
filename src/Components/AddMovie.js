import React,{useState} from 'react';
import Modal from 'react-modal';
import { useDispatch } from "react-redux";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {addMovie} from '../Actions/Actions'



const AddMovie = () => {


const [title, setTitle] = useState('')
const [rate, setRate] = useState(0)
const [date, setDate] = useState('')
const [imgUrl, setImgUrl] = useState('')
const [description, setDescription] = useState('')
const [category, setCategory] = useState('')
    
const [modalIsOpen,setIsOpen] = useState(false);
    
const dispatch = useDispatch()
    
const Add = () => {dispatch(addMovie({_id: Math.random(), title: title, rate: rate, date: date, image: imgUrl,
     description: description, 
     category: category}));
                        setTitle('');
                         setRate(0); setDate(''); setImgUrl(''); setDescription(''); setCategory('')}


return (
    <div>   
    <button className="add-btn" onClick={() => setIsOpen(true)}>ADD MOVIE</button>  
        <Modal isOpen={modalIsOpen}>
        <Form>
            <Form.Group controlId="formBasicTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="add movie title" value={title} onChange={e => setTitle(e.target.value)} required/>
            </Form.Group>
            <Form.Group controlId="formBasicRate">
                <Form.Label>Rate</Form.Label>
                <Form.Control type="text" placeholder="add rate" value={rate} onChange={e => setRate(e.target.value)} required/>
            </Form.Group>
            <Form.Group controlId="formBasicDate">
                <Form.Label>Date</Form.Label>
                <Form.Control type="text" placeholder="add date" value={date} onChange={e => setDate(e.target.value)} required/>
            </Form.Group>
            <Form.Group controlId="formBasicImage">
                <Form.Label>Image</Form.Label>
                <Form.Control type="text" placeholder="add image" value={imgUrl} onChange={e => setImgUrl(e.target.value)} required/>
            </Form.Group>
            <Form.Group controlId="formBasicDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="add description" value={description} onChange={e => setDescription(e.target.value)} required/>
            </Form.Group>
            <Form.Group controlId="formBasicCategory">
                <Form.Label>Category</Form.Label>
                <Form.Control type="text" placeholder="add category" value={category} onChange={e => setCategory(e.target.value)} required/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={Add}>Submit</Button>
            <Button variant="primary" type="submit" onClick={() => setIsOpen(false)}>Close</Button>
        </Form>
        </Modal>   
    </div>
        )
    }     

export default AddMovie
        

