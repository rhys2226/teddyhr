import React from 'react'

export default function ApplicationForm() {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-10">
                    <h2 className="page-title">Form Wizard</h2>
                    <p>Using jQuery Steps as default wizard plugin. That is an extremely flexible, compact and feature-rich plugin.</p>
                    <div className="card my-4">
                        <div className="card-header">
                            <strong>Basic</strong>
                        </div>
                        <div className="card-body">
                            <div id="example-basic">
                                <h3>Keyboard</h3>
                                <section>
                                    <p>Try the keyboard navigation by clicking arrow left or right!</p>
                                </section>
                                <h3>Effects</h3>
                                <section>
                                    <p>Wonderful transition effects.</p>
                                </section>
                                <h3>Pager</h3>
                                <section>
                                    <p>The next and previous buttons help you to navigate through your content.</p>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
