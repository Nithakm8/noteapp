import {Router} from 'express'
import * as note from '../requestHandler.js'
const router=Router()
router.get('',note.getNotes)
router.post('/add',note.addNote)
router.get('/getNote/:id',note.getNote)
router.put('/editNote/:id',note.editNote)
router.delete('/deleteNote/:id',note.deleteNote)
export default router