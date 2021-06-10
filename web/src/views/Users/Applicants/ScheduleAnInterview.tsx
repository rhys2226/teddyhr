import React, { FC } from 'react';

type Props = {
};

const ScheduleAnInterview: FC<Props> = ( props ) => {
    return (
        <div>
            <input id="scheduled_date" type="date" className="form-control" />
        </div>
    )
}

export default ScheduleAnInterview;
