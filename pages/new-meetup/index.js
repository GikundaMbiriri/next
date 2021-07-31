import  Link  from "next/link";
import { useRouter } from "next/router";
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage(){
    const router = useRouter();
async function addMeetupHandler(entered){
const response = await fetch('http://127.0.0.1:8000/api/meets',{
    method:'POST',
    body:JSON.stringify(entered),
    headers:{
        'Content-Type':'application/json'
    }
});
const data = await response.json();
console.log(data);
router.push('/')
}
    return<> 
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </>
}
export default NewMeetupPage;