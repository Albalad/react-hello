import React from 'react';

const Navar = (props) => {
    return (
        <div className='text-light'>
            <nav class="navbar navbar-expand-lg bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand text-light" href="#">Proyecto REACT</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarScroll">
                        <ul class="navbar-nav my-2 my-lg-0 navbar-nav-scroll " style={{ "--bs-scroll-height": "100px;" }}>
                            <li class="nav-item ">
                                <a className='nav-link text-light'>Home</a>
                            </li>
                            <li class="nav-item ">
                                <a className='nav-link text-light'>About</a>
                            </li>
                            <li class="nav-item ">
                                <a className='nav-link text-light'>Services</a>
                            </li>
                            <li class="nav-item me-5">
                                <a className='nav-link text-light'>Content</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navar;






{/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar scroll</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
            <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ "--bs-scroll-height": "100px;" }}>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">Link</a>
                </li>
            </ul>
        </div>
    </div>
</nav> */}