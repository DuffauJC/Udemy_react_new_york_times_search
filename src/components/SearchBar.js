import React from 'react'

export default function SearchBar(props) {
    return (
        <nav className="navbar navbar-default navbar-fixed-top navbar-light">
            <div className="container margin-left" >
                <form className="card my-6" onSubmit={(e) => { e.preventDefault(); props.submit() }}>
                    <div className="card-body row no-gutters align-items-center">
                        <div className="col-auto">
                            <i className="fas fa-search h4 text-body"></i>
                        </div>
                        <div className="col">
                            <input className="form-control form-control-lg form-control-borderless" type="search"
                                placeholder="Search ..." onChange={(e) => props.change(e)} value={props.input} />
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-lg btn-info" type="submit" > Search </button>
                        </div>
                    </div>
                </form>
            </div>
        </nav>
    )
}
