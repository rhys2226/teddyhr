import React from 'react'

export default function LeaveEditForm() {
    return (
        <div>
            <div className="form-group">
                <label htmlFor="">Type</label>
                <select className="form-control">
                    <option>Vacation</option>
                    <option>Sick</option>
                    <option>Maternity</option>
                    <option>Special Privilege</option>
                    <option>Others, specify</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="">Next Credit days</label>
                <input type="number" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="">With Pay</label>
                <select className="form-control">
                    <option>Yes</option>
                    <option>No</option>
                </select>
            </div>
        </div>
    )
}
