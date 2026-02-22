import Card from 'react-bootstrap/Card';
import { CiEdit } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";


const TodoCard = ({ title = "Title ",
  category = "General",
  Body = "No details provided" }) => {
  return (
    <Card style={{ width: '18rem', margin: "2rem", height: '20rem' }}>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <Card.Title className="my-1 ">{title}</Card.Title>
          <div className='d-flex justify-content-end gap-3 '>
            <IoMdAdd size={24} style={{ cursor: "pointer" }} />
            <CiEdit size={24} style={{ cursor: "pointer" }} />
            <MdDelete size={24} style={{ cursor: "pointer" }} />
          </div>
        </div>
        <Card.Subtitle className=" flex align end my-3" >{category}</Card.Subtitle>
        <Card.Text>
          {Body}
        </Card.Text>

      </Card.Body>
    </Card>
  );
}



export default TodoCard