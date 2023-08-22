import React from 'react'
import Button from '../../ui/Button'
import { useDispatch } from 'react-redux'
import { deleteItem } from './cartSlice'

export default function DeleteItem({pizzaId}) {
    const dispatch = useDispatch(pizzaId)

    return  <Button type="small" onClick={()=> dispatch(deleteItem(pizzaId))}>Delete</Button>
}
