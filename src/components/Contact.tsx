// import { useState } from "react";


// export default function Contact() {
//     const [result, setResult] = useState("");

//     const onSubmit = async (event) => {
//         event.preventDefault();
//         setResult("Sending....");
//         const formData = new FormData(event.target);

//         formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

//         const response = await fetch("https://api.web3forms.com/submit", {
//             method: "POST",
//             body: formData
//         });

//         const data = await response.json();

//         if (data.success) {
//             setResult("Form Submitted Successfully");
//             event.target.reset();
//         } else {
//             console.log("Error", data);
//             setResult(data.message);
//         }
//     };

//     return (
//         <div>
//             <form className="m-4 flex flex-col w-1/4 rounded-xl border-4 border border-gray-900 bg-white" onSubmit={onSubmit}>
//                 <div className="m-2">
//                     <label className="m-2" >Name</label>
//                     <input className="m-2 border rounded py-2 " type="text" name="name" required />
//                 </div>
//                 <div className="m-2">
//                     <label>Email</label>
//                     <input className="m-1" border-gray-700 type="email" name="email" required />
//                 </div>
//                 <div className="m-2">
//                     <label>Message</label>
//                     <textarea className="m-1 border-gray-700" name="message" required></textarea>
//                 </div>

//                 <button className="m-1 border-gray-700" type="submit">Submit Form</button>

//             </form>
//             <span>{result}</span>

//         </div>
//     );
// }