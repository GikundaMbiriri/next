
import MeetupList from '../components/meetups/MeetupList';
const DUMMY=[
    {
        id:1,
        title:'A first meet up',
        image:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        address:'fkefkekefkkefkef',
        description:'eemgngesnjkjken'

    },
    {
        id:2,
        title:'A second meet up',
        image:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        address:'fkefkekefkkefkef',
        description:'eemgngesnjkjken'

    },
    {
        id:3,
        title:'A first meet up',
        image:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        address:'fkefkekefkkefkef',
        description:'eemgngesnjkjken'

    },
    {
        id:4,
        title:'A first meet up',
        image:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        address:'fkefkekefkkefkef',
        description:'eemgngesnjkjken'

    },
]

function HomePage(props){
 
  
    return<>

     <MeetupList meetups={props.meetups}/>

     </>
}
// export async function getServerSideProps(context){
//     const req=context.req;
//     const res=context.res;
//     return {
//         props:{
//             meetups:DUMMY
//         }
//     }
// }
export async function getStaticProps(){
    const res = await fetch('http://127.0.0.1:8000/api/meets')
  const data = await res.json()

  if (!data) {
   console.log('we have nothing')
  }
  console.log(data)

 
  
    return {
        props:{
            meetups:data
        },
        revalidate:10
    };
}
export default HomePage;