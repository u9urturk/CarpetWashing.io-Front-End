
import axios from "axios";

export default class CommentService{
    
    getComments(){
        return axios.get("http://localhost:8080/api/images/getall");

    }

    getCommentsDetail(){
        return axios.get("http://localhost:8080/api/images/getalldetails")
    }


}