import { useState } from 'react'
import { MessageNewUser } from './MessageNewUser';

export const CreateMessage = () => {
	const [showMsg, setshowMsg] = useState(true)
	return (
		<>
			{
				showMsg ?
					<div>
						<MessageNewUser onClick={showMsg => setshowMsg(!showMsg)} />
					</div> :
					null
			}
		</>
	)
}