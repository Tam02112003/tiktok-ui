// import React, { use } from "react";
// import { useState } from "react";
// import { useEffect } from "react";
// //Day la chuong trinh chon clean up function
// // function Content() {
// //     const [count , setCount] = useState(1);
    
// //     useEffect(() => {
// //         console.log(`Mounted or Re-Render lần ${count}`);
// //         //Clean up function
// //         return () => {
// //             console.log(`Cleanup lần ${count}`);
// //         }
// //     }, [count])
// //   return (
// //     <div>
// //       <h1>{count}</h1>
// //         <button onClick={() => setCount(count + 1)}>
// //             Click me!
// //             </button>
// //     </div>
// //   );
// // }

// //Day la chuong trinh chon anh
// // function Content() {
// //     const [avatar, setAvatar] = useState();
// //     useEffect(() => {
// //        //clean up function
// //         return () => {
// //             avatar && URL.revokeObjectURL(avatar.preview);
// //         }
// //     }, [avatar]);

// //     const handlePreviewAvatar = (e) => {
// //         const file = e.target.files[0];
       
// //         file.preview = URL.createObjectURL(file);
        
// //         setAvatar(file);
// //         // console.log(URL.createObjectURL(file));
// //     }

// //     return (
// //         <div>
// //             <input 
// //             type="file" 
// //             onChange={handlePreviewAvatar} 
// //             />
// //             {avatar && (
// //                 <img src={avatar.preview} width="80px" alt="avatar" />
// //             )}
// //         </div>
// //     );
// // }

// //Day la chuong trinh fake chat
// const lessons = [
//     { id: 1, name: 'React Hook' },
//     { id: 2, name: 'React Router' },
//     { id: 3, name: 'React Redux' }
// ]
// function Content(){
//     const [lessonId, setLessonId] = useState(1);
//     useEffect(() => {
//         const handleComment = ({detail}) => {
//             console.log(detail);
//         }
//       window.addEventListener(`lesson-${lessonId}`,handleComment)
//       return () => {
//           window.removeEventListener(`lesson-${lessonId}`,handleComment)
//         }  
//     }, [lessonId])
//     return (
//         <div>
//            <ul>
//                 {lessons.map(lesson => (
//                     <li 
//                     key={lesson.id}
//                     style={{ 
//                         color: lessonId === lesson.id ? 
//                         'red' : 
//                         '#333'
//                     }}
//                     onClick={() => setLessonId(lesson.id)}
//                     >
//                         {lesson.name}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }



// export default Content;