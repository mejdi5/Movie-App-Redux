import React,{useState} from 'react';
import Modal from 'react-modal';
import { useDispatch } from "react-redux";
import { editMovie } from '../Actions/Actions'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



const Edit = ({movie}) => {


const [editTitle, setEditTitle] = useState(movie.title) 
const [editRate, setEditRate] = useState(movie.rate)
const [editDate, setEditDate] = useState(movie.date)
const [editImgUrL, setEditImgUrL] = useState(movie.imgUrL)
const [editDescription, setEditDescription] = useState(movie.description)
const [editCategory, setEditCategory] = useState(movie.category)

const [modalIsOpen,setIsOpen] = useState(false);

const dispatch = useDispatch() 

const edit = () => {dispatch(editMovie(Math.random(), editTitle, editRate, editDate, editImgUrL, editDescription, editCategory));
setEditTitle(''); setEditRate(0); setEditDate(''); setEditImgUrL(''); setEditDescription(''); setEditCategory(''); setIsOpen(false)}

return (
    <div>
        <button className="edit" onClick={() => setIsOpen(true)}>EDIT</button>  
        <Modal isOpen={modalIsOpen}>
        <Form>
            <Form.Group controlId="formBasicTitle">
                <Form.Label>NEW Title</Form.Label>
                <Form.Control type="text" placeholder="add new title" value={editTitle} onChange={e => setEditTitle(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="formBasicRate">
                <Form.Label>NEW Rate</Form.Label>
                <Form.Control type="text" placeholder="add new rate" value={editRate} onChange={e => setEditRate(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="formBasicDate">
                <Form.Label>NEW Date</Form.Label>
                <Form.Control type="text" placeholder="add new date" value={editDate} onChange={e => setEditDate(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="formBasicImage">
                <Form.Label>NEW Image</Form.Label>
                <Form.Control type="text" placeholder="add new image" value={editImgUrL} onChange={e => setEditImgUrL(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="formBasicDescription">
                <Form.Label>NEW Description</Form.Label>
                <Form.Control type="text" placeholder="add new description" value={editDescription} onChange={e => setEditDescription(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="formBasicCategory">
                <Form.Label>NEW Category</Form.Label>
                <Form.Control type="text" placeholder="add new category" value={editCategory} onChange={e => setEditCategory(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={edit}>Save</Button>
            <Button variant="primary" type="submit" onClick={() => setIsOpen(false)}>Close</Button>
        </Form>
        </Modal>   
    </div>
)
}

export default Edit