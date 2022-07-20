const copyright = `© ${new Date().getFullYear()} Movies. All Rights Reserved`

const Footer = () => {
    return (
        <>
       <footer className="bg-gray-100 text-center lg:text-left" style={{backgroundColor: "black"}}>
        <div className="container p-6">
            <div className="grid lg:grid-cols-4 md:grid-cols-2">
            <div className="mb-6">
                {/* <h5 className="uppercase font-bold mb-2.5 text-gray-800" style={{color: "white"}}>Media Center</h5> */}

                <ul className="list-none mb-0">
                <li>
                    <a href="#!" className="text-gray-800" style={{color: "white"}}>Audio & Subtitles</a>
                </li>
                <li>
                    <a href="#!" className="text-gray-800" style={{color: "white"}}>Media Center</a>
                </li>
                <li>
                    <a href="#!" className="text-gray-800" style={{color: "white"}}>Security</a>
                </li>
                <li>
                    <a href="#!" className="text-gray-800" style={{color: "white"}}>Contact Us</a>
                </li>
                <li>
                    <button className='btn-footer'>Service Code</button>
                </li>
                </ul>
            </div>

            <div className="mb-6">
                {/* <h5 className="uppercase font-bold mb-2.5 text-gray-800" style={{color: "white"}}>Links</h5> */}

                <ul className="list-none mb-0">
                <li>
                    <a href="#!" className="text-gray-800" style={{color: "white"}}>Investor Relations</a>
                </li>
                <li>
                    <a href="#!" className="text-gray-800" style={{color: "white"}}>Legal Provisions</a>
                </li>
                <li>
                    <a href="#!" className="text-gray-800" style={{color: "white"}}>Audio Descriptions</a>
                </li>
                <li>
                    <a href="#!" className="text-gray-800" style={{color: "white"}}>.</a>
                </li>
                </ul>
            </div>

            <div className="mb-6">
                {/* <h5 className="uppercase font-bold mb-2.5 text-gray-800" style={{color: "white"}}>Links</h5> */}

                <ul className="list-none mb-0">
                <li>
                    <a href="#!" className="text-gray-800" style={{color: "white"}}>Help Center</a>
                </li>
                <li>
                    <a href="#!" className="text-gray-800" style={{color: "white"}}>Jobs</a>
                </li>
                <li>
                    <a href="#!" className="text-gray-800" style={{color: "white"}}>Cookis Prefentions</a>
                </li>
                <li>
                    <a href="#!" className="text-gray-800" style={{color: "white"}}>.</a>
                </li>
                </ul>
            </div>

            <div className="mb-6">
                {/* <h5 className="uppercase font-bold mb-2.5 text-gray-800" style={{color: "white"}}>Links</h5> */}

                <ul className="list-none mb-0">
                <li>
                    <a href="#!" className="text-gray-800" style={{color: "white"}}>Gift Cards</a>
                </li>
                <li>
                    <a href="#!" className="text-gray-800" style={{color: "white"}}>Terms Of Use</a>
                </li>
                <li>
                    <a href="#!" className="text-gray-800" style={{color: "white"}}>Corporate Information</a>
                </li>
                {/* <li>
                    <a href="#!" className="text-gray-800" style={{color: "white"}}>Link 4</a>
                </li> */}
                </ul>
            </div>
            </div>
        </div>

        <div className="text-gray-700 text-center p-4" style= {{backgroundColor: "black", color: "white"}}>
            {copyright}
            {/* <a className="text-gray-800" href="https://tailwind-elements.com/"
                style={{color: "white"}}>Tailwind Elements & ARG17</a> */}
        </div>
        </footer>
        {/* <footer>
            <div className="text-gray-700 text-center p-4"
                style= {{ backgroundColor : "black" }}>
                 &copy; Copyright ARG17 - 2022 
            </div>
        </footer> */}
        </>
    )
};

export default Footer;