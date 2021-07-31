
import MeetupDetail  from "../../components/meetups/MeetupDetail";
function MeetupDetails(props){
    return<>
    <MeetupDetail {...props.meetUp}/>
    
    </>
}
export async function getStaticPaths(){
   

    const res = await fetch('http://127.0.0.1:8000/api/meets/');
    const info = await res.json();
    console.log(info)
    return {
        fallback:false,
        paths:info.map((inf)=>({params:{meetupid:inf.id.toString()}}))
       
    }
}
export async function getStaticProps(context){
    const meetupId=context.params.meetupid;

    const res = await fetch('http://127.0.0.1:8000/api/meets/'+ meetupId);
    const info = await res.json();
    console.log(info);
    return {
        props:{
            meetUp:info
        }
    }
}
export default MeetupDetails