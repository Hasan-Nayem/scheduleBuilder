import React from 'react'

export default function Footer() {
    return (
        <footer className="w-100 footer">
            <div className="container fw-bolder">
                <div className="row">
                    <div className="col-md-4 col-sm-12 p-5">
                        {/* <h3 className="p-3 ">Frame & Focus</h3> */}
                        <img src="https://i.ibb.co/5WRrfD4/favicon.png" style={{ width: "10rem" }} className="p-3" alt="" />
                        <p className="text-wrap p-3 fs-5 text-muted">There are many variations of
                            passages of Lorem Ipsum
                            available, but the majority have
                            suffered alteration in some
                            form, by injected humour.</p>
                    </div>
                    <div className="col-md-4 col-sm-12 p-5">
                        <h3 className="p-3 ">Usefull Links</h3>
                        <ul className=" list-group-bg-dark p-3 f fs-5 text-muted">
                            <li className="list-group-item py-2">Home</li>
                            <li className="list-group-item py-2">Instructors</li>
                            <li className="list-group-item py-2">Classes</li>
                            <li className="list-group-item py-2">Blog</li>
                            <li className="list-group-item py-2">Contact Us</li>
                        </ul>
                    </div>

                    <div className="col-md-4 col-sm-12 p-5">
                        <h3 className="p-3">Contact Now</h3>

                        <p className="text-wrap p-2 fs-5 text-muted">555 4th 5t NW, Washington DC 20530, United States</p>
                        <p className="text-wrap p-2 fs-5 text-muted">+88 01750 000 000 +88 01750 000 000</p>
                        <p className="text-wrap p-2 fs-5 text-muted">nayemmh66@gmail.com info@gmail.com</p>

                    </div>

                </div>
            </div>
            <div className="text-center p-3" style={{ backgroundColor: "#FAFAFA" }}>
                <div className="row container mx-auto">
                    <div className="col-lg-6 col-sm-12" >
                        <p style={{ color: "#737373", fontWeight: "900" }}>Made With Love By Mehedi Hasan Nayem All Right Reserved</p>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        {/* <img src={icon} alt="" style={{ width: "300px" }} /> */}
                    </div>
                </div>
            </div>
        </footer>
    )
}
