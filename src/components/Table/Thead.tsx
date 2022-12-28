import React, { ReactElement } from 'react'

const Thead = ({ children }: { children: ReactElement | ReactElement[] }) => {
    return (
        <thead>{children}</thead>
    )
}

export default Thead