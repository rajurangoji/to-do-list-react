import React, { memo } from 'react'

function Eachtask(props) {
    const { taskList } = props
    console.log(taskList)
    return (
        <div>
            {taskList}
        </div>
    )
}

export default  memo(Eachtask)
