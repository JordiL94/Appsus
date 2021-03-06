import { noteService } from "../../services/note.service.jsx";

export function EditNoteTxt({ note, onCloseEditModal }) {
	let { info: { txt } } = note;

	function handleChange(ev) {
		noteService.editNote(note, ev.target.value)
	}

	return (
		<div className="note-editor">
			<textarea
				value={txt}
				cols="50"
				rows="2"
				onChange={handleChange}></textarea>
			<button onClick={() => onCloseEditModal()}>Done</button>
		</div>
	);
}
