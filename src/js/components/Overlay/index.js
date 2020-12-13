import React from 'react';
import { overlay } from './style.js';

const Overlay = ({children, showOverlay, clickTrigger})=>{

	return(
		<React.Fragment>
			{
				showOverlay?
				<div className={overlay} onClick={clickTrigger}>
					{children}
				</div>
				:null
			}
		</React.Fragment>
		)
}

export default Overlay;