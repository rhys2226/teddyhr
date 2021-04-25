export default function Content( props: any ) {
    return (
        <main role='main' className='main-content'>
            <div className='container-fluid'>
                <div className='row justify-content-center'>
                    <div className='col-12'>
                        {props.children}
                    </div>
                </div>
            </div>
        </main>
    )
}
