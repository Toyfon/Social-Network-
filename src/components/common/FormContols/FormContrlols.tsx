import s from './FormControl.module.css'


// @ts-ignore
export const Textarea = ({field, form,...props}) => {
    debugger
// const showError = form.touched[field.name] &&
    return <div className={ form.errors[field.name]  ?  s.formControlError : s.formControlNotError}>
        <textarea {...field} {...props}/>
    </div>
}