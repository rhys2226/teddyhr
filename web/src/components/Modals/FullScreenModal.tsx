import React, { FC } from 'react';

type Props = {};

const FullScreenModal: FC<Props> = (props) => {
	return (
		<div className='modal fade modal-full pt-3' role='dialog' aria-labelledby='mySmallModalLabel' aria-hidden='true'>
			<button aria-label='' type='button' className='close px-2' data-dismiss='modal' aria-hidden='true'>
				<span aria-hidden='true'>×</span>
			</button>
			<div className='modal-dialog modal-dialog-centered modal-xl' role='document'>
				<div className='modal-content'>
					<div className='modal-body text-center w-100'>{props.children}</div>
				</div>
			</div>
		</div>
	);
};

export default FullScreenModal;
