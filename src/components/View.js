import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

export const View = ({authors, deleteAuthor}) => {
    return authors.map(author=>(
        <tr key={author.name}>
            <td>{author.name}</td>
            <td>{author.nationality}</td>
            <td>{author.genre}</td>
            <td>{author.book_written}</td>
            <td>{author.book_sold}</td>
            <td className='delete-btn' onClick={()=>deleteAuthor(author.name)}>
                <Icon icon={trash}/>
            </td>
        </tr>
    ))
}