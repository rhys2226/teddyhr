import React from 'react'

export default function ApplicationStep2() {
    return (
        <div>
            <h3>Professional Data</h3>
            <section className='form-row mt-5'>
                <div className='form-group mb-3 col-12 col-md-8'>
                    <label>Alignment from Bachelors to  Post-graduate </label>
                    <select className='form-control'>
                        <option>Vertical</option>
                        <option>Non-Vertical</option>
                    </select>
                </div>
                <div className='form-group mb-3 col-12 col-md-6 mt-2'>
                    <label>Educational Attainments</label>
                    <select multiple className='form-control'>
                        <option>Phd</option>
                        <option>Masters</option>
                        <option>Bachelor</option>
                        <option>Vocational</option>
                        <option>Secondary</option>
                        <option>Primary</option>
                    </select>
                </div>
                <div className='form-group mb-3 col-12 col-md-6 mt-2'>
                    <label>Eligibilities</label>
                    <select multiple className='form-control'>
                        <option>Civil Service</option>
                        <option>PRC</option>
                    </select>
                </div>
                <div className='form-group mb-3 col-12 col-md-12 mt-2'>
                    <label>Degrees (Separated with comma (,))</label>
                    <textarea className='form-control' placeholder="Bachelor or Science in Information Technology, Masters in Information Technology, Phd in Information Technology "></textarea>
                </div>
                <div className='form-group mb-3 col-12 mt-2'>
                    <label>Work Experiences</label>
                    <textarea className='form-control'></textarea>
                </div>
                <div className='form-group mb-3 col-12 col-md-6'>
                    <label>Previous Employer</label>
                    <input type='text' className='form-control' />
                </div>
                <div className='form-group mb-3 col-12 col-md-6'>
                    <label>Employer's Contact Information</label>
                    <input type='text' className='form-control' />
                </div>
                <div className='col-12 mb-5 d-flex align-items-center justify-content-center mt-5'>
                    <button className='btn btn-outline-dark mx-2 px-md-5'>Prev</button>
                    <button className='btn btn-outline-success mx-2 px-md-5'>Next</button>
                </div>
            </section>
        </div>
    )
}
