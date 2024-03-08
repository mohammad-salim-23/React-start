// export default function Todo({task,isDone}){
//     return (
//         <li>Task: {task}</li>
//     )
// }
// conditional rending option 1
// export default function Todo({task,isDone}){
//     if(isDone){
//         return <li>Finished :{task}</li>
//     }else{
//         return <li>Work on:{task}</li>

//     }
// }
// conditional rating option 2
// export default function Todo({task,isDone}){
//         if(isDone){
//             return <li>Finished :{task}</li>
//         }
//             return <li>Work on:{task}</li>
    
    
//     }
// 
// conditiona rendering option 3: ternary operator
//  export default function Todo({task,isDone}){
//    return (
//      <li>{isDone ? 'Finished':'Work on'} : {task}</li>
//    )


// }
// // conditiona rendering option 4: &&
//  export default function Todo({task,isDone}){
//    return (
//      <li> {task} {isDone && ':Done'}</li>
//    )


// }
// conditiona rendering option 5: ||
// export default function Todo({task,isDone}){
//     return (
//       <li> {task} {isDone || ':Do it'}</li>
//     )
//  }

// conditional rating option 6
 export default function Todo({task,isDone}){
    let listItem;
        if(isDone){
            listItem= <li>Finished :{task}</li>
        }else{
         listItem =    <li>Work on:{task}</li>
        }
        return listItem;
    
    }

