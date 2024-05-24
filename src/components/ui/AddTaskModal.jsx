import { useDispatch } from "react-redux";
import Modal from "./Modal";
import { useForm} from "react-hook-form"
import { addTask } from "../../redux/features/tasks/tasksSlice";

const AddTaskModal = ({isOpen, setIsOpen}) => {
    const { register, handleSubmit,reset } = useForm()
    const dispatch= useDispatch()
    
    const onSubmit= (data) => {
      dispatch(addTask(data))
        onCancel()
    }
    const onCancel =()=>{
        reset()
        setIsOpen(false)
    }
    return (
        <div>
             <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="programming hero">
     <form onSubmit={handleSubmit(onSubmit)}>
     <div className="flex flex-col gap-3">
     <label>Title</label>
      <input className="rounded" {...register("title")} />
     </div>
      
     <div className="flex flex-col gap-3">
     <label>Description</label>
      <input className="rounded"  {...register("description")} />
     </div>
     <div className="flex flex-col gap-3">
     <label>Dadeline</label>
      <input className="rounded"  type="date" {...register("date")} />
     </div>
      
     <div className="flex flex-col gap-3">
     <label>Member Selection</label>
      <select className="rounded"  {...register("member")}>
        <option value="mir">Mir</option>
        <option value="parsian">Parsian</option>
        <option value="habib">Habib</option>
      </select>
     </div>
     <div className="flex flex-col gap-3">
     <label>Priority</label>
      <select className="rounded"  {...register("priority")}>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
     </div>
      <div className="flex justify-end gap-4 mt-4">
      <button className="px-3 py-2 bg-red-500 rounded" onClick={()=>onCancel()}>Close</button>
      <button className="px-3 py-2 bg-green-500 rounded" type="submit">Submit</button>
  
      </div>
    </form>
             </Modal>
        </div>
    );
};

export default AddTaskModal;