// import React from 'react'

// const copyright = `© ${new Date().getFullYear()} Movies. All Rights Reserved`

// const Footer = () => {
//   return (
//     <div 
//         style={{backgroundColor: "#141414"}}
//         className=' w-[85%] mx-auto text-justify flex justify-between text-gray-400 my-24 text-sm'>
//         <div className='flex flex-col cursor-pointer'>
//             <p>Audio and Subtitle</p>
//             <p>Media Center</p>
//             <p>Security</p>
//             <p>Contact Us</p>
//             <p className='p-2 border border-gray-400 text-base my-2 w-[70%] text-center'>Service Code</p>
//             <p className='text-xs'>{copyright}</p>
//         </div>
//         <div className='flex flex-col cursor-pointer'>
//             <p>Auidio Description</p>
//             <p>Investor Relations</p>
//             <p>Legal Provisions</p>
//         </div>
//         <div className='flex flex-col cursor-pointer'>
//             <p>Help Center</p>
//             <p>Jobs</p>
//             <p>Cookie Preferences</p>
//         </div>
//         <div className='flex flex-col cursor-pointer'>
//             <p>Gift Card</p>
//             <p>Terms of Use</p>
//             <p>Corporate Information</p>
//         </div>
//     </div>
//   )
// }

// export default Footer




// const copyright = `© ${new Date().getFullYear()} Movies. All Rights Reserved`

// const Footer = () => {
//     return (
//         <>
//        <footer className="bg-gray-100 text-center lg:text-left" style={{backgroundColor: "black"}}>
//         <div className="container p-6">
//             <div className="grid lg:grid-cols-4 md:grid-cols-2">
//             <div className="mb-6">
//                 {/* <h5 className="uppercase font-bold mb-2.5 text-gray-800" style={{color: "white"}}>Media Center</h5> */}

//                 <ul className="list-none mb-0">
//                 <li>
//                     <a href="#!" className="text-gray-800" style={{color: "white"}}>Audio & Subtitles</a>
//                 </li>
//                 <li>
//                     <a href="#!" className="text-gray-800" style={{color: "white"}}>Media Center</a>
//                 </li>
//                 <li>
//                     <a href="#!" className="text-gray-800" style={{color: "white"}}>Security</a>
//                 </li>
//                 <li>
//                     <a href="#!" className="text-gray-800" style={{color: "white"}}>Contact Us</a>
//                 </li>
//                 <li>
//                     <button className='btn-footer' style={{color: "white", borderColor: "white"}}>Service Code</button>
//                 </li>
//                 </ul>
//             </div>

//             <div className="mb-6">
//                 {/* <h5 className="uppercase font-bold mb-2.5 text-gray-800" style={{color: "white"}}>Links</h5> */}

//                 <ul className="list-none mb-0">
//                 <li>
//                     <a href="#!" className="text-gray-800" style={{color: "white"}}>Investor Relations</a>
//                 </li>
//                 <li>
//                     <a href="#!" className="text-gray-800" style={{color: "white"}}>Legal Provisions</a>
//                 </li>
//                 <li>
//                     <a href="#!" className="text-gray-800" style={{color: "white"}}>Audio Descriptions</a>
//                 </li>
//                 <li>
//                     <a href="#!" className="text-gray-800" style={{color: "white"}}>.</a>
//                 </li>
//                 </ul>
//             </div>

//             <div className="mb-6">
//                 {/* <h5 className="uppercase font-bold mb-2.5 text-gray-800" style={{color: "white"}}>Links</h5> */}

//                 <ul className="list-none mb-0">
//                 <li>
//                     <a href="#!" className="text-gray-800" style={{color: "white"}}>Help Center</a>
//                 </li>
//                 <li>
//                     <a href="#!" className="text-gray-800" style={{color: "white"}}>Jobs</a>
//                 </li>
//                 <li>
//                     <a href="#!" className="text-gray-800" style={{color: "white"}}>Cookis Prefentions</a>
//                 </li>
//                 <li>
//                     <a href="#!" className="text-gray-800" style={{color: "white"}}>.</a>
//                 </li>
//                 </ul>
//             </div>

//             <div className="mb-6">
//                 {/* <h5 className="uppercase font-bold mb-2.5 text-gray-800" style={{color: "white"}}>Links</h5> */}

//                 <ul className="list-none mb-0">
//                 <li>
//                     <a href="#!" className="text-gray-800" style={{color: "white"}}>Gift Cards</a>
//                 </li>
//                 <li>
//                     <a href="#!" className="text-gray-800" style={{color: "white"}}>Terms Of Use</a>
//                 </li>
//                 <li>
//                     <a href="#!" className="text-gray-800" style={{color: "white"}}>Corporate Information</a>
//                 </li>
//                 {/* <li>
//                     <a href="#!" className="text-gray-800" style={{color: "white"}}>Link 4</a>
//                 </li> */}
//                 </ul>
//             </div>
//             </div>
//         </div>

//         <div className="text-gray-700 text-center p-4" style= {{backgroundColor: "black", color: "white"}}>
//             {copyright}
//             {/* <a className="text-gray-800" href="https://tailwind-elements.com/"
//                 style={{color: "white"}}>Tailwind Elements & ARG17</a> */}
//         </div>
//         </footer>
//         {/* <footer>
//             <div className="text-gray-700 text-center p-4"
//                 style= {{ backgroundColor : "black" }}>
//                  &copy; Copyright ARG17 - 2022 
//             </div>
//         </footer> */}
//         </>
//     )
// };

// export default Footer;


import React from 'react'

const Footer = () => {
    const links = [
        'Audio and Subtitles',
        'Media Center',
        'Security',
        'Contact us',
        'Audio Description',
        'Investor Relations',
        'Legal Provisions',
        '.',
        'Help center',
        'Jobs',
        'Cookie Preferences',
        '.',
        'Gift Cards',
        'Terms of Use',
        'Corporate Information'
    ]

    const copyright = `© ${new Date().getFullYear()} Movies. All Rights Reserved`

    return (
        <div className='footer'>
            <ul className='footer-links'>
                {links.map((l, i) => (
                    <li key={i}>{l}</li>
                ))}
            </ul>
            <button className='btn-footer'>Service Code</button>
            <div className='copyright'>{copyright}</div>
        </div>
    )
}

export default Footer
