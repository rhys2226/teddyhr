import React from 'react'

export default function AddAssignatory() {
    return (
        <div>
            <div className="form-group">
                <label htmlFor="">Document</label>
                <input type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="">Assignatory</label>
                <select className="form-control">
                    <option selected disabled>Choose...</option>
                </select>
            </div>
        </div>
    )
}
