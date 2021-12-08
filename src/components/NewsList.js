import React from 'react'

export default function NewsList(props) {
    
    console.log(props.results)

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-2">
                    <ul>
                        {props.results.length !==0 ? props.results.map(result => {
                            return (<li key={result.id}><a href={result.url} target="">{result.title}</a></li>)
                        })
                            : <p>Aucune données</p>
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
